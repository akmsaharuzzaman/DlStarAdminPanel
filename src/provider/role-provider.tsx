import { Role } from "@/types/pages/dashboard";
import { createContext, ReactNode, useState } from "react";

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

export const RoleContext = createContext<RoleContextType | undefined>(
  undefined
);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("admin");
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
