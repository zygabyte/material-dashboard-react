import { createSlice } from "@reduxjs/toolkit";
import {AssignmentModel} from "../models/assignments";
import {assignmentGetAssignments} from "../actions/assignments-actions";
import { DEFAULT_PAGE, FAILED, IDLE, LOADING, SUCCEEDED } from "../models/constants/index";
import { IRootState } from "./index";

export interface StateTypes {
  status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
  assignments: AssignmentModel[];
  selectedAssignment?: AssignmentModel;
  pageNumber: number;
  totalAssignments: number;
}

const initialState: StateTypes = {
  status: IDLE,
  assignments: [],
  selectedAssignment: undefined,
  pageNumber: DEFAULT_PAGE,
  totalAssignments: 0
};

export const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: initialState,
  reducers: {
    handleSelectedAssignment: (state, { payload }) => {
      state.selectedAssignment = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(assignmentGetAssignments.pending, (state) => {
      state.status = LOADING;
    });
    builder.addCase(assignmentGetAssignments.fulfilled, (state, { payload }) => {
      state.assignments = payload.assignments;
      state.totalAssignments = payload.total;
      state.status = SUCCEEDED;
    });
    builder.addCase(assignmentGetAssignments.rejected, (state) => {
      state.status = FAILED;
    });
  },
});

export const { handleSelectedAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;

export const getAssignments = (state: IRootState) => state.assignmentState.assignments;

export const getAssignment = (state: IRootState, assignmentId: string) =>
  state.assignmentState.assignments.find(assignment => assignment.assignmentId == assignmentId);

export const getPageStatus = (state: IRootState) => state.assignmentState.status;