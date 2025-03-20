"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Использовать соответствующий путь изображения в зависимости от темы
  const imagePath = isDark && siteConfig.logo.darkImagePath 
    ? siteConfig.logo.darkImagePath 
    : siteConfig.logo.imagePath;

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      {imagePath ? (
        <div className="relative h-9 w-9">
          <Image
            src={imagePath}
            alt={siteConfig.logo.text}
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ) : null}
      <span className="font-bold text-xl">{siteConfig.logo.text}</span>
    </Link>
  );
} 