import { ButtonProps } from "@/types/buttons";
import { FC } from "react";

/**
 * Button: Reusable button with variants and type safety.
 */
export const ActionTinyButton: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    info: 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
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
