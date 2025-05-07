
import React from "react";

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  active: boolean;
};

const NavButton = ({ label, icon, active }: NavButtonProps) => (
  <button
    className={`px-3 py-2 rounded-md text-center text-white whitespace-nowrap transition-colors flex items-center gap-1 ${
      active ? "bg-indigo-800 font-semibold" : "hover:bg-indigo-600"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default NavButton;
