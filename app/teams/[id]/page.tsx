import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { teams, teamMembers, projects } from "@/lib/data";
import { TeamPageClient } from "@/components/team-page-client";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const team = teams.find(t => t.id === id);
  
  if (!team) {
    return {
      title: "Team Not Found",
      description: "The requested team does not exist",
    };
  }
  
  return {
    title: `${team.name} Team - Pyan Inc.`,
    description: team.description,
  };
}

export async function generateStaticParams() {
  return teams.map(team => ({
    id: team.id,
  }));
}

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const team = teams.find(t => t.id === id);
  
  if (!team) {
    notFound();
  }
  
  const teamProjects = projects.filter(project => project.team === team.id);
  const teamMembersList = teamMembers.filter(member => member.teams.includes(team.id));
  
  return (
    <>
      <Header />
      <TeamPageClient team={team} teamProjects={teamProjects} teamMembersList={teamMembersList} />
      <Footer />
    </>
  );
} 