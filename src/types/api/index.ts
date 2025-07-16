export type TResponse<T = any> = {
  success: boolean;
  message: string;
  result?: T;
  access_token?: string;
};