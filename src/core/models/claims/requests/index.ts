import {PaginatedRequest} from "../../common/requests";

export interface FilterClaimRequest extends PaginatedRequest {
    customerName?: string | null;
    claimStatus?: number | null;
    claimType?: number | null;
}