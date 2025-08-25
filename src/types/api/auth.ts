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

// export type TUser = {
//   activityZone: {
//     zone: string;
//   };
//   level: number;
//   whoCanTextMe: "all_users" | string;
//   _id: string;
//   email: string;
//   userStateInApp: "Offline" | "Online" | string;
//   userPermissions: string[];
//   country: string;
//   avatar: string;
//   name: string;
//   uid: string;
//   userRole: "user" | "admin" | string;
//   countryLanguages: string[];
//   isViewer: boolean;
//   createdAt: string; // ISO Date string
//   updatedAt: string; // ISO Date string
//   __v: number;
//   birthday: string; // ISO Date string
//   gender: "Male" | "Female" | "Other" | string;
//   highLevelRequirements: string[];
//   stats: {
//     coins: number;
//     diamonds: number;
//     level: number;
//     stars: number;
//     gifts: number[];
//   };
// };

export type TUser = {
  _id: string;
  email: string;
  userStateInApp: string;
  userPermissions: string[];
  avatar: string;
  name: string;
  uid: string;
  userId: string;
  userRole: string;
  country?: string;
  countryLanguages: string[];
  isViewer: false;
  activityZone: {
    zone: string;
  };
  createdAt: string;
  updatedAt: string;
  birthday: string;
  gender: string;
  stats: {
    userId: string;
    stars?: number;
    coins?: number;
    diamonds?: number;
    levels?: number;
    gifts: [];
    createdAt: string;
    updatedAt: string;
  };
};

export type TCreatePortalRoleBody = {
  name: string;
  userId: string;
  password: string;
  designation: string;
  userRole: string;
  parentCreator?: string;
  userPermissions?: string[];
};
