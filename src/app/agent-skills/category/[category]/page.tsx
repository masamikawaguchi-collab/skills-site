import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/skill-pages";
import { categoryMetas, getCategoryMeta } from "@/lib/categories-content";
import { allSkills } from "@/lib/skills-content";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return categoryMetas.map((meta) => ({
    category: meta.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const meta = getCategoryMeta(resolved.category);

  if (!meta) {
    return {
      title: "Skills ライブラリ",
    };
  }

  return {
    title: `${meta.title} | Skills ライブラリ`,
    description: meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;
  const meta = getCategoryMeta(resolved.category);

  if (!meta) {
    notFound();
  }

  const skills = allSkills.filter((entry) => entry.categorySlug === meta.slug);

  return <CategoryPage meta={meta} skills={skills} />;
}
