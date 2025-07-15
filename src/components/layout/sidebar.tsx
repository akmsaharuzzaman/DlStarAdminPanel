import { ChevronRight } from "lucide-react";

export function Sidebar({
  items,
}: {
  items: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    active?: boolean;
    hasSubmenu?: boolean;
    link: string;
  }[];
}) {
  return (
    <div className="w-64 text-slate-800 bg-gray-100 border-r border-gray-300">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-pink-400">Onulive</h1>
      </div>
      <nav className="mt-6">
        {items.map((item, index) => (
          <a href={item.link} key={index} className="relative">
            <div
              className={`flex items-center justify-between px-6 py-3 hover:bg-gray-200 cursor-pointer ${
                item.active ? "text-gray-700 border-r-2 border-pink-400" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon
                  className={`w-5 h-5 ${
                    item.active ? "text-pink-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`${
                    item.active ? "text-pink-400" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {item.hasSubmenu && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}
