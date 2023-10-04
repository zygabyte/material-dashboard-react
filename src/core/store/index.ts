import {AnyAction, applyMiddleware, Dispatch, Middleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const logger = createLogger();
// const middlewares = [logger, thunk];
// const middlewares = [logger];
const middlewares: Middleware<{}, any, Dispatch>[] = [];

const initialState = {};

const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middlewares)
        : composeWithDevTools(applyMiddleware(...middlewares));

// const store = createStore(rootReducer, initialState, devTools);
// configureStore(rootReducer, initialState, devTools)
const store = configureStore({
    reducer: rootReducer,
    //   middleware: [...middlewares],
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    //   devTools: devTools
});
export type AppDispatch = typeof store.dispatch;
export default store;