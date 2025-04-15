
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md mb-8">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-3">
          Gerenciamento de Idosos
        </h1>
        <p className="text-2xl text-center text-gray-700">
          Sistema de acesso seguro
        </p>
      </div>
      <LoginForm />
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Precisa de ajuda? Ligue para <span className="font-bold">(00) 0000-0000</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
