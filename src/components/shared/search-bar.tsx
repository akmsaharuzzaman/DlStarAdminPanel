import { UserSearch } from "lucide-react";
import React, { Dispatch } from "react";

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search users by name, email or uid...",
}: {
  value: string;
  onChange: Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
}) => (
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        border: "1px solid #E5E7EB",
        width: 320,
      }}
    />
    <button
      style={{
        padding: "9px 12px",
        borderRadius: 8,
        border: "1px solid #E5E7EB",
        background: "white",
        cursor: "pointer",
      }}
    >
      <UserSearch />
    </button>
  </div>
);