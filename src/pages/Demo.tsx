import React, { useState, ReactNode, FC } from "react";
import {
  Gamepad2,
  Coins,
  UserPlus,
  Store,
  UserCog,
  UserX,
  History,
  ListX,
  Building,
  UserMinus,
  LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

// =========================
// 1. Type Definitions
// =========================

// All possible roles in the dashboard
type Role = "admin" | "sub-admin" | "agency" | "merchant" | "re-seller";

// Modal names for actions
// Extend this as you add more modals
type ModalName =
  | "sellCoin"
  | "createSubAdmin"
  | "createMerchant"
  | "createReseller"
  | "createAgency"
  | "createHost"
  | "removeHost"
  | "blockUser"
  | "blockedUsers"
  | "history";

// Props for Icon component
interface IconProps {
  name: LucideIcon;
  className?: string;
  size?: number;
}

// Props for DashboardCard
interface DashboardCardProps {
  title: string;
  value: ReactNode;
  children?: ReactNode;
}

// Props for Button
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
  className?: string;
  type?: "button" | "submit";
}

// Props for Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

// Dashboard action button config
interface DashboardAction {
  label: string;
  icon: LucideIcon;
  variant?: ButtonProps["variant"];
  modal: ModalName;
}

// Dashboard card config
interface DashboardStat {
  title: string;
  value: ReactNode;
}

// Dashboard config for each role
interface DashboardConfig {
  stats: DashboardStat[];
  actions: DashboardAction[];
  lists?: { title: string; emptyText: string }[];
}

// Modal content config
interface ModalContentConfig {
  title: string;
  content: ReactNode;
}

// =========================
// 2. Reusable Components
// =========================

/**
 * Icon: Renders a Lucide icon by name, with optional className and size.
 */
const Icon: FC<IconProps> = ({ name: LucideIconComp, className = "", size = 24 }) => (
  <LucideIconComp className={className} size={size} />
);

/**
 * DashboardCard: Shows a stat with a title and value, and optional children.
 */
const DashboardCard: FC<DashboardCardProps> = ({ title, value, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
    <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
    {children}
  </div>
);

/**
 * Button: Reusable button with variants and type safety.
 */
const Button: FC<ButtonProps> = ({ children, onClick, variant = "primary", className = "", type = "button" }) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    success: "text-white bg-green-600 hover:bg-green-700 focus:ring-green-500",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/**
 * Modal: Uses Shadcn UI Dialog for modal dialogs.
 */
const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div>{children}</div>
      <div className="mt-6 flex justify-end">
        <DialogClose asChild>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
);

// =========================
// 3. Dashboard Configs (Role-based)
// =========================

/**
 * dashboardConfigs: All dashboard stats, actions, and lists for each role.
 * This makes the dashboard fully config-driven and easy to extend.
 */
const dashboardConfigs: Record<Role, DashboardConfig> = {
  admin: {
    stats: [
      { title: "Total Users", value: "10,452" },
      { title: "Total Sub-Admins", value: "12" },
      { title: "Total Agencies", value: "45" },
      { title: "Total Merchants", value: "88" },
      { title: "Total Resellers", value: "210" },
    ],
    actions: [
      { label: "Sell Coin", icon: Coins, variant: "success", modal: "sellCoin" },
      { label: "Create Sub-Admin", icon: UserPlus, modal: "createSubAdmin" },
      { label: "Create Merchant", icon: Store, modal: "createMerchant" },
      { label: "Create Reseller", icon: UserCog, modal: "createReseller" },
      { label: "Block User", icon: UserX, variant: "danger", modal: "blockUser" },
      { label: "History", icon: History, variant: "secondary", modal: "history" },
      { label: "Blocked Users", icon: ListX, variant: "secondary", modal: "blockedUsers" },
    ],
    lists: [
      { title: "User List", emptyText: "User data would appear here." },
      { title: "Sub-Admin List", emptyText: "Sub-admin data would appear here." },
    ],
  },
  "sub-admin": {
    stats: [
      { title: "Total Users", value: "5,120" },
      { title: "Total Agencies", value: "20" },
    ],
    actions: [
      { label: "Sell Coin", icon: Coins, variant: "success", modal: "sellCoin" },
      { label: "Create Agency", icon: Building, modal: "createAgency" },
      { label: "Block User", icon: UserX, variant: "danger", modal: "blockUser" },
      { label: "History", icon: History, variant: "secondary", modal: "history" },
    ],
    lists: [
      { title: "User List", emptyText: "User data would appear here." },
    ],
  },
  agency: {
    stats: [
      { title: "Current Salary", value: "Future Feature" },
      { title: "Total Hosts", value: "150" },
    ],
    actions: [
      { label: "Create Host", icon: UserPlus, modal: "createHost" },
      { label: "Remove Host", icon: UserMinus, variant: "danger", modal: "removeHost" },
    ],
    lists: [
      { title: "Host List", emptyText: "Host data would appear here." },
    ],
  },
  merchant: {
    stats: [
      { title: "Total Resellers", value: "50" },
    ],
    actions: [
      { label: "Sell Coin", icon: Coins, variant: "success", modal: "sellCoin" },
      { label: "Create Reseller", icon: UserCog, modal: "createReseller" },
      { label: "History", icon: History, variant: "secondary", modal: "history" },
    ],
    lists: [
      { title: "Reseller List", emptyText: "Reseller data would appear here." },
    ],
  },
  "re-seller": {
    stats: [
      { title: "Your ResellerCoins", value: "50,000" },
      { title: "Total Earning", value: "$1,250" },
    ],
    actions: [
      { label: "Sell Coin to User", icon: Coins, variant: "success", modal: "sellCoin" },
      { label: "History", icon: History, variant: "secondary", modal: "history" },
    ],
    // No lists for re-seller
  },
};

