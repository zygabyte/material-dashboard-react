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
