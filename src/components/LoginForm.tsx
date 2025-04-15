
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, User, Lock, HelpCircle } from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação
    console.log("Login tentado com:", email);
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-2 border-gray-200">
      <CardHeader className="space-y-3 pb-6">
        <CardTitle className="text-4xl font-bold text-center text-blue-800">Bem-vindo</CardTitle>
        <CardDescription className="text-xl text-center text-gray-700">
          Faça login para acessar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-xl font-medium text-gray-800">
              Email ou Usuário
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={26} />
              <Input
                id="email"
                type="text"
                placeholder="Digite seu email ou usuário"
                className="pl-14 py-7 text-xl border-2 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-xl font-medium text-gray-800">
                Senha
              </Label>
              <a 
                href="#" 
                className="flex items-center gap-1 text-blue-700 hover:text-blue-800 text-lg font-medium"
              >
                <HelpCircle size={18} />
                Esqueci minha senha
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" size={26} />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className="pl-14 py-7 text-xl border-2 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-700 hover:text-blue-800"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={26} /> : <Eye size={26} />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="h-5 w-5 border-2"
            />
            <Label 
              htmlFor="remember" 
              className="text-lg font-medium text-gray-800 cursor-pointer"
            >
              Lembrar de mim
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-8 text-2xl font-semibold bg-blue-700 hover:bg-blue-800 rounded-xl"
          >
            Entrar
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center pt-4">
        <div className="text-center">
          <p className="text-lg text-gray-700">
            <span className="flex items-center justify-center gap-2">
              <HelpCircle size={20} className="text-blue-700" />
              Precisa de ajuda com o login?
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
