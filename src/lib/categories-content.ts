export type CategoryMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  accent: string;
  accentSoft: string;
  note?: string;
};

export const categoryMetas: CategoryMeta[] = [
  {
    slug: "featured",
    shortTitle: "おすすめ",
    title: "おすすめスキル",
    description:
      "特に利用が多く、最初に触れて損のない定番スキルを集めたカテゴリです。どれから試せばよいか迷ったらここから選ぶのが近道です。",
    accent: "#f59e0b",
    accentSoft: "#fef3c7",
  },
  {
    slug: "document",
    shortTitle: "ドキュメント",
    title: "ドキュメントスキル",
    description:
      "Word、PDF、PowerPoint、Excel、EPUB など、資料ファイルを扱うためのスキル群です。書式や数式を壊さず、中身だけ編集したい場面に向いています。",
    accent: "#2563eb",
    accentSoft: "#dbeafe",
  },
  {
    slug: "browser-automation",
    shortTitle: "ブラウザ自動化",
    title: "ブラウザ自動化スキル",
    description:
      "ブラウザ操作、フォーム入力、スクリーンショット取得などを、エージェントに任せて自動で回すためのスキルです。繰り返し作業の効率化と品質確認に役立ちます。",
    accent: "#7c3aed",
    accentSoft: "#ede9fe",
  },
  {
    slug: "database",
    shortTitle: "データベース",
    title: "データベーススキル",
    description:
      "スキーマ設計、クエリ最適化、運用まわりを扱うスキル群です。MySQL や Postgres など主要な関係データベースの落とし穴を踏まずに進めたい場面に向きます。",
    accent: "#059669",
    accentSoft: "#d1fae5",
  },
  {
    slug: "development",
    shortTitle: "開発",
    title: "開発スキル",
    description:
      "コード検索、コスト運用、エッジ上でのエージェント構築など、開発と運用を横断するスキルを集めたカテゴリです。",
    accent: "#475569",
    accentSoft: "#e2e8f0",
  },
  {
    slug: "creative",
    shortTitle: "クリエイティブ",
    title: "クリエイティブスキル",
    description:
      "ブランドの統一感や、止まっている絵としての完成度を高めるためのスキル群です。資料・Web・SNS の雰囲気を揃えたい場面で使えます。",
    accent: "#db2777",
    accentSoft: "#fce7f3",
  },
  {
    slug: "media",
    shortTitle: "メディア",
    title: "メディアスキル",
    description:
      "画像や動画などのメディア素材を整えるためのスキルを集めたカテゴリです。見栄えを揃える下処理に向いています。",
    accent: "#dc2626",
    accentSoft: "#fee2e2",
  },
  {
    slug: "productivity",
    shortTitle: "生産性",
    title: "生産性スキル",
    description:
      "ファイル整理、ネーミング、ナレッジ活用など、日々の作業の地力を上げるスキルを集めたカテゴリです。",
    accent: "#0d9488",
    accentSoft: "#ccfbf1",
  },
  {
    slug: "data-analysis",
    shortTitle: "データ分析",
    title: "データ分析スキル",
    description:
      "CSV や業務データから示唆を引き出すスキル群です。分析レポートの初動を肩代わりしてもらう用途に向いています。",
    accent: "#4f46e5",
    accentSoft: "#e0e7ff",
  },
  {
    slug: "research",
    shortTitle: "リサーチ",
    title: "リサーチスキル",
    description:
      "記事本文の抽出、企業調査など、情報収集の下ごしらえを担うスキル群です。",
    accent: "#ea580c",
    accentSoft: "#ffedd5",
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categoryMetas.find((meta) => meta.slug === slug);
}
