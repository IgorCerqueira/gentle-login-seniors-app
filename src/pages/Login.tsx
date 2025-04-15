
import { LoginForm } from "@/components/LoginForm";
import { Heart, Users, Clock, Calendar } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background with subtle pattern and decorative icons */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70 z-0"></div>
      
      {/* Decorative floating icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Heart className="absolute text-blue-200 opacity-20" style={{ top: '15%', left: '10%', width: '60px', height: '60px' }} />
        <Users className="absolute text-purple-200 opacity-20" style={{ top: '25%', right: '15%', width: '70px', height: '70px' }} />
        <Clock className="absolute text-blue-200 opacity-20" style={{ bottom: '20%', left: '20%', width: '55px', height: '55px' }} />
        <Calendar className="absolute text-purple-200 opacity-20" style={{ bottom: '25%', right: '10%', width: '65px', height: '65px' }} />
      </div>
      
      {/* Subtle wave pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-100 opacity-30 z-0" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234299e1' fill-opacity='0.3' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
           }}>
      </div>
      
      {/* Content container positioned above the background */}
      <div className="w-full max-w-md mb-8 relative z-10">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-3">
          Gerenciamento de Idosos
        </h1>
        <p className="text-2xl text-center text-gray-700">
          Sistema de acesso seguro
        </p>
      </div>
      
      <div className="relative z-10">
        <LoginForm />
      </div>
      
      <div className="mt-8 text-center relative z-10">
        <p className="text-lg text-gray-700">
          Precisa de ajuda? Ligue para <span className="font-bold">(00) 0000-0000</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
