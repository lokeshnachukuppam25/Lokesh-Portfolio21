"use client";

import React, { FC, ReactNode } from "react";

interface GradientTextProps {
  colors: string[];
  animationSpeed: number;
  showBorder: boolean;
  className?: string;
  children: ReactNode;
}

const GradientText: FC<GradientTextProps> = ({
  colors,
  animationSpeed,
  showBorder,
  className = "",
  children,
}) => {
  const gradientColors = colors.join(", ");
  
  return (
    <div 
      className={`animated-gradient-text ${className}`}
      style={{
        border: showBorder ? "2px solid transparent" : "none",
        backgroundColor: "transparent",
      }}
    >
      {showBorder && (
        <div
          className="gradient-overlay"
          style={{
            background: `linear-gradient(45deg, ${gradientColors})`,
            animationDuration: `${animationSpeed}s`,
          }}
        />
      )}
      <span
        className="text-content"
        style={{
          background: `linear-gradient(45deg, ${gradientColors})`,
          backgroundSize: "300% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animationDuration: `${animationSpeed}s`,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default GradientText;