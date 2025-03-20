export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  team: string;
  teamName: string;
  teamIds: string[];
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
  technologies: string[];
  features?: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  expertise: string[];
  keySkills: string[];
  teamLead?: TeamMember;
  members: TeamMember[];
  projects: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
  avatarFallback: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
} 