"use client";

import dynamic from "next/dynamic";

// Используем динамический импорт с опцией ssr: false для клиентского компонента
const ProjectClient = dynamic(() => import("@/components/project-client"), { ssr: false });

export default function Page() {
  return <ProjectClient />;
} 