export type TPortalLoginBody = {
  userId: string;
  password: string;
};

export type TApplyWithdrawBody = {
  accountType: string;
  accountNumber: string;
  totalSalary: number;
};
