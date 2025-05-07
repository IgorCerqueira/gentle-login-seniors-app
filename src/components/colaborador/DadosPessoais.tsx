
import React from "react";
import { User, UserCog, Calendar, ClipboardCheck, FileSignature, Phone, Mail, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type DadosPessoaisProps = {
  nomeColaborador: string;
  setNomeColaborador: (value: string) => void;
  dataNascimento: string;
  setDataNascimento: (value: string) => void;
  cpf: string;
  setCpf: (value: string) => void;
  rg: string;
  setRg: (value: string) => void;
  telefone: string;
  setTelefone: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  endereco: string;
  setEndereco: (value: string) => void;
};

const DadosPessoais = ({
  nomeColaborador,
  setNomeColaborador,
  dataNascimento,
  setDataNascimento,
  cpf,
  setCpf,
  rg,
  setRg,
  telefone,
  setTelefone,
  email,
  setEmail,
  endereco,
  setEndereco
}: DadosPessoaisProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center border-b pb-2">
        <User className="mr-2 h-5 w-5 text-indigo-600" />
        Dados Pessoais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-3 lg:col-span-2">
          <Label htmlFor="nomeColaborador" className="text-lg font-medium text-indigo-800 flex items-center">
            <UserCog className="mr-2 h-5 w-5 text-indigo-700" />
            Nome Completo
          </Label>
          <Input 
            id="nomeColaborador" 
            value={nomeColaborador}
            onChange={(e) => setNomeColaborador(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="Nome completo do colaborador"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="dataNascimento" className="text-lg font-medium text-indigo-800 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-indigo-700" />
            Data de Nascimento
          </Label>
          <Input 
            id="dataNascimento" 
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="bg-blue-50 border-2"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="cpf" className="text-lg font-medium text-indigo-800 flex items-center">
            <ClipboardCheck className="mr-2 h-5 w-5 text-indigo-700" />
            CPF
          </Label>
          <Input 
            id="cpf" 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="000.000.000-00"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="rg" className="text-lg font-medium text-indigo-800 flex items-center">
            <FileSignature className="mr-2 h-5 w-5 text-indigo-700" />
            RG
          </Label>
          <Input 
            id="rg" 
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="00.000.000-0"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="telefone" className="text-lg font-medium text-indigo-800 flex items-center">
            <Phone className="mr-2 h-5 w-5 text-indigo-700" />
            Telefone
          </Label>
          <Input 
            id="telefone" 
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="email" className="text-lg font-medium text-indigo-800 flex items-center">
            <Mail className="mr-2 h-5 w-5 text-indigo-700" />
            Email
          </Label>
          <Input 
            id="email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="email@exemplo.com"
          />
        </div>
        
        <div className="space-y-3 lg:col-span-3">
          <Label htmlFor="endereco" className="text-lg font-medium text-indigo-800 flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-indigo-700" />
            Endereço Completo
          </Label>
          <Input 
            id="endereco" 
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="Rua, número, complemento, bairro, cidade, estado, CEP"
          />
        </div>
      </div>
    </div>
  );
};

export default DadosPessoais;
