import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'; // for async actions
import {createLogger} from "redux-logger";

import rootReducer from "../reducers";

const loggerMiddleware = createLogger(); // TODO: applyMiddleware(loggerMiddleware)

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;