// =========================
// 4. Modal Content Config
// =========================

/**
 * modalContentConfig: All modal titles and content for each modal action.
 * Replace <p>...</p> with your actual forms/components as needed.
 */
const modalContentConfig: Record<ModalName, ModalContentConfig> = {
  sellCoin: {
    title: "Sell Coin",
    content: <p>Form to sell coins to a user.</p>,
  },
  createSubAdmin: {
    title: "Create Sub-Admin",
    content: <p>Form to create a new sub-admin with specific permissions.</p>,
  },
  createMerchant: {
    title: "Create Merchant",
    content: <p>Form to create a new merchant.</p>,
  },
  createReseller: {
    title: "Create Reseller",
    content: <p>Form to create a new reseller.</p>,
  },
  createAgency: {
    title: "Create Agency",
    content: <p>Form to create a new agency.</p>,
  },
  createHost: {
    title: "Create Host",
    content: <p>Form to create a new host.</p>,
  },
  removeHost: {
    title: "Remove Host",
    content: <p>Form to remove a host.</p>,
  },
  blockUser: {
    title: "Block User",
    content: <p>Form to block a user and set duration.</p>,
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

// =========================
// 5. Dashboard Renderer (Reusable)
// =========================

/**
 * Dashboard: Renders the dashboard for the current role using config.
 * This is fully reusable for any role.
 */
const Dashboard: FC<{
  role: Role;
  openModal: (modal: ModalName) => void;
}> = ({ role, openModal }) => {
  const config = dashboardConfigs[role];
  return (
    <div>
      {/* Stats Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${role === "admin" ? "xl:grid-cols-5" : ""} gap-6 mb-8`}
      >
        {config.stats.map((stat) => (
          <DashboardCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {config.actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            onClick={() => openModal(action.modal)}
          >
            <action.icon size={16} className="mr-2" />
            {action.label}
          </Button>
        ))}
      </div>
      {/* Data Lists (if any) */}
      {config.lists && (
        <div className={config.lists.length > 1 ? "space-y-8" : undefined}>
          {config.lists.map((list) => (
            <div key={list.title} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">{list.title}</h2>
              <div className="text-center py-4 text-gray-500">{list.emptyText}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// =========================
// 6. Main App Component
// =========================

/**
 * App: Main dashboard app. Handles role switching, modal state, and renders dashboard.
 * - Role-based logic is handled by dashboardConfigs and Dashboard component.
 * - Modal content is config-driven for easy extension.
 */
const roleOptions: { value: Role; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "sub-admin", label: "Sub-Admin" },
  { value: "agency", label: "Agency" },
  { value: "merchant", label: "Merchant" },
  { value: "re-seller", label: "Re-Seller" },
];

const App: FC = () => {
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
              <Icon name={Gamepad2} className="h-8 w-8 text-blue-600" />
              <span className="ml-3 text-2xl font-bold text-gray-800">
                GameApp Panel
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-gray-600">Viewing as:</span>
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
        <Dashboard role={role} openModal={openModal} />
      </main>

      {/* Modal for actions */}
      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={modalConfig?.title || ""}
      >
        {modalConfig?.content}
      </Modal>
    </div>
  );
};

export default App;

// =========================
// 7. Explanations
// =========================
//
// - All UI is config-driven: stats, actions, and lists for each role are defined in dashboardConfigs.
// - The Dashboard component is fully reusable for any role, just by changing the config.
// - Modal content is also config-driven, so adding new modals is easy and type-safe.
// - All components are typed and reusable, with clear prop interfaces.
// - Role-based logic is handled by switching the config and rendering accordingly.
// - This approach makes the dashboard easy to extend, maintain, and test.
