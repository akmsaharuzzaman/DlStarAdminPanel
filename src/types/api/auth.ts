export type TLoginBody = {
  username: string;
  password: string;
};
export type TResetPassword = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export type TForgetPassword = {
  email: string;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

// RESPONSES TYPES



export type TUser = {
  _id: string;
  username: string;
  password: string;
  email: string;
  userRole: "admin" | "user";
  coins: number;
  createdAt: string;
  updatedAt: string;
};
