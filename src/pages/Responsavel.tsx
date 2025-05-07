
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/colaborador/NavBar";
import FormActions from "@/components/colaborador/FormActions";
import BackgroundEffect from "@/components/colaborador/BackgroundEffect";
import { User, Calendar, ClipboardCheck, FileSignature, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Responsavel = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ativo, setAtivo] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do responsável enviados:", {
      nomeResponsavel,
      dataNascimento,
      cpf,
      rg,
      telefone,
      ativo
    });
    
    toast({
      title: "Responsável salvo",
      description: `Os dados de ${nomeResponsavel} foram salvos com sucesso.`,
      variant: "default",
    });
  };

  const handleCancel = () => {
    toast({
      title: "Operação cancelada",
      description: "Os dados não foram salvos",
      variant: "destructive",
    });
    navigate(-1);
  };

  return (
    <div className="min-h-screen pb-10 relative overflow-hidden">
      <BackgroundEffect />
      
      <NavBar activePage="responsaveis" />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="bg-white/95 shadow-xl border-2 border-gray-100 overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center border-b pb-2">
                  <User className="mr-2 h-5 w-5 text-indigo-600" />
                  Dados do Responsável
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3 lg:col-span-2">
                    <Label htmlFor="nomeResponsavel" className="text-lg font-medium text-indigo-800 flex items-center">
                      <User className="mr-2 h-5 w-5 text-indigo-700" />
                      Nome Completo
                    </Label>
                    <Input 
                      id="nomeResponsavel" 
                      value={nomeResponsavel}
                      onChange={(e) => setNomeResponsavel(e.target.value)}
                      className="bg-blue-50 border-2"
                      placeholder="Nome completo do responsável"
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
                </div>
              </div>
              
              <FormActions 
                ativo={ativo}
                setAtivo={setAtivo}
                setDataDemissao={() => {}} // Não utilizado neste formulário
                onCancel={handleCancel}
                labelText="Responsável Ativo"
              />
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Responsavel;
