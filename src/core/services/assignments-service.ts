import { EndPoints } from "../models/constants/endpoints";
import { apiClient } from "./configure-services";
import { FilterAssignmentRequest } from "../models/assignments/requests";
import { AssignmentModel } from "../models/assignments/index";
import { ListResponse, ObjectResponse } from "../models/common/responses";

export const getAssignmentsAsync = async (
  request: FilterAssignmentRequest
) : Promise<ListResponse<AssignmentModel>> => {
  const requestUrl = `${EndPoints.assignments}?pageNumber=${request.pageNumber}&pageSize=${request.pageSize}&paginate=${request.paginate}`;

  const response = await apiClient.get(requestUrl);
  return response.data;
};

export const createAssignmentAsync = async (
  request: AssignmentModel
) : Promise<ObjectResponse<AssignmentModel>> => {
  const requestUrl = `${EndPoints.assignments}`;

  const response = await apiClient.post(requestUrl, request);
  return response.data;
};