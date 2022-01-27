import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ employees }) {
   return (
      <div
         className=" p-10"
         style={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            justifyItems: "center",
         }}
      >
         {employees.map((emp, i) => {
            return <EmployeeCard key={i} employee={emp} />;
         })}
      </div>
   );
}

export default EmployeeCardList;
