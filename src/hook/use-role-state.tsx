import { RoleContext } from "@/provider/role-provider";
import {  useContext } from "react";


export const useRoleState = () => {
    const context = useContext(RoleContext);
    if (!context) {
        throw new Error("useRoleState must be used within a RoleProvider");
    }
    return context;
};