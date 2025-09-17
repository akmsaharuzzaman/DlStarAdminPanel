export enum ClientRoutes {
  Users = "/users",
  SubAdmins = "/sub-admins",
  Agencies = "/agencies",
  Merchants = "/merchants",
  Resellers = "/resellers",
  Hosts = "/hosts",
  Gifts = "/gifts",
  CountryAdmins = "/country-admin",
  WithdrawHistory = "/withdraw-history",
  AgencyWithdrawHistory = "/agency-withdraw-history",
  hostWithdrawHistory = "/host-withdraw-history",
  TransactionHistory = "/transaction-history",
  SalaryManagement = "/salary-management",

  // creating pages
  CreateSubAdmin = "/create-sub-admin",
  CreateAgency = "/create-agency",
  CreateMerchant = "/create-merchant",
  CreateReseller = "/create-reseller",
  CreateHost = "/create-host",
  CreateCountryAdmin = "/create-country-admin",

  // External Links
  GreedyGameDashboardPanel = "http://31.97.222.97:9001",
}

export enum Roles {
  Admin = "admin",
  SubAdmin = "sub-admin",
  Agency = "agency",
  Host = "host",
  Reseller = "re-seller",
  Merchant = "merchant",
  CountryAdmin = "country-admin",
  SubCountryAdmin = "sub-country-admin",
}

export enum Permissions {
  CoinDistribution = "coin-distributor",
  PromoteUser = "promote-user",
  UpdateUser = "update-users",
  BlockUser = "block-user",
  DeviceBan = "device-ban",
  LiveRoomClose = "live-room-close",
}
