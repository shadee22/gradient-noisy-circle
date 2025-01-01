'use client'

import React from 'react';

const NoiseOverlay: React.FC = () => {
  const encodedNoise = React.useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        if (Math.random() < 0.25) { // Density
          ctx.fillStyle = Math.random() < 0.5 ? '#ffffff' : '#000000';
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    
    return canvas.toDataURL();
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage: `url(${encodedNoise})`,
        backgroundSize: '300px 300px',
      }}
    />
  );
};

export default NoiseOverlay; 