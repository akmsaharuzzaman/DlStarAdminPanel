import { LucideIcon } from "lucide-react";
import { FC } from "react";

// Props for Icon component
interface IconProps {
  name: LucideIcon;
  className?: string;
  size?: number;
}
/**
 * Icon: Renders a Lucide icon by name, with optional className and size.
 */
export const Icon: FC<IconProps> = ({
  name: LucideIconComp,
  className = "",
  size = 24,
}) => <LucideIconComp className={className} size={size} />;
