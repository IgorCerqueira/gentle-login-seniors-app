
import React from "react";

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick?: () => void;
};

const NavButton = ({ label, icon, active, onClick }: NavButtonProps) => (
  <button
    className={`px-3 py-2 rounded-md text-center text-white whitespace-nowrap transition-colors flex items-center gap-1 ${
      active ? "bg-indigo-800 font-semibold" : "hover:bg-indigo-600"
    }`}
    onClick={onClick}
  >
    {icon}
    {label}
  </button>
);

export default NavButton;
