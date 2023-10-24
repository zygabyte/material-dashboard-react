export interface StatusResponse{
  description: string,
  code: string,
}

export interface ObjectResponse<T> extends StatusResponse{
  data: T,
}

export interface ListResponse<T> extends StatusResponse{
  data: T[],
  total: number,
}