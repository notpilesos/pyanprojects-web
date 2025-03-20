"use client";

import React from "react";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export function PlaceholderImage({
  text,
  bgColor = "#16a34a",
  textColor = "#ffffff",
  className,
}: PlaceholderImageProps) {
  // Создаем короткую форму из текста (до 2 букв)
  const shortText = text
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Создаем градиент на основе основного цвета
  const baseColor = bgColor || "#16a34a";
  const gradientStyle = {
    background: `linear-gradient(135deg, ${baseColor} 0%, rgba(0,0,0,0.8) 100%)`,
  };

  return (
    <div 
      className={`w-full h-full flex items-center justify-center absolute inset-0 ${className || ''}`}
      style={gradientStyle}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Декоративные элементы */}
        <div 
          className="absolute rounded-full opacity-30"
          style={{
            width: '40%',
            height: '40%',
            background: `radial-gradient(circle, ${textColor} 0%, transparent 70%)`,
            top: '15%',
            right: '10%',
          }}
        />
        <div 
          className="absolute rounded-full opacity-20"
          style={{
            width: '60%',
            height: '60%',
            background: `radial-gradient(circle, ${textColor} 0%, transparent 70%)`,
            bottom: '0%',
            left: '0%',
          }}
        />
      </div>
      
      {/* Текст или аббревиатура */}
      <div className="relative z-10 text-center p-4">
        <span className="text-5xl font-bold" style={{ color: textColor }}>
          {shortText}
        </span>
        <div className="mt-2 text-sm font-medium text-white/90 max-w-[80%] mx-auto">
          {text}
        </div>
      </div>
    </div>
  );
} 