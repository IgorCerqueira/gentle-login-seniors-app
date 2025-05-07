
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/colaborador/NavBar";
import DadosPessoais from "@/components/colaborador/DadosPessoais";
import DadosProfissionais from "@/components/colaborador/DadosProfissionais";
import FormActions from "@/components/common/FormActions";
import BackgroundEffect from "@/components/colaborador/BackgroundEffect";

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

  const handleCancel = () => {
    toast({
      title: "Operação cancelada",
      description: "Os dados não foram salvos",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen pb-10 relative overflow-hidden">
      <BackgroundEffect />
      
      <NavBar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="bg-white/95 shadow-xl border-2 border-gray-100 overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <DadosPessoais 
                nomeColaborador={nomeColaborador}
                setNomeColaborador={setNomeColaborador}
                dataNascimento={dataNascimento}
                setDataNascimento={setDataNascimento}
                cpf={cpf}
                setCpf={setCpf}
                rg={rg}
                setRg={setRg}
                telefone={telefone}
                setTelefone={setTelefone}
                email={email}
                setEmail={setEmail}
                endereco={endereco}
                setEndereco={setEndereco}
              />
              
              <DadosProfissionais
                cargo={cargo}
                setCargo={setCargo}
                departamento={departamento}
                setDepartamento={setDepartamento}
                dataAdmissao={dataAdmissao}
                setDataAdmissao={setDataAdmissao}
                salario={salario}
                setSalario={setSalario}
                vt={vt}
                setVt={setVt}
                vr={vr}
                setVr={setVr}
                va={va}
                setVa={setVa}
                dataDemissao={dataDemissao}
                setDataDemissao={setDataDemissao}
                ativo={ativo}
              />
              
              <FormActions 
                ativo={ativo}
                setAtivo={setAtivo}
                setDataDemissao={setDataDemissao}
                onCancel={handleCancel}
                labelText="Colaborador Ativo"
                buttonText="Salvar Colaborador"
              />
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Colaborador;
