export type OfficialAuthorSkill = {
  title: string;
  description: string;
  href: string;
};

export type OfficialAuthor = {
  slug: string;
  brandKey: string;
  name: string;
  count: number;
  headline: string;
  description: string;
  note?: string;
  skills: OfficialAuthorSkill[];
};

export const officialAuthorsDetail: OfficialAuthor[] = [
  {
    slug: "cloudflare",
    brandKey: "cloudflare",
    name: "Cloudflare",
    count: 4,
    headline: "Cloudflare スキル",
    description:
      "Workers、Agents SDK、MCP サーバー構築など、Cloudflare 上で AI エージェントや周辺基盤を組み立てるためのスキルを集めています。",
    skills: [
      {
        title: "Agents SDK",
        description:
          "Cloudflare Workers 上で状態を持つ AI エージェントを組み立てるための基礎スキルです。",
        href: "/agent-skills/cloudflare/agents-sdk",
      },
      {
        title: "Cloudflare AIエージェント構築",
        description:
          "Agents SDK を使って、リアルタイム処理やツール呼び出しを備えた AI エージェントを構築します。",
        href: "/agent-skills/cloudflare/building-ai-agent-on-cloudflare",
      },
      {
        title: "Cloudflare で MCP サーバー構築",
        description:
          "Cloudflare Workers 上で OAuth 対応のリモート MCP サーバーを構築・展開するためのスキルです。",
        href: "/agent-skills/cloudflare/mcp-server",
      },
      {
        title: "Cloudflare プラットフォーム総合",
        description:
          "Workers、KV、D1、R2、セキュリティ機能まで横断して扱うための総合ガイドです。",
        href: "/agent-skills/cloudflare/platform",
      },
    ],
  },
  {
    slug: "figma",
    brandKey: "figma",
    name: "Figma",
    count: 4,
    headline: "Figma スキル",
    description:
      "Figma 上でのデザイン生成、実装連携、デザインシステム整備を進めるためのスキル群です。",
    skills: [
      {
        title: "Figma 画面生成",
        description:
          "コードや要件から、Figma 内にページや画面構成を組み立てるためのスキルです。",
        href: "/agent-skills/figma/page-generation",
      },
      {
        title: "Figma デザイン実装",
        description:
          "Figma デザインをアプリケーションコードへ落とし込む際の実装ガイドです。",
        href: "/agent-skills/figma/design-implementation",
      },
      {
        title: "デザインシステムルール作成",
        description:
          "プロジェクトごとの設計規則やコンポーネントルールを Figma 連携前提で整備します。",
        href: "/agent-skills/figma/design-system",
      },
      {
        title: "Code Connect コンポーネント連携",
        description:
          "デザインコンポーネントと実装コンポーネントの対応付けを管理するためのスキルです。",
        href: "/agent-skills/figma/code-connect",
      },
    ],
  },
  {
    slug: "vercel",
    brandKey: "vercel",
    name: "Vercel",
    count: 4,
    headline: "Vercel スキル",
    description:
      "フロントエンドの品質、ブラウザ自動化、デプロイまわりを中心に、Vercel 由来の実装支援を集めたページです。",
    skills: [
      {
        title: "エージェントブラウザ",
        description:
          "表示確認、フォーム操作、スクリーンショット取得などのブラウザ作業を自動化します。",
        href: "/agent-skills/vercel/agent-browser",
      },
      {
        title: "React ベストプラクティス",
        description:
          "React と Next.js の実装品質や性能改善のためのレビュー観点を整理します。",
        href: "/agent-skills/vercel/react-best-practices",
      },
      {
        title: "Vercel デプロイ",
        description:
          "アプリケーションのプレビュー・本番デプロイを安全に進めるためのスキルです。",
        href: "/agent-skills/vercel/deploy",
      },
      {
        title: "Web インターフェースガイドライン",
        description:
          "UI とアクセシビリティの観点から、画面の品質をレビューするためのガイドです。",
        href: "/agent-skills/vercel/web-interface-guidelines",
      },
    ],
  },
  {
    slug: "google",
    brandKey: "google",
    name: "Google Workspace",
    count: 6,
    headline: "Google Workspace スキル",
    description:
      "Gmail、Calendar、Drive、Docs などを横断して扱うスキル群です。業務の連絡・共有・スケジュール領域を任せられます。",
    note: "ローカル版では代表的なスキルに絞って掲載しています。",
    skills: [
      {
        title: "Google Calendar 管理",
        description:
          "予定確認、イベント作成、空き時間探索などカレンダー操作を支援します。",
        href: "/agent-skills/google/calendar",
      },
      {
        title: "Google Drive 管理",
        description:
          "ファイル、フォルダ、共有ドライブの操作や整理を進めるためのスキルです。",
        href: "/agent-skills/google/drive",
      },
      {
        title: "Gmail 管理",
        description:
          "メール送信、返信、転送、未読整理まで Gmail 作業を横断的に支援します。",
        href: "/agent-skills/google/gmail",
      },
      {
        title: "Google Docs 書き込み",
        description:
          "Google Docs への追記や文書更新をエージェントから扱いやすくするスキルです。",
        href: "/agent-skills/google/docs",
      },
      {
        title: "Google Chat 送信",
        description:
          "Google Chat スペースへの通知やメッセージ送信を自動化します。",
        href: "/agent-skills/google/chat",
      },
      {
        title: "Google Forms 操作",
        description:
          "フォームの読み書きや回答収集を含めた調査フローを支援するスキルです。",
        href: "/agent-skills/google/forms",
      },
    ],
  },
  {
    slug: "notion",
    brandKey: "notion",
    name: "Notion",
    count: 4,
    headline: "Notion スキル",
    description:
      "ナレッジ整理、会議準備、仕様から実装への橋渡しなど、Notion を中心にした業務設計を支援します。",
    skills: [
      {
        title: "ナレッジキャプチャ",
        description:
          "会話や意思決定を Notion 上の資産として構造化し、後から再利用しやすくします。",
        href: "/agent-skills/notion/knowledge-capture",
      },
      {
        title: "会議インテリジェンス",
        description:
          "会議前の準備資料、アジェンダ、関連コンテキストの整理を支援します。",
        href: "/agent-skills/notion/meeting-intelligence",
      },
      {
        title: "調査ドキュメンテーション",
        description:
          "複数の Notion 情報を横断して調査結果を文書化するためのスキルです。",
        href: "/agent-skills/notion/research-documentation",
      },
      {
        title: "仕様から実装へ",
        description:
          "Notion 上の仕様をタスクや実装計画へ落とし込むための支援を行います。",
        href: "/agent-skills/notion/spec-to-implementation",
      },
    ],
  },
];

export function getOfficialAuthor(slug: string) {
  return officialAuthorsDetail.find((author) => author.slug === slug);
}
