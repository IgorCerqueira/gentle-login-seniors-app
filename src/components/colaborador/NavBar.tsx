
import React from "react";
import { Heart, Users, User, DollarSign, FileSignature } from "lucide-react";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-md relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Heart className="mr-2 h-6 w-6 text-rose-300" /> 
            Cadastro de Colaborador
          </h1>
          <div className="flex space-x-1 md:space-x-4 mt-3 md:mt-0 overflow-x-auto whitespace-nowrap pb-2 w-full md:w-auto">
            <NavButton label="Início" icon={<Heart size={18} />} active={false} />
            <NavButton label="Residentes" icon={<Users size={18} />} active={false} />
            <NavButton label="Colaboradores" icon={<User size={18} />} active={true} />
            <NavButton label="Financeiro" icon={<DollarSign size={18} />} active={false} />
            <NavButton label="Relatórios" icon={<FileSignature size={18} />} active={false} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
