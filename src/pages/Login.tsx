
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Gerenciamento de Idosos
        </h1>
        <p className="text-xl text-center text-gray-600">
          Sistema de acesso seguro
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
