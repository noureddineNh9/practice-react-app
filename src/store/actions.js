import { apiCall } from "../api/api";
import {
   CHANGE_SEARCHFIELD,
   REQUEST_EMPLOYEES_PENDING,
   REQUEST_EMPLOYEES_SUCCESS,
   REQUEST_EMPLOYEES_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
   type: CHANGE_SEARCHFIELD,
   payload: text,
});

export const requestEmployees = () => (dispatch) => {
   dispatch({ type: REQUEST_EMPLOYEES_PENDING });
   apiCall("https://jsonplaceholder.typicode.com/users")
      .then((data) =>
         dispatch({ type: REQUEST_EMPLOYEES_SUCCESS, payload: data })
      )
      .catch((error) =>
         dispatch({ type: REQUEST_EMPLOYEES_FAILED, payload: error })
      );
};
