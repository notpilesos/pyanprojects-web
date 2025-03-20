"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PlaceholderImage } from "./placeholder-image";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  index?: number;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  tags,
  repoUrl,
  demoUrl,
  index = 0,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageColor, setImageColor] = useState("#16a34a");

  useEffect(() => {
    // Генерируем цвет на основе ID проекта
    const colors = ["#2563eb", "#ca8a04", "#eab308", "#16a34a"];
    const colorIndex = Math.abs(id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colors.length;
    setImageColor(colors[colorIndex]);
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg shadow-sm h-full flex flex-col"
    >
      <div className="relative h-60 overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-900 to-gray-800">
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <span className="text-4xl font-bold text-purple-500/20 select-none z-10">
              {title.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)}
            </span>
          </div>
        )}
        
        {!imageError && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full"
            onError={() => setImageError(true)}
            priority={id === 'structure-generator'}
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 bg-card">
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex gap-2 mt-auto">
          <Button asChild size="sm" variant="outline">
            <Link href={`/projects/${id}`}>
              Детали проекта
            </Link>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub репозиторий"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          {demoUrl && (
            <Button asChild size="icon" variant="ghost">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Демо проекта"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
} 