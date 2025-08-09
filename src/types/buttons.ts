import { ReactNode } from "react";

// Props for Button
export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
  className?: string;
  type?: "button" | "submit";
}
