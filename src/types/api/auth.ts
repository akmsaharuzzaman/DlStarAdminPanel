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
  activityZone: {
    zone: string;
  };
  level: number;
  whoCanTextMe: "all_users" | string;
  _id: string;
  email: string;
  userStateInApp: "Offline" | "Online" | string;
  userPermissions: string[];
  country: string;
  avatar: string;
  name: string;
  uid: string;
  userRole: "user" | "admin" | string;
  countryLanguages: string[];
  isViewer: boolean;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  __v: number;
  birthday: string; // ISO Date string
  gender: "Male" | "Female" | "Other" | string;
  highLevelRequirements: string[];
  stats: {
    coins: number;
    diamonds: number;
  };
};
