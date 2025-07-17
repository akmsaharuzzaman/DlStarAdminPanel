export type TResponse<T = any> = {
  success: boolean;
  message: string;
  result?: T;
  access_token?: string;
};

export type Tpagination = {
  total: number;
  limit: number;
  page: number;
  totalPage: number;
};
