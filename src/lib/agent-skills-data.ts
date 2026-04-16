import { allSkills, type Skill } from "@/lib/skills-content";
import { categoryMetas } from "@/lib/categories-content";

type NavigationLink = {
  label: string;
  href: string;
  active?: boolean;
};

export const heroVideoUrl =
  "https://www.youtube.com/embed/IoqpBKrNaZI?controls=1";

export const topNavigationLinks: NavigationLink[] = [
  { label: "ホーム", href: "/" },
  { label: "リモートサーバー", href: "https://mcpservers.org/ja/remote-mcp-servers" },
  { label: "クライアント", href: "https://mcpservers.org/ja/clients" },
  { label: "Skills ライブラリ", href: "/", active: true },
];

export type OfficialAuthorCard = {
  brandKey: string;
  name: string;
  count: number;
  tagline: string;
  href: string;
};

export const officialAuthors: OfficialAuthorCard[] = [
  {
    brandKey: "cloudflare",
    name: "Cloudflare",
    count: 4,
    tagline: "Workers・Agents SDK・MCP",
    href: "/agent-skills/author/cloudflare",
  },
  {
    brandKey: "figma",
    name: "Figma",
    count: 4,
    tagline: "デザイン生成と実装連携",
    href: "/agent-skills/author/figma",
  },
  {
    brandKey: "vercel",
    name: "Vercel",
    count: 4,
    tagline: "React / Next.js 実装支援",
    href: "/agent-skills/author/vercel",
  },
  {
    brandKey: "google",
    name: "Google Workspace",
    count: 6,
    tagline: "Gmail・Drive・Calendar",
    href: "/agent-skills/author/google",
  },
  {
    brandKey: "notion",
    name: "Notion",
    count: 4,
    tagline: "ナレッジと会議の整理",
    href: "/agent-skills/author/notion",
  },
];

export type SkillCard = {
  title: string;
  author: string;
  description: string;
  href: string;
  mockup: Skill["mockup"];
};

export type CategorySection = {
  slug: string;
  title: string;
  count: number;
  href: string;
  accent: string;
  accentSoft: string;
  skills: SkillCard[];
};

function toSkillCard(skill: Skill): SkillCard {
  return {
    title: skill.title,
    author: skill.authorLabel,
    description: skill.summary,
    href: skill.localHref,
    mockup: skill.mockup,
  };
}

export const categorySections: CategorySection[] = categoryMetas.map((meta) => {
  const skills = allSkills.filter((entry) => entry.categorySlug === meta.slug);

  return {
    slug: meta.slug,
    title: meta.title,
    count: skills.length,
    href: `/agent-skills/category/${meta.slug}`,
    accent: meta.accent,
    accentSoft: meta.accentSoft,
    skills: skills.map(toSkillCard),
  };
});

export const footerLinks = [
  { label: "最新MCPサーバー", href: "https://mcpservers.org/ja/all?sort=newest" },
  { label: "公式MCPサーバー", href: "https://mcpservers.org/ja/official" },
  { label: "リモートMCPサーバー", href: "https://mcpservers.org/ja/remote-mcp-servers" },
  { label: "ブログ", href: "https://blog.mcpservers.org/" },
] as const;
