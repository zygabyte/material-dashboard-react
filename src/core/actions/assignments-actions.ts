import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { FilterAssignmentRequest } from "../models/assignments/requests";
import { createAssignmentAsync, getAssignmentsAsync } from "../services/assignments-service";
import { AssignmentModel } from "../models/assignments/index";
import { ListResponse, ObjectResponse } from "../models/common/responses";

export const assignmentGetAssignments : AsyncThunk<ListResponse<AssignmentModel>, any, any> = createAsyncThunk(
  "assignment/getAssignments",
  async (request: FilterAssignmentRequest) : Promise<ListResponse<AssignmentModel>> => {
    return await getAssignmentsAsync(request);
  }
);

export const assignmentCreateAssignment : AsyncThunk<ObjectResponse<AssignmentModel>, any, any>  = createAsyncThunk(
  "assignment/createAssignment",
  async (request: AssignmentModel) : Promise<ObjectResponse<AssignmentModel>> => {
    return await createAssignmentAsync(request);
  }
);