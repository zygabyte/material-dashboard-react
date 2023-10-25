import { DEFAULT_PAGE, DEFAULT_PAGE_ACTION, DEFAULT_PAGE_SIZE } from "../../constants/index";

export interface PaginatedRequest{
    pageNumber: number,
    pageSize: number,
    paginate: boolean
}

export interface DateRangeRequest{
    startPeriod: Date,
    endPeriod: Date
}

export interface PaginatedDateRangeRequest extends DateRangeRequest, PaginatedRequest {
}

export const DefaultRequest: PaginatedRequest = {
    pageNumber: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE, paginate: DEFAULT_PAGE_ACTION
}
