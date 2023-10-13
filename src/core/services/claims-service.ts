import {apiClient} from "./configure-services";
import {FilterClaimRequest} from "../models/claims/requests";
import {EndPoints} from "../models/constants/endpoints";

export const getClaimsAsync = async (
    request: FilterClaimRequest
) => {
    let requestUrl = `${EndPoints.claims}?pageNumber=${request.pageNumber}&pageSize=${request.pageSize}&paginate=${request.paginate}`;
    
    const response = await apiClient.get(requestUrl);
    return { claims: response.data.data, total: response.data.total };
};