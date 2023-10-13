import { PaginatedRequest } from "../../common/requests/index";

export interface FilterAssignmentRequest extends PaginatedRequest {
  customerName?: string | null;
  claimNumber?: string | null;
  assignmentStatus?: number | null;
  jobType?: number | null;
}