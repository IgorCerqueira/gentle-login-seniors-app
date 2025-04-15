
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  PersonStanding, 
  Briefcase, 
  ClipboardCheck, 
  UserCog, 
  DollarSign, 
  BanknoteIcon, 
  FileSignature, 
  Heart, 
  Users, 
  Clock,
  Building2,
  Phone,
  Mail,
  MapPin,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Colaborador = () => {
  const { toast } = useToast();
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
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");

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
      ativo,
      endereco,
      telefone,
      email,
      departamento
    });
    
    toast({
      title: "Colaborador salvo",
      description: `Os dados de ${nomeColaborador} foram salvos com sucesso.`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen pb-10 relative overflow-hidden">
      {/* Background com gradiente e padrão suave para um visual mais acolhedor */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70 z-0"></div>
      
      {/* Ícones decorativos relacionados ao cuidado com idosos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Heart className="absolute text-rose-200 opacity-20" style={{ top: '10%', left: '5%', width: '70px', height: '70px' }} />
        <Users className="absolute text-blue-200 opacity-20" style={{ top: '15%', right: '10%', width: '60px', height: '60px' }} />
        <Clock className="absolute text-purple-200 opacity-20" style={{ bottom: '20%', left: '8%', width: '55px', height: '55px' }} />
        <PersonStanding className="absolute text-indigo-200 opacity-20" style={{ bottom: '15%', right: '5%', width: '65px', height: '65px' }} />
      </div>
      
      {/* Padrão de onda na parte inferior para dar sensação de fluidez */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-100 opacity-30 z-0" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234299e1' fill-opacity='0.3' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
           }}>
      </div>
      
      {/* Barra de navegação principal - uso de tons suaves e acessíveis para idosos */}
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
      
      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="bg-white/95 shadow-xl border-2 border-gray-100 overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              {/* Seção dados pessoais */}
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
              
              {/* Seção dados profissionais */}
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
              
              {/* Linha final com status e botão */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <Checkbox 
                    id="ativo" 
                    checked={ativo}
                    onCheckedChange={(checked) => {
                      setAtivo(checked as boolean);
                      if (checked) setDataDemissao("");
                    }}
                    className="h-5 w-5 border-2 data-[state=checked]:bg-green-600"
                  />
                  <Label 
                    htmlFor="ativo" 
                    className="text-lg font-semibold text-gray-800 cursor-pointer select-none"
                  >
                    Colaborador Ativo
                  </Label>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    className="px-6 py-6 border-red-500 text-red-600 hover:bg-red-50 text-lg font-semibold rounded-xl"
                    onClick={() => {
                      toast({
                        title: "Operação cancelada",
                        description: "Os dados não foram salvos",
                        variant: "destructive",
                      });
                    }}
                  >
                    Cancelar
                  </Button>
                  
                  <Button 
                    type="submit" 
                    className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-xl font-semibold rounded-xl"
                  >
                    Salvar Colaborador
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

// Componente do botão de navegação
const NavButton = ({ label, icon, active }: { label: string; icon: React.ReactNode; active: boolean }) => (
  <button
    className={`px-3 py-2 rounded-md text-center text-white whitespace-nowrap transition-colors flex items-center gap-1 ${
      active ? "bg-indigo-800 font-semibold" : "hover:bg-indigo-600"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Colaborador;
