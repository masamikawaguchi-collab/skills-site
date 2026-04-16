import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentSkillDetailPage } from "@/components/document-pages";
import { documentSkills, getDocumentSkill } from "@/lib/document-skills-data";

type PageProps = {
  params: Promise<{
    author: string;
    skill: string;
  }>;
};

export async function generateStaticParams() {
  return documentSkills.map((entry) => ({
    author: entry.author,
    skill: entry.skill,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const skill = getDocumentSkill(resolved.author, resolved.skill);

  if (!skill) {
    return {
      title: "Skills ライブラリ",
    };
  }

  return {
    title: `${skill.title} | Skills ライブラリ`,
    description: skill.description,
  };
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;
  const skill = getDocumentSkill(resolved.author, resolved.skill);

  if (!skill) {
    notFound();
  }

  return <DocumentSkillDetailPage skill={skill} />;
}
