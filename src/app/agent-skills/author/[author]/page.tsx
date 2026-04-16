import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfficialAuthorPage } from "@/components/official-author-pages";
import { getOfficialAuthor, officialAuthorsDetail } from "@/lib/official-authors-data";

type PageProps = {
  params: Promise<{
    author: string;
  }>;
};

export async function generateStaticParams() {
  return officialAuthorsDetail.map((author) => ({
    author: author.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const author = getOfficialAuthor(resolved.author);

  if (!author) {
    return {
      title: "公式スキル | Skills ライブラリ",
    };
  }

  return {
    title: `${author.name}スキル | Skills ライブラリ`,
    description: author.description,
  };
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;
  const author = getOfficialAuthor(resolved.author);

  if (!author) {
    notFound();
  }

  return <OfficialAuthorPage author={author} />;
}
