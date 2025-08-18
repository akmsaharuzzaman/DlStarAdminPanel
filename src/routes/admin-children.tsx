import { DashboardPage } from "@/pages";
import AgencyById from "@/pages/AgencyById";
import CountryAdmin from "@/pages/CountryAdmin";
import CountryAdminById from "@/pages/CountryAdminById";
import Merchant from "@/pages/Merchant";
import MerchantById from "@/pages/MerchantById";
import SubAdmin from "@/pages/Sub-admin";
import SubAdminById from "@/pages/SubAdminById";
import { Users } from "lucide-react";

export const adminChildren = [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/sub-admins",
        element: <SubAdmin />,
      },
      {
        path: "/sub-admins/:subAdminId", // show agency lists on table format by subAdminId
        element: <SubAdminById />,
      },
      {
        path: "/agencies/:agencyId", // show hosts lists in table by agencyId
        element: <AgencyById />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/merchants", // show all merchant
        element: <Merchant />,
      },
      {
        path: "/merchants/:merchantId", // show merchant details by merchantId
        element: <MerchantById />,
      },
      {
        path: "/country-admin", // show all Country Admins
        element: <CountryAdmin />,
      },
      {
        path: "/sub-country-admin/:countryAdminId", // show country-admin details by countryAdminId
        element: <CountryAdminById />,
      },
    ]