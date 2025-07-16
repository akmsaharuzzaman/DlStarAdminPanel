import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "@/redux/features/auth.slice";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export function PageHeader({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: { label: string; active: boolean }[];
}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className={crumb.active ? "text-pink-400" : ""}>
              {crumb.label}
              {idx < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))}
        </div>
        {/* Profile Action Bar */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="ml-4 flex items-center focus:outline-none"
            onClick={() => setOpen((v) => !v)}
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user?.userId || "U"}&background=F472B6&color=fff`}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-pink-400 shadow"
            />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
              <div className="px-4 py-2 text-gray-700 text-sm border-b">{user?.userId}</div>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}