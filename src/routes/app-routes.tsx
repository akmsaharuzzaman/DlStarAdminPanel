import { Roles } from "@/constants/route.enum";
import { DashboardPage } from "@/pages";
import AgencyById from "@/pages/AgencyById";
import CountryAdmin from "@/pages/CountryAdmin";
import CountryAdminById from "@/pages/CountryAdminById";
import { GiftListsPage } from "@/pages/GiftLIsts";
import Merchant from "@/pages/Merchant";
import MerchantById from "@/pages/MerchantById";
import SubAdmin from "@/pages/Sub-admin";
import SubAdminById from "@/pages/SubAdminById";
import Users from "@/pages/Users";

export const appRoutes = [
  {
    path: "/",
    element: <DashboardPage />,
    roles: [
      Roles.Admin,
      Roles.SubAdmin,
      Roles.Agency,
      Roles.Merchant,
      Roles.Reseller,
      Roles.CountryAdmin,
    ],
  },
  {
    path: "/agencies/:agencyId", // show hosts lists in table by agencyId
    element: <AgencyById />,
    roles: [Roles.Admin, Roles.SubAdmin, Roles.Agency],
  },
  {
    path: "/sub-admins/:subAdminId", // show agency lists on table format by subAdminId
    element: <SubAdminById />,
    roles: [Roles.Admin, Roles.SubAdmin],
  },
  {
    path: "/users",
    element: <Users />,
    roles: [Roles.Admin, Roles.SubAdmin],
  },
  {
    path: "/sub-country-admin/:countryAdminId", // show country-admin details by countryAdminId
    element: <CountryAdminById />,
    roles: [Roles.Admin, Roles.CountryAdmin],
  },
  {
    path: "/sub-admins",
    element: <SubAdmin />,
    roles: [Roles.Admin],
  },
  {
    path: "/merchants", // show all merchant
    element: <Merchant />,
    roles: [Roles.Admin],
  },
  {
    path: "/merchants/:merchantId", // show merchant details (reseller-list) by merchantId
    element: <MerchantById />,
    roles: [Roles.Admin],
  },
  {
    path: "/country-admin", // show all country-admin
    element: <CountryAdmin />,
    roles: [Roles.Admin],
  },
  {
    path: "/gifts",
    element: <GiftListsPage />,
    roles: [Roles.Admin],
  },
];
