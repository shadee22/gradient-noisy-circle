'use client'

import React, { useState, useEffect } from 'react';
import NoiseOverlay from './NoiseOverlay';

const GradientCircles: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      setMousePosition({ x: touch.clientX, y: touch.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-black">        
        {/* Circle 4 (Mask) */}
        <div className="relative sm:size-[600px] size-[300px] overflow-hidden rounded-full">
          
          {/* Circle 3 */}
          <div className="absolute inset-0 rounded-full bg-white mix-blend-soft-light" />
          
          {/* Circle 2 */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.30)_50%,#000_100%)] blur-[10px]" />
          
          {/* Circle 1 (Following mouse) */}
          <div 
            className="absolute sm:size-[600px] size-[300px] rounded-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,#FFF_0%,rgba(0,0,0,0.00)_100%)] blur-[100px] mix-blend-plus-lighter transition-transform duration-300 ease"
            style={{
              left: `${mousePosition.x - window.innerWidth / 2}px`,
              top: `${mousePosition.y - window.innerHeight / 2}px`,
              willChange: "transform, filter",
              transform: "translateZ(0)"
            }}
            />
        </div>
      <NoiseOverlay />
    </div>
  );
};

export default GradientCircles; 