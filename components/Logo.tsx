import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", isFooter = false }) => {
  // Tenta primeiro o local, depois remoto
  const localSrc = "./logo.png";
  const remoteSrc = "https://static.wixstatic.com/media/893c83_222a088c42e24559a4563a4358a97576~mv2.png";
  
  const [imgSrc, setImgSrc] = useState(localSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc === localSrc) {
      setImgSrc(remoteSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center font-serif font-bold leading-none ${className} ${isFooter ? 'text-white' : 'text-amber-500'}`}>
        <div className="text-4xl">CAJU</div>
        <div className="text-[0.6rem] tracking-widest uppercase opacity-80 mt-1">Comunidade</div>
      </div>
    );
  }

  return (
    <img 
      src={imgSrc} 
      alt="Comunidade CAJU" 
      className={`${className} object-contain`}
      onError={handleError}
    />
  );
};