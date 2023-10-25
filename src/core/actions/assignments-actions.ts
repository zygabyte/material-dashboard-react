import { createAsyncThunk } from "@reduxjs/toolkit";
import { FilterAssignmentRequest } from "../models/assignments/requests";
import { createAssignmentAsync, getAssignmentsAsync } from "../services/assignments-service";
import { AssignmentModel } from "../models/assignments/index";
import { ListResponse, ObjectResponse } from "../models/common/responses";
import { DefaultRequest } from "../models/common/requests/index";

export const assignmentGetAssignments = createAsyncThunk(
  "assignment/getAssignments",
  async (request?: FilterAssignmentRequest) : Promise<ListResponse<AssignmentModel>> => {
    if (request === undefined) request = DefaultRequest;
    
    return await getAssignmentsAsync(request);
  }
);

export const assignmentCreateAssignment = createAsyncThunk(
  "assignment/createAssignment",
  async (request: AssignmentModel) : Promise<ObjectResponse<AssignmentModel>> => {
    return await createAssignmentAsync(request);
  }
);