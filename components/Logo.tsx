import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", isFooter = false }) => {
  // CONFIGURAÇÃO DA LOGO:
  // O componente buscará o arquivo 'logo.png' na raiz do site (pasta public).
  // Certifique-se de adicionar o arquivo 'logo.png' na pasta 'public' do seu projeto.
  const logoSrc = "logo.PNG";
  
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Fallback: Se a imagem não for encontrada, exibe o nome em texto
    return (
      <div className={`flex flex-col items-center justify-center font-serif font-bold leading-none ${className} ${isFooter ? 'text-white' : 'text-amber-500'}`}>
        <div className="text-4xl">CAJU</div>
        <div className="text-[0.6rem] tracking-widest uppercase opacity-80 mt-1">Comunidade</div>
      </div>
    );
  }

  return (
    <img 
      src={logoSrc} 
      alt="Comunidade CAJU" 
      className={`${className} object-contain`}
      onError={() => setHasError(true)}
    />
  );
};
