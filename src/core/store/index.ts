import { applyMiddleware, Dispatch, Middleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const logger = createLogger();
// const middlewares = [logger, thunk];
// const middlewares = [logger];
const middlewares: Middleware<{}, any, Dispatch>[] = [];

const initialState = {};

const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middlewares)
        : composeWithDevTools(applyMiddleware(...middlewares));

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
export type AppDispatch = typeof store.dispatch;

export default store;