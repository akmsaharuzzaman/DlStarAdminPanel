import { ReactNode } from "react";

// Props for Button
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success" | "info";
  className?: string;
  type?: "button" | "submit";
}
