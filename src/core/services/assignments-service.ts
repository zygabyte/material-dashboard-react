import { EndPoints } from "../models/constants/endpoints";
import { apiClient } from "./configure-services";
import { FilterAssignmentRequest } from "../models/assignments/requests";

export const getAssignmentsAsync = async (
  request: FilterAssignmentRequest
) => {
  const requestUrl = `${EndPoints.assignments}?pageNumber=${request.pageNumber}&pageSize=${request.pageSize}&paginate=${request.paginate}`;

  const response = await apiClient.get(requestUrl);
  return { assignments: response.data.data, total: response.data.total };
};