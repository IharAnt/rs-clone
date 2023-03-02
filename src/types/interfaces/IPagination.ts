export interface IPaginationResponse<T> extends IPaginationData {
  items: T[];
}

export interface IPaginationData {
  count: number;
  page: number;
  limit: number;
}
