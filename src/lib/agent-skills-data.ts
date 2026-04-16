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

export const officialAuthors = [
  { letter: "C", name: "Cloudflare", count: 9, href: "/agent-skills/author/cloudflare" },
  { letter: "F", name: "Figma", count: 7, href: "/agent-skills/author/figma" },
  { letter: "V", name: "Vercel", count: 4, href: "/agent-skills/author/vercel" },
  { letter: "G", name: "Google Workspace", count: 92, href: "/agent-skills/author/google" },
  { letter: "N", name: "Notion", count: 4, href: "/agent-skills/author/notion" },
  { letter: "S", name: "Stripe", count: 2, href: "/agent-skills/author/stripe" },
  { letter: "A", name: "Azure", count: 20, href: "/agent-skills/author/azure" },
  { letter: "A", name: "Atlassian", count: 5, href: "/agent-skills/author/atlassian" },
  { letter: "C", name: "Canva", count: 3, href: "/agent-skills/author/canva" },
  { letter: "H", name: "Hugging Face", count: 8, href: "/agent-skills/author/huggingface" },
  { letter: "Z", name: "Zapier", count: 3, href: "/agent-skills/author/zapier" },
  { letter: "S", name: "Sentry", count: 5, href: "/agent-skills/author/sentry" },
  { letter: "E", name: "ElevenLabs", count: 6, href: "/agent-skills/author/elevenlabs" },
] as const;

type SkillCard = {
  title: string;
  author: string;
  description: string;
  href: string;
};

type CategorySection = {
  slug: string;
  title: string;
  count: number;
  href: string;
  skills: SkillCard[];
};

