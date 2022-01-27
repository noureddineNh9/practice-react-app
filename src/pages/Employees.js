import React from "react";
import { connect } from "react-redux";
import EmployeeCardList from "../components/EmployeeCardList";
import { requestEmployees, setSearchField } from "../store/actions";
import { Switch, Route, Link } from "react-router-dom";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
   return {
      searchField: state.searchEmployees.searchField,
      employees: state.requestEmployees.employees,
      isPending: state.requestEmployees.isPending,
   };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
   return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestEmployees: () => dispatch(requestEmployees()),
   };
};

class Employees extends React.Component {
   componentDidMount() {
      this.props.onRequestEmployees();
   }
   render() {
      const { employees, searchField, onSearchChange, isPending } = this.props;
      const filteredEmployees = employees.filter((employee) => {
         return employee.name.toLowerCase().includes(searchField.toLowerCase());
      });

      return (
         <>
            <h2>Employees</h2>
            <div className=" flex justify-center p-6">
               <input
                  className="border px-4 py-2 "
                  type="search"
                  placeholder="search employee"
                  onChange={onSearchChange}
               />
            </div>
            {isPending ? (
               <h2 className="text-center mt-12">loading . . .</h2>
            ) : (
               <EmployeeCardList employees={filteredEmployees} />
            )}
         </>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
