import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { requestEmployees, searchEmployees } from "./reducers";

const logger = createLogger();
const rootReducers = combineReducers({ requestEmployees, searchEmployees });

const store = createStore(
   rootReducers,
   applyMiddleware(thunkMiddleware, logger)
);

export default store;