export const categorySections: CategorySection[] = [
  {
    slug: "featured",
    title: "おすすめスキル",
    count: 4,
    href: "https://mcpservers.org/ja/agent-skills/category/featured",
    skills: [
      {
        title: "フロントエンド設計",
        author: "Anthropic",
        description:
          "ありきたりなAI風デザインを避けながら、実運用レベルのフロントエンドUIを組み立てるための設計ガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/anthropic/frontend-design",
      },
      {
        title: "NotebookLM 連携",
        author: "pleaseprompto",
        description:
          "NotebookLM 内のソースと接続し、アップロード済み資料に根ざした回答を引き出せるスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/pleaseprompto/notebooklm-skill",
      },
      {
        title: "React ベストプラクティス",
        author: "Vercel",
        description:
          "React と Next.js の実装、リファクタ、性能調整に使える実践的なレビュー観点をまとめています。",
        href: "https://mcpservers.org/ja/agent-skills/vercel/react-best-practices",
      },
      {
        title: "YouTube 文字起こし取得",
        author: "michalparkola",
        description:
          "YouTube のURLから字幕や文字起こしを取得し、要約やリサーチに再利用しやすくします。",
        href: "https://mcpservers.org/ja/agent-skills/michalparkola/youtube-transcript",
      },
    ],
  },
  {
    slug: "document",
    title: "ドキュメントスキル",
    count: 5,
    href: "/agent-skills/category/document",
    skills: [
      {
        title: "Word 文書",
        author: "Anthropic",
        description:
          "コメント、変更履歴、書式を保ちながら Word 文書を扱えるドキュメント向けスキルです。",
        href: "/agent-skills/anthropic/docx",
      },
      {
        title: "Markdown から EPUB",
        author: "smerchek",
        description:
          "Markdown のメモや要約を、読みやすい EPUB 形式へ変換するためのスキルです。",
        href: "/agent-skills/smerchek/markdown-to-epub",
      },
      {
        title: "PDF",
        author: "Anthropic",
        description:
          "抽出、生成、結合、フォーム入力まで、PDF 業務をまとめて扱えるツールキットです。",
        href: "/agent-skills/anthropic/pdf",
      },
      {
        title: "PowerPoint プレゼン",
        author: "Anthropic",
        description:
          "プレゼン資料の作成、編集、レイアウト調整、スピーカーノート運用まで支援します。",
        href: "/agent-skills/anthropic/pptx",
      },
      {
        title: "XLSX 表計算",
        author: "Anthropic",
        description:
          "数式、書式、分析用途を保ちながら Excel 系ファイルを扱うための実務向けスキルです。",
        href: "/agent-skills/anthropic/xlsx",
      },
    ],
  },
  {
    slug: "browser-automation",
    title: "ブラウザ自動化スキル",
    count: 3,
    href: "https://mcpservers.org/ja/agent-skills/category/browser-automation",
    skills: [
      {
        title: "エージェントブラウザ",
        author: "Vercel",
        description:
          "ページ遷移、スクリーンショット、フォーム操作、表示確認などのブラウザ作業を自動化します。",
        href: "https://mcpservers.org/ja/agent-skills/vercel/agent-browser",
      },
      {
        title: "ブラウザ操作支援",
        author: "browser-use",
        description:
          "サイト操作、フォーム入力、画面上の情報取得などに使える汎用ブラウザ自動化スキルです。",
        href: "https://mcpservers.org/ja/agent-skills/browser-use/browser-use",
      },
      {
        title: "Playwright 自動化",
        author: "Microsoft",
        description:
          "テスト、操作フロー検証、スクリーンショット取得に向いた安定したブラウザ自動化基盤です。",
        href: "https://mcpservers.org/ja/agent-skills/microsoft/playwright",
      },
    ],
  },
  {
    slug: "database",
    title: "データベーススキル",
    count: 5,
    href: "https://mcpservers.org/ja/agent-skills/category/database",
    skills: [
      {
        title: "データベース設計",
        author: "softaworks",
        description:
          "SQL と NoSQL の両方で、実運用を意識したスキーマ設計を進めるための支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/softaworks/database-schema-designer",
      },
      {
        title: "MySQL",
        author: "PlanetScale",
        description:
          "MySQL / InnoDB のスキーマ変更、索引設計、トランザクション、クエリ最適化を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/planetscale/mysql",
      },
      {
        title: "Neon サーバーレス Postgres",
        author: "Neon",
        description:
          "Neon の Serverless Postgres を扱うための構成、実装、運用パターンを整理したガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/neon/neon-serverless-postgres",
      },
      {
        title: "PlanetScale Postgres 最適化",
        author: "PlanetScale",
        description:
          "Postgres の最適化とトラブルシュートを通じて、安定したデータベース運用を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/planetscale/postgres",
      },
    ],
  },
  {
    slug: "development",
    title: "開発スキル",
    count: 27,
    href: "https://mcpservers.org/ja/agent-skills/category/development",
    skills: [
      {
        title: "ast-grep",
        author: "ast-grep",
        description:
          "構文木ベースでコード構造を探し、単純な文字列検索より深く解析できる検索支援です。",
        href: "https://mcpservers.org/ja/agent-skills/ast-grep/ast-grep",
      },
      {
        title: "AWS コストと運用",
        author: "zxkane",
        description:
          "AWS 環境のコスト把握、監視、運用改善をひとまとめに支援するスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/zxkane/aws-cost-and-operations",
      },
      {
        title: "Cloudflare AIエージェント構築",
        author: "Cloudflare",
        description:
          "Cloudflare 上でリアルタイム処理やスケジュール実行を備えた AI エージェントを構築します。",
        href: "https://mcpservers.org/ja/agent-skills/cloudflare/building-ai-agent-on-cloudflare",
      },
      {
        title: "FFUF ファジング支援",
        author: "jthack",
        description:
          "隠れたパスやAPIエンドポイントなどを見つけるための Web ファジング支援スキルです。",
        href: "https://mcpservers.org/ja/agent-skills/jthack/ffuf-skill",
      },
    ],
  },
  {
    slug: "creative",
    title: "クリエイティブスキル",
    count: 7,
    href: "https://mcpservers.org/ja/agent-skills/category/creative",
    skills: [
      {
        title: "アルゴリズミックアート",
        author: "Anthropic",
        description:
          "p5.js を使ったジェネラティブアート制作を、再現性のある乱数設計とともに支援します。",
        href: "https://mcpservers.org/ja/agent-skills/anthropic/algorithmic-art",
      },
      {
        title: "ブランドガイドライン",
        author: "Anthropic",
        description:
          "ブランドカラー、タイポグラフィ、視覚ルールを成果物へ一貫して適用するためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/anthropic/brand-guidelines",
      },
      {
        title: "キャンバスデザイン",
        author: "Anthropic",
        description:
          "ポスターやアートワーク、静的ビジュアルを洗練された構図で制作するための支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/anthropic/canvas-design",
      },
      {
        title: "Impeccable",
        author: "pbakaus",
        description:
          "単調なAIっぽさを避け、完成度の高いフロントエンド表現へ導くクラフト重視のガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/pbakaus/impeccable",
      },
    ],
  },
  {
    slug: "media",
    title: "メディアスキル",
    count: 2,
    href: "https://mcpservers.org/ja/agent-skills/category/media",
    skills: [
      {
        title: "画像補正",
        author: "composiohq",
        description:
          "画像やスクリーンショットを鮮明に整え、より見栄えの良い状態へ補正します。",
        href: "https://mcpservers.org/ja/agent-skills/composiohq/image-enhancer",
      },
      {
        title: "YouTube 文字起こし取得",
        author: "michalparkola",
        description:
          "YouTube 動画から文字起こしを取得し、字幕確認や要約、分析に使いやすくします。",
        href: "https://mcpservers.org/ja/agent-skills/michalparkola/youtube-transcript",
      },
    ],
  },
  {
    slug: "productivity",
    title: "生産性スキル",
    count: 3,
    href: "https://mcpservers.org/ja/agent-skills/category/productivity",
    skills: [
      {
        title: "ドメイン名アイデア出し",
        author: "composiohq",
        description:
          "新しいサービスやブランド向けに、取得可能性も踏まえたドメイン案を考えるスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/composiohq/domain-name-brainstormer",
      },
      {
        title: "ファイル整理",
        author: "composiohq",
        description:
          "ファイルとフォルダを整理し、運用しやすいディレクトリ構成へ整える支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/composiohq/file-organizer",
      },
      {
        title: "NotebookLM 連携",
        author: "pleaseprompto",
        description:
          "NotebookLM と接続し、資料に基づく会話やリサーチを進めやすくするスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/pleaseprompto/notebooklm-skill",
      },
    ],
  },
  {
    slug: "data-analysis",
    title: "データ分析スキル",
    count: 2,
    href: "https://mcpservers.org/ja/agent-skills/category/data-analysis",
    skills: [
      {
        title: "CSV データ要約",
        author: "coffeefuelbump",
        description:
          "CSV を読み込み、追加指示がなくても分析結果や示唆、可視化の要点をまとめます。",
        href: "https://mcpservers.org/ja/agent-skills/coffeefuelbump/csv-data-summarizer",
      },
      {
        title: "Ramp ベンダー支出分析",
        author: "Ramp",
        description:
          "ベンダー支出データを分析し、レポートや運用改善に使える示唆へ変換します。",
        href: "https://mcpservers.org/ja/agent-skills/ramp/vendor-spend-analysis",
      },
    ],
  },
  {
    slug: "research",
    title: "リサーチスキル",
    count: 2,
    href: "https://mcpservers.org/ja/agent-skills/category/research",
    skills: [
      {
        title: "記事本文抽出",
        author: "michalparkola",
        description:
          "記事ページから本文だけを抜き出し、周辺のノイズを除いた読みやすい内容に整えます。",
        href: "https://mcpservers.org/ja/agent-skills/michalparkola/article-extractor",
      },
      {
        title: "リード調査アシスタント",
        author: "composiohq",
        description:
          "見込み顧客の調査結果を整理し、アプローチ計画へ落とし込むための支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/composiohq/lead-research-assistant",
      },
    ],
  },
];

export const footerLinks = [
  { label: "最新MCPサーバー", href: "https://mcpservers.org/ja/all?sort=newest" },
  { label: "公式MCPサーバー", href: "https://mcpservers.org/ja/official" },
  { label: "リモートMCPサーバー", href: "https://mcpservers.org/ja/remote-mcp-servers" },
  { label: "ブログ", href: "https://blog.mcpservers.org/" },
] as const;
