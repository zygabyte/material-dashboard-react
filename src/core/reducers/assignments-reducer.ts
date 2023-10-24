import { createSlice } from "@reduxjs/toolkit";
import {AssignmentModel} from "../models/assignments";
import { assignmentCreateAssignment, assignmentGetAssignments } from "../actions/assignments-actions";
import { DEFAULT_PAGE, FAILED, IDLE, LOADING, SUCCEEDED } from "../models/constants/index";
import { IRootState } from "./index";

export interface StateTypes {
  loadingAssignments: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
  loadingCreateAssignment: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
  assignments: AssignmentModel[];
  selectedAssignment?: AssignmentModel;
  pageNumber: number;
  totalAssignments: number;
}

const initialState: StateTypes = {
  loadingAssignments: IDLE,
  loadingCreateAssignment: IDLE,
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
      state.loadingAssignments = LOADING;
    });
    builder.addCase(assignmentGetAssignments.fulfilled, (state, { payload }) => {
      state.assignments = payload.data;
      state.totalAssignments = payload.total;
      state.loadingAssignments = SUCCEEDED;
    });
    builder.addCase(assignmentGetAssignments.rejected, (state) => {
      state.loadingAssignments = FAILED;
    });

    builder.addCase(assignmentCreateAssignment.pending, (state) => {
      state.loadingCreateAssignment = LOADING;
    });
    builder.addCase(assignmentCreateAssignment.fulfilled, (state, { payload }) => {
      state.assignments = [payload.data, ...state.assignments]
      state.loadingCreateAssignment = SUCCEEDED;
    });
    builder.addCase(assignmentCreateAssignment.rejected, (state) => {
      state.loadingCreateAssignment = FAILED;
    });
  },
});

export const { handleSelectedAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;

export const getAssignments = (state: IRootState) => state.assignmentState.assignments;

export const getAssignment = (state: IRootState, assignmentId: string) =>
  state.assignmentState.assignments.find(assignment => assignment.assignmentId == assignmentId);

export const getPageStatus = (state: IRootState) => state.assignmentState.loadingAssignments;