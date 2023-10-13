import { createAsyncThunk } from "@reduxjs/toolkit";
import { FilterAssignmentRequest } from "../models/assignments/requests";
import { getAssignmentsAsync } from "../services/assignments-service";

export const assignmentGetAssignments = createAsyncThunk(
  "assignment/getAssignments",
  async (request: FilterAssignmentRequest) => {
    return await getAssignmentsAsync(request);
  }
);