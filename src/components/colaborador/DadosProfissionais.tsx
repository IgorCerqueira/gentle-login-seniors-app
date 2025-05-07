
import React from "react";
import { Briefcase, Building2, Calendar, DollarSign, BanknoteIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type DadosProfissionaisProps = {
  cargo: string;
  setCargo: (value: string) => void;
  departamento: string;
  setDepartamento: (value: string) => void;
  dataAdmissao: string;
  setDataAdmissao: (value: string) => void;
  salario: string;
  setSalario: (value: string) => void;
  vt: string;
  setVt: (value: string) => void;
  vr: string;
  setVr: (value: string) => void;
  va: string;
  setVa: (value: string) => void;
  dataDemissao: string;
  setDataDemissao: (value: string) => void;
  ativo: boolean;
};

const DadosProfissionais = ({
  cargo,
  setCargo,
  departamento,
  setDepartamento,
  dataAdmissao,
  setDataAdmissao,
  salario,
  setSalario,
  vt,
  setVt,
  vr,
  setVr,
  va,
  setVa,
  dataDemissao,
  setDataDemissao,
  ativo
}: DadosProfissionaisProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center border-b pb-2">
        <Briefcase className="mr-2 h-5 w-5 text-indigo-600" />
        Dados Profissionais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Label htmlFor="cargo" className="text-lg font-medium text-indigo-800 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-indigo-700" />
            Cargo
          </Label>
          <Select value={cargo} onValueChange={setCargo}>
            <SelectTrigger className="bg-blue-50 border-2 h-12">
              <SelectValue placeholder="Selecione um cargo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enfermeiro_chefe">Enfermeiro Chefe</SelectItem>
              <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
              <SelectItem value="cuidador">Cuidador</SelectItem>
              <SelectItem value="assistente">Assistente</SelectItem>
              <SelectItem value="terapeuta">Terapeuta Ocupacional</SelectItem>
              <SelectItem value="fisioterapeuta">Fisioterapeuta</SelectItem>
              <SelectItem value="nutricionista">Nutricionista</SelectItem>
              <SelectItem value="psicologo">Psicólogo</SelectItem>
              <SelectItem value="administrativo">Administrativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="departamento" className="text-lg font-medium text-indigo-800 flex items-center">
            <Building2 className="mr-2 h-5 w-5 text-indigo-700" />
            Departamento
          </Label>
          <Select value={departamento} onValueChange={setDepartamento}>
            <SelectTrigger className="bg-blue-50 border-2 h-12">
              <SelectValue placeholder="Selecione um departamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enfermagem">Enfermagem</SelectItem>
              <SelectItem value="cuidados">Cuidados Diários</SelectItem>
              <SelectItem value="terapia">Terapia</SelectItem>
              <SelectItem value="nutricao">Nutrição</SelectItem>
              <SelectItem value="psicologia">Psicologia</SelectItem>
              <SelectItem value="administracao">Administração</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="dataAdmissao" className="text-lg font-medium text-indigo-800 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-indigo-700" />
            Data de Admissão
          </Label>
          <Input 
            id="dataAdmissao" 
            type="date"
            value={dataAdmissao}
            onChange={(e) => setDataAdmissao(e.target.value)}
            className="bg-blue-50 border-2"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="salario" className="text-lg font-medium text-indigo-800 flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-indigo-700" />
            Salário
          </Label>
          <Input 
            id="salario" 
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="R$ 0,00"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="vt" className="text-lg font-medium text-indigo-800 flex items-center">
            <BanknoteIcon className="mr-2 h-5 w-5 text-indigo-700" />
            Vale Transporte
          </Label>
          <Input 
            id="vt" 
            value={vt}
            onChange={(e) => setVt(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="R$ 0,00"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="vr" className="text-lg font-medium text-indigo-800 flex items-center">
            <BanknoteIcon className="mr-2 h-5 w-5 text-indigo-700" />
            Vale Refeição
          </Label>
          <Input 
            id="vr" 
            value={vr}
            onChange={(e) => setVr(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="R$ 0,00"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="va" className="text-lg font-medium text-indigo-800 flex items-center">
            <BanknoteIcon className="mr-2 h-5 w-5 text-indigo-700" />
            Vale Alimentação
          </Label>
          <Input 
            id="va" 
            value={va}
            onChange={(e) => setVa(e.target.value)}
            className="bg-blue-50 border-2"
            placeholder="R$ 0,00"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="dataDemissao" className="text-lg font-medium text-indigo-800 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-indigo-700" />
            Data de Desligamento
          </Label>
          <Input 
            id="dataDemissao" 
            type="date"
            value={dataDemissao}
            onChange={(e) => setDataDemissao(e.target.value)}
            className="bg-blue-50 border-2"
            disabled={ativo}
          />
        </div>
      </div>
    </div>
  );
};

export default DadosProfissionais;
