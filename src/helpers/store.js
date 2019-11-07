import {createStore} from "redux";
// import {createLogger} from "redux-logger";

import rootReducer from "../reducers";

// const loggerMiddleware = createLogger(); // TODO: applyMiddleware(loggerMiddleware)

const store = createStore(rootReducer);

export default store;
