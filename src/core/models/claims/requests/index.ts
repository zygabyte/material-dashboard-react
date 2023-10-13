import {PaginatedRequest} from "../../common/requests";

export interface FilterClaimRequest extends PaginatedRequest {
    claimNumber?: string | null;
    customerName?: string | null;
    claimStatus?: number | null;
    claimType?: number | null;
}