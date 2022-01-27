import {
   CHANGE_SEARCHFIELD,
   REQUEST_EMPLOYEES_PENDING,
   REQUEST_EMPLOYEES_SUCCESS,
   REQUEST_EMPLOYEES_FAILED,
} from "./constants";

const initialStateSearch = {
   searchField: "",
};

export const searchEmployees = (state = initialStateSearch, action = {}) => {
   switch (action.type) {
      case CHANGE_SEARCHFIELD:
         return Object.assign({}, state, { searchField: action.payload });
      default:
         return state;
   }
};

const initialStateEmployees = {
   employees: [],
   isPending: true,
};

export const requestEmployees = (
   state = initialStateEmployees,
   action = {}
) => {
   switch (action.type) {
      case REQUEST_EMPLOYEES_PENDING:
         return Object.assign({}, state, { isPending: true });
      case REQUEST_EMPLOYEES_SUCCESS:
         return Object.assign({}, state, {
            employees: action.payload,
            isPending: false,
         });
      case REQUEST_EMPLOYEES_FAILED:
         return Object.assign({}, state, { error: action.payload });
      default:
         return state;
   }
};
