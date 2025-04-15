
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, PersonStanding, Briefcase, ClipboardCheck, UserCog, DollarSign, BanknoteIcon, FileSignature, Heart, Users, Clock } from "lucide-react";

const Colaborador = () => {
  const [nomeColaborador, setNomeColaborador] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");
  const [salario, setSalario] = useState("");
  const [vt, setVt] = useState("");
  const [vr, setVr] = useState("");
  const [va, setVa] = useState("");
  const [dataDemissao, setDataDemissao] = useState("");
  const [ativo, setAtivo] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do colaborador enviados:", {
      nomeColaborador,
      dataNascimento,
      cargo,
      cpf,
      rg,
      dataAdmissao,
      salario,
      vt,
      vr,
      va,
      dataDemissao,
      ativo
    });
    // Aqui você implementaria a lógica para salvar os dados
  };

  return (
    <div className="min-h-screen pb-10 relative overflow-hidden">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70 z-0"></div>
      
      {/* Ícones decorativos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <PersonStanding className="absolute text-blue-200 opacity-20" style={{ top: '10%', left: '5%', width: '70px', height: '70px' }} />
        <Calendar className="absolute text-indigo-200 opacity-20" style={{ top: '15%', right: '10%', width: '60px', height: '60px' }} />
        <Briefcase className="absolute text-blue-200 opacity-20" style={{ bottom: '20%', left: '8%', width: '55px', height: '55px' }} />
        <UserCog className="absolute text-indigo-200 opacity-20" style={{ bottom: '15%', right: '5%', width: '65px', height: '65px' }} />
      </div>
      
      {/* Padrão de onda na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-100 opacity-30 z-0" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234299e1' fill-opacity='0.3' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
           }}>
      </div>
      
      {/* Barra de navegação principal */}
      <nav className="bg-blue-700 text-white p-4 shadow-md relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-2xl font-bold">FrmColaborador</h1>
            <div className="flex space-x-1 md:space-x-4 mt-3 md:mt-0 overflow-x-auto whitespace-nowrap pb-2 w-full md:w-auto">
              <NavButton label="Início" active={false} />
              <NavButton label="Financeiro" active={true} />
              <NavButton label="Estoque" active={false} />
              <NavButton label="Pacientes" active={false} />
              <NavButton label="Fornecedores" active={false} />
              <NavButton label="Serviços" active={false} />
              <NavButton label="Sair" active={false} />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="bg-white/95 shadow-xl border-2 border-gray-100 overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Primeira linha */}
                <div className="space-y-3 lg:col-span-2">
                  <Label htmlFor="nomeColaborador" className="text-lg font-medium text-blue-800 flex items-center">
                    <UserCog className="mr-2 h-5 w-5 text-blue-700" />
                    Nome Colaborador
                  </Label>
                  <Input 
                    id="nomeColaborador" 
                    value={nomeColaborador}
                    onChange={(e) => setNomeColaborador(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="dataNascimento" className="text-lg font-medium text-blue-800 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                    Dt Nascimento
                  </Label>
                  <Select value={dataNascimento} onValueChange={setDataNascimento}>
                    <SelectTrigger className="bg-blue-50 border-2 h-12">
                      <SelectValue placeholder="segunda-feira" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="segunda-feira">segunda-feira</SelectItem>
                      <SelectItem value="terça-feira">terça-feira</SelectItem>
                      <SelectItem value="quarta-feira">quarta-feira</SelectItem>
                      <SelectItem value="quinta-feira">quinta-feira</SelectItem>
                      <SelectItem value="sexta-feira">sexta-feira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Segunda linha */}
                <div className="space-y-3">
                  <Label htmlFor="cargo" className="text-lg font-medium text-blue-800 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-blue-700" />
                    Cargo
                  </Label>
                  <Select value={cargo} onValueChange={setCargo}>
                    <SelectTrigger className="bg-blue-50 border-2 h-12">
                      <SelectValue placeholder="Selecione um cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gerente">Gerente</SelectItem>
                      <SelectItem value="assistente">Assistente</SelectItem>
                      <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                      <SelectItem value="medico">Médico</SelectItem>
                      <SelectItem value="cuidador">Cuidador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="cpf" className="text-lg font-medium text-blue-800 flex items-center">
                    <ClipboardCheck className="mr-2 h-5 w-5 text-blue-700" />
                    CPF
                  </Label>
                  <Input 
                    id="cpf" 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="rg" className="text-lg font-medium text-blue-800 flex items-center">
                    <FileSignature className="mr-2 h-5 w-5 text-blue-700" />
                    RG
                  </Label>
                  <Input 
                    id="rg" 
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                {/* Terceira linha */}
                <div className="space-y-3">
                  <Label htmlFor="dataAdmissao" className="text-lg font-medium text-blue-800 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                    Dt Admissão
                  </Label>
                  <Select value={dataAdmissao} onValueChange={setDataAdmissao}>
                    <SelectTrigger className="bg-blue-50 border-2 h-12">
                      <SelectValue placeholder="segunda-feira" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="segunda-feira">segunda-feira</SelectItem>
                      <SelectItem value="terça-feira">terça-feira</SelectItem>
                      <SelectItem value="quarta-feira">quarta-feira</SelectItem>
                      <SelectItem value="quinta-feira">quinta-feira</SelectItem>
                      <SelectItem value="sexta-feira">sexta-feira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="salario" className="text-lg font-medium text-blue-800 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-blue-700" />
                    Salário
                  </Label>
                  <Input 
                    id="salario" 
                    value={salario}
                    onChange={(e) => setSalario(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="vt" className="text-lg font-medium text-blue-800 flex items-center">
                    <BanknoteIcon className="mr-2 h-5 w-5 text-blue-700" />
                    VT
                  </Label>
                  <Input 
                    id="vt" 
                    value={vt}
                    onChange={(e) => setVt(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                {/* Quarta linha */}
                <div className="space-y-3">
                  <Label htmlFor="vr" className="text-lg font-medium text-blue-800 flex items-center">
                    <BanknoteIcon className="mr-2 h-5 w-5 text-blue-700" />
                    VR
                  </Label>
                  <Input 
                    id="vr" 
                    value={vr}
                    onChange={(e) => setVr(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="va" className="text-lg font-medium text-blue-800 flex items-center">
                    <BanknoteIcon className="mr-2 h-5 w-5 text-blue-700" />
                    VA
                  </Label>
                  <Input 
                    id="va" 
                    value={va}
                    onChange={(e) => setVa(e.target.value)}
                    className="bg-blue-50 border-2"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="dataDemissao" className="text-lg font-medium text-blue-800 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                    Dt Demissão
                  </Label>
                  <Select value={dataDemissao} onValueChange={setDataDemissao}>
                    <SelectTrigger className="bg-blue-50 border-2 h-12">
                      <SelectValue placeholder="segunda-feira" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="segunda-feira">segunda-feira</SelectItem>
                      <SelectItem value="terça-feira">terça-feira</SelectItem>
                      <SelectItem value="quarta-feira">quarta-feira</SelectItem>
                      <SelectItem value="quinta-feira">quinta-feira</SelectItem>
                      <SelectItem value="sexta-feira">sexta-feira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Quinta linha */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-8">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <Checkbox 
                    id="ativo" 
                    checked={ativo}
                    onCheckedChange={(checked) => setAtivo(checked as boolean)}
                    className="h-5 w-5 border-2 data-[state=checked]:bg-blue-700"
                  />
                  <Label 
                    htmlFor="ativo" 
                    className="text-lg font-semibold text-blue-800 cursor-pointer select-none"
                  >
                    Ativo
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="px-8 py-6 bg-blue-700 hover:bg-blue-800 text-xl font-semibold rounded-xl"
                >
                  Salvar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

// Componente do botão de navegação
const NavButton = ({ label, active }: { label: string; active: boolean }) => (
  <button
    className={`px-3 py-2 rounded-md text-center text-white whitespace-nowrap transition-colors ${
      active ? "bg-blue-800 font-semibold" : "hover:bg-blue-600"
    }`}
  >
    {label}
  </button>
);

export default Colaborador;
