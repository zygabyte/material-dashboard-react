import {apiClient} from "./configure-services";
import {FilterClaimRequest} from "../models/claims/requests";
import {EndPoints} from "../models/constants/endpoints";
import { ClaimModel } from "../models/claims/index";

export const getClaimsAsync = async (
    request: FilterClaimRequest
) => {
    let requestUrl = `${EndPoints.claims}?pageNumber=${request.pageNumber}&pageSize=${request.pageSize}&paginate=${request.paginate}`;
    
    const response = await apiClient.get(requestUrl);
    return { claims: response.data.data, total: response.data.total };
};
export const createClaimAsync = async (
    request: ClaimModel
) => {
    let requestUrl = `${EndPoints.claims}`;
    
    const response = await apiClient.post(requestUrl, request);
    return { claim: response.data.data, code: response.data.code, message: response.data.description };
};