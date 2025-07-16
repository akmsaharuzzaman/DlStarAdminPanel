import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

type SidebarItem = {
  icon: LucideIcon;
  label: string;
  link: string;
  hasSubmenu?: boolean;
};

type SidebarProps = {
  items: SidebarItem[];
  currentPath: string;
};

export function Sidebar({ items, currentPath }: SidebarProps) {
  return (
    <div className="w-64 text-slate-800 bg-gray-100 border-r border-gray-300">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-400">Onulive</h1>
      </div>
      <nav className="mt-6">
        {items.map((item, index) => {
          const isActive = currentPath === item.link;
          return (
            <Link to={item.link} key={index}>
              <div
                className={`flex items-center justify-between px-6 py-3 hover:bg-gray-200 cursor-pointer ${
                  isActive ? "text-pink-400 border-r-2 border-pink-400 bg-gray-200" : "text-gray-500"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5 ${isActive ? "text-pink-400" : "text-gray-600"}`} />
                  <span>{item.label}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}