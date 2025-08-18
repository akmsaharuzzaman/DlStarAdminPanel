export enum ClientRoutes {
  Users = "/users",
  SubAdmins = "/sub-admins",
  Agencies = "/agencies",
  Merchants = "/merchants",
  Resellers = "/resellers",
  Hosts = "/hosts",
  Gifts = "/gifts",
}

export enum Roles {
  Admin = "admin",
  SubAdmin = "sub-admin",
  Agency = "agency",
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
