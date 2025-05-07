
import React from "react";
import { Heart, Users, User, DollarSign, FileSignature, UserCheck } from "lucide-react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

type NavBarProps = {
  activePage?: string;
};

const NavBar = ({ activePage = "colaboradores" }: NavBarProps) => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-md relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Heart className="mr-2 h-6 w-6 text-rose-300" /> 
            Sistema de Gerenciamento
          </h1>
          <div className="flex space-x-1 md:space-x-4 mt-3 md:mt-0 overflow-x-auto whitespace-nowrap pb-2 w-full md:w-auto">
            <Link to="/">
              <NavButton label="Início" icon={<Heart size={18} />} active={activePage === "inicio"} />
            </Link>
            <Link to="/residentes">
              <NavButton label="Residentes" icon={<Users size={18} />} active={activePage === "residentes"} />
            </Link>
            <Link to="/responsavel">
              <NavButton label="Responsáveis" icon={<UserCheck size={18} />} active={activePage === "responsaveis"} />
            </Link>
            <Link to="/colaborador">
              <NavButton label="Colaboradores" icon={<User size={18} />} active={activePage === "colaboradores"} />
            </Link>
            <Link to="/financeiro">
              <NavButton label="Financeiro" icon={<DollarSign size={18} />} active={activePage === "financeiro"} />
            </Link>
            <Link to="/relatorios">
              <NavButton label="Relatórios" icon={<FileSignature size={18} />} active={activePage === "relatorios"} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
