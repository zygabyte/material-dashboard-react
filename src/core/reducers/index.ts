import { combineReducers } from "redux";
import {claimsSlice} from "./claims-reducer";

const rootReducer = combineReducers({
    claimsState: claimsSlice.reducer
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;