import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers";

const loggerMiddleware = createLogger();

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk, loggerMiddleware)
);
store.subscribe(() => console.log(store.getState()));

export default store;
