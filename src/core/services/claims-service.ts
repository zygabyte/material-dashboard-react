import {apiClient} from "./configure-services";
import {FilterClaimRequest} from "../models/claims/requests";
import {EndPoints} from "../models/constants/endpoints";
import { ClaimModel } from "../models/claims/index";
import { ListResponse, ObjectResponse } from "../models/common/responses/index";

export const getClaimsAsync = async (
    request: FilterClaimRequest
) : Promise<ListResponse<ClaimModel>> => {
    let requestUrl = `${EndPoints.claims}?pageNumber=${request.pageNumber}&pageSize=${request.pageSize}&paginate=${request.paginate}`;
    
    const response = await apiClient.get(requestUrl);
    return response.data;
};
export const createClaimAsync = async (
    request: ClaimModel
) : Promise<ObjectResponse<ClaimModel>> => {
    let requestUrl = `${EndPoints.claims}`;
    
    const response = await apiClient.post(requestUrl, request);
    return response.data;
};