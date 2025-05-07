
import React from "react";
import { Heart, Users, Clock, PersonStanding } from "lucide-react";

const BackgroundEffect = () => {
  return (
    <>
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
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-blue-100 opacity-30 z-0"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234299e1' fill-opacity='0.3' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
    </>
  );
};

export default BackgroundEffect;
