import { combineReducers } from "redux";
import {claimsSlice} from "./claims-reducer";
import { assignmentsSlice } from "./assignments-reducer";

const rootReducer = combineReducers({
    claimsState: claimsSlice.reducer,
    assignmentState: assignmentsSlice.reducer
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;