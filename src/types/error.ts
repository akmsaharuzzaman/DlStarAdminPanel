export type TError = {
  data: {
    message: string;
    err: {
      statusCode: number;
    };
    errorSources: object[];
    stack: string;
    success: boolean;
  };
  status: number;
};
