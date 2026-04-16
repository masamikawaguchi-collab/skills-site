import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkillDetailPage } from "@/components/skill-pages";
import { allSkills, getSkill } from "@/lib/skills-content";
import { getCategoryMeta } from "@/lib/categories-content";

type PageProps = {
  params: Promise<{
    author: string;
    skill: string;
  }>;
};

export async function generateStaticParams() {
  return allSkills.map((entry) => ({
    author: entry.author,
    skill: entry.skill,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const skill = getSkill(resolved.author, resolved.skill);

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
  const skill = getSkill(resolved.author, resolved.skill);

  if (!skill) {
    notFound();
  }

  const category = getCategoryMeta(skill.categorySlug);

  return (
    <SkillDetailPage
      skill={skill}
      categoryHref={`/agent-skills/category/${skill.categorySlug}`}
      accent={category?.accent ?? "#2563eb"}
      accentSoft={category?.accentSoft ?? "#dbeafe"}
    />
  );
}
