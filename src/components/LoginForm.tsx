
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, User, Lock } from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação
    console.log("Login tentado com:", email);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl font-bold text-center text-blue-600">Bem-vindo</CardTitle>
        <CardDescription className="text-lg text-center">
          Faça login para acessar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email ou Usuário
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <Input
                id="email"
                type="text"
                placeholder="Digite seu email ou usuário"
                className="pl-10 py-6 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password" className="text-lg">
                Senha
              </Label>
              <a href="#" className="text-blue-600 hover:underline text-base">
                Esqueci minha senha
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className="pl-10 py-6 text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full py-6 text-xl font-medium">
            Entrar
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-base text-gray-600">
          Precisa de ajuda? Entre em contato com o suporte
        </p>
      </CardFooter>
    </Card>
  );
}
