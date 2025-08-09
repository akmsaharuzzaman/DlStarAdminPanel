import { ModalDialog } from "@/components/dialog/modal-dialog";
import { BlockUserForm } from "@/components/forms/block-user-form";
import { CreateAgencyForm } from "@/components/forms/create-agency-form";
import { CreateHostForm } from "@/components/forms/create-host-form";
import { CreateMerchangeForm } from "@/components/forms/create-merchant-form";
import { CreateReselerForm } from "@/components/forms/create-reseler-form";
import { CreateSubAdmin } from "@/components/forms/create-sub-admin";
import { RemoveHostForm } from "@/components/forms/remove-host-form";
import { SellCoinForm } from "@/components/forms/sell-coin-form";
import { DashboardContent } from "@/components/pages/dashboard/dashboard";
import { ModalContentConfig, ModalName, Role } from "@/types/pages/dashboard";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
const roleOptions: { value: Role; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "sub-admin", label: "Sub-Admin" },
  { value: "agency", label: "Agency" },
  { value: "merchant", label: "Merchant" },
  { value: "re-seller", label: "Re-Seller" },
];

/**
 * modalContentConfig: All modal titles and content for each modal action.
 * Replace <p>...</p> with your actual forms/components as needed.
 */
const modalContentConfig: Record<ModalName, ModalContentConfig> = {
  sellCoin: {
    title: "Sell Coin",
    description: "Send coins to a user, reseller, or merchant.",
    content: <SellCoinForm />,
  },
  createSubAdmin: {
    title: "Create Sub-Admin",
    content: <CreateSubAdmin />,
  },
  createMerchant: {
    title: "Create Merchant",
    content: <CreateMerchangeForm />,
  },
  createReseller: {
    title: "Create Reseller",
    content: <CreateReselerForm />,
  },
  createAgency: {
    title: "Create Agency",
    content: <CreateAgencyForm />,
  },
  createHost: {
    title: "Create Host",
    content: <CreateHostForm/>,
  },
  removeHost: {
    title: "Remove Host",
    content: <RemoveHostForm/>,
  },
  blockUser: {
    title: "Block User",
    content: <BlockUserForm />,
  },
  blockedUsers: {
    title: "Blocked Users",
    content: <p>List of blocked users.</p>,
  },
  history: {
    title: "Transaction History",
    content: <p>Display coin send and receive history.</p>,
  },
};
export const DashboardPage: FC = () => {
  const [role, setRole] = useState<Role>("admin");
  const [activeModal, setActiveModal] = useState<ModalName | null>(null);

  // Open/close modal handlers
  const closeModal = () => setActiveModal(null);
  const openModal = (modalName: ModalName) => setActiveModal(modalName);

  // Get modal content for the current modal
  const modalConfig = activeModal ? modalContentConfig[activeModal] : null;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header with role switcher */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div>
                {/* <h2 className="text-2xl font-semibold">{title}</h2> */}
                <Link to="/" className="">
                  <img
                    src="/logo.jpeg"
                    alt="Logo"
                    className="h-auto w-12 rounded-lg"
                  />
                </Link>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-800">
                Dlstar
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-gray-600">
                Viewing as:
              </span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
              >
                {roleOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main dashboard view */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <DashboardContent role={role} openModal={openModal} />
      </main>

      {/* Modal for actions */}
      <ModalDialog
        isOpen={!!activeModal}
        onClose={closeModal}
        title={modalConfig?.title || ""}
        description={modalConfig?.description}
      >
        {modalConfig?.content}
      </ModalDialog>
    </div>
  );
};
