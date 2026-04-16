export type OfficialAuthorSkill = {
  title: string;
  description: string;
  href: string;
};

export type OfficialAuthor = {
  slug: string;
  letter: string;
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
    letter: "C",
    name: "Cloudflare",
    count: 9,
    headline: "Cloudflareスキル",
    description:
      "Workers、Agents SDK、MCP サーバー構築など、Cloudflare 上でAIエージェントや周辺基盤を作るためのスキル群です。",
    skills: [
      {
        title: "Agents SDK",
        description:
          "Cloudflare Workers 上で状態を持つ AI エージェントを組み立てるための基礎スキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/cloudflare",
      },
      {
        title: "Cloudflare AIエージェント構築",
        description:
          "Agents SDK を使って、リアルタイム処理やツール呼び出しを備えた AI エージェントを構築します。",
        href: "https://mcpservers.org/ja/agent-skills/cloudflare/building-ai-agent-on-cloudflare",
      },
      {
        title: "Cloudflare で MCP サーバー構築",
        description:
          "Cloudflare Workers 上で OAuth 対応のリモート MCP サーバーを構築・展開するためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/cloudflare",
      },
      {
        title: "Cloudflare プラットフォーム総合",
        description:
          "Workers、KV、D1、R2、セキュリティ機能まで横断して扱うための総合ガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/author/cloudflare",
      },
    ],
  },
  {
    slug: "figma",
    letter: "F",
    name: "Figma",
    count: 7,
    headline: "Figmaスキル",
    description:
      "Figma 上でのデザイン生成、実装連携、デザインシステム整備を進めるためのスキル群です。",
    skills: [
      {
        title: "Figma 画面生成",
        description:
          "コードや要件から、Figma 内にページや画面構成を組み立てるためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/figma",
      },
      {
        title: "Figma デザイン実装",
        description:
          "Figma デザインをアプリケーションコードへ落とし込む際の実装ガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/author/figma",
      },
      {
        title: "デザインシステムルール作成",
        description:
          "プロジェクトごとの設計規則やコンポーネントルールをFigma連携前提で整備します。",
        href: "https://mcpservers.org/ja/agent-skills/author/figma",
      },
      {
        title: "Code Connect コンポーネント連携",
        description:
          "デザインコンポーネントと実装コンポーネントの対応付けを管理するためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/figma",
      },
    ],
  },
  {
    slug: "vercel",
    letter: "V",
    name: "Vercel",
    count: 4,
    headline: "Vercelスキル",
    description:
      "フロントエンド品質、ブラウザ自動化、デプロイ周りを中心に、Vercel 由来の実装支援をまとめたページです。",
    skills: [
      {
        title: "エージェントブラウザ",
        description:
          "表示確認、フォーム操作、スクリーンショット取得などのブラウザ作業を自動化します。",
        href: "https://mcpservers.org/ja/agent-skills/vercel/agent-browser",
      },
      {
        title: "React ベストプラクティス",
        description:
          "React と Next.js の実装品質や性能改善のためのレビュー観点を整理します。",
        href: "https://mcpservers.org/ja/agent-skills/vercel/react-best-practices",
      },
      {
        title: "Vercel デプロイ",
        description:
          "アプリケーションのプレビュー・本番デプロイを安全に進めるためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/vercel",
      },
      {
        title: "Web インターフェースガイドライン",
        description:
          "UI とアクセシビリティの観点から、画面の品質をレビューするためのガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/author/vercel",
      },
    ],
  },
  {
    slug: "google",
    letter: "G",
    name: "Google Workspace",
    count: 92,
    headline: "Google Workspaceスキル",
    description:
      "Gmail、Calendar、Drive、Docs などを横断して扱う大規模なスキル群です。",
    note:
      "ローカル版では件数が多いため、代表的なスキルのみ掲載しています。",
    skills: [
      {
        title: "Google Calendar 管理",
        description:
          "予定確認、イベント作成、空き時間探索などカレンダー操作を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
      {
        title: "Google Drive 管理",
        description:
          "ファイル、フォルダ、共有ドライブの操作や整理を進めるためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
      {
        title: "Gmail 管理",
        description:
          "メール送信、返信、転送、未読整理まで Gmail 作業を横断的に支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
      {
        title: "Google Docs 書き込み",
        description:
          "Google Docs への追記や文書更新をエージェントから扱いやすくするスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
      {
        title: "Google Chat 送信",
        description:
          "Google Chat スペースへの通知やメッセージ送信を自動化します。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
      {
        title: "Google Forms 操作",
        description:
          "フォームの読み書きや回答収集を含めた調査フローを支援するスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/google",
      },
    ],
  },
  {
    slug: "notion",
    letter: "N",
    name: "Notion",
    count: 4,
    headline: "Notionスキル",
    description:
      "ナレッジ整理、ミーティング準備、仕様から実装への橋渡しなど、Notion 中心の業務設計を支援します。",
    skills: [
      {
        title: "ナレッジキャプチャ",
        description:
          "会話や意思決定を Notion 上の資産として構造化し、後から再利用しやすくします。",
        href: "https://mcpservers.org/ja/agent-skills/author/notion",
      },
      {
        title: "会議インテリジェンス",
        description:
          "会議前の準備資料、アジェンダ、関連コンテキストの整理を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/notion",
      },
      {
        title: "調査ドキュメンテーション",
        description:
          "複数の Notion 情報を横断して調査結果を文書化するためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/notion",
      },
      {
        title: "仕様から実装へ",
        description:
          "Notion 上の仕様をタスクや実装計画へ落とし込むための支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/author/notion",
      },
    ],
  },
  {
    slug: "stripe",
    letter: "S",
    name: "Stripe",
    count: 2,
    headline: "Stripeスキル",
    description:
      "決済フローや請求・サブスクリプション周りを安全に扱うための Stripe 系スキルです。",
    skills: [
      {
        title: "Stripe 決済実装",
        description:
          "Checkout、サブスクリプション、Webhook などの決済導線を設計・実装するためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/stripe",
      },
      {
        title: "請求フロー整備",
        description:
          "請求処理や顧客課金まわりの導線を整えるためのガイドとして使えます。",
        href: "https://mcpservers.org/ja/agent-skills/author/stripe",
      },
    ],
  },
  {
    slug: "azure",
    letter: "A",
    name: "Azure",
    count: 20,
    headline: "Azureスキル",
    description:
      "Azure 上でのアプリ構築、運用、認証、AI 活用を支援するスキル群です。",
    note:
      "ローカル版では代表的なテーマを抜粋しています。",
    skills: [
      {
        title: "Azure デプロイ",
        description:
          "Azure リソース上へアプリケーションを配置・更新するための基本導線を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/azure",
      },
      {
        title: "Azure 認証連携",
        description:
          "Entra ID などを活用した認証・認可の導線設計に役立つスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/azure",
      },
      {
        title: "Azure AI 活用",
        description:
          "Azure 上の AI 機能や運用設計をプロダクトに組み込む観点を整理します。",
        href: "https://mcpservers.org/ja/agent-skills/author/azure",
      },
      {
        title: "運用監視と改善",
        description:
          "運用面での監視、コスト、安定性の観点から Azure ワークロードを整えます。",
        href: "https://mcpservers.org/ja/agent-skills/author/azure",
      },
    ],
  },
  {
    slug: "atlassian",
    letter: "A",
    name: "Atlassian",
    count: 5,
    headline: "Atlassianスキル",
    description:
      "Jira や Confluence 周辺の業務整理、情報同期、チーム連携の効率化を支援します。",
    skills: [
      {
        title: "Jira チケット運用",
        description:
          "課題整理、起票、更新、進捗トラッキングなど Jira を軸にした作業を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/atlassian",
      },
      {
        title: "Confluence ドキュメント整理",
        description:
          "知見や議事録を Confluence 上に整理し、検索しやすい状態へ整えます。",
        href: "https://mcpservers.org/ja/agent-skills/author/atlassian",
      },
      {
        title: "開発チーム連携",
        description:
          "チケットとドキュメントの往復を減らし、開発フローを滑らかにするためのガイドです。",
        href: "https://mcpservers.org/ja/agent-skills/author/atlassian",
      },
    ],
  },
  {
    slug: "canva",
    letter: "C",
    name: "Canva",
    count: 3,
    headline: "Canvaスキル",
    description:
      "キャンペーン素材やプレゼン向けのビジュアル制作を、Canva 前提で進めるためのスキル群です。",
    skills: [
      {
        title: "キャンペーン素材制作",
        description:
          "SNS や広告で使う軽量なビジュアルを Canva ベースで組み立てる支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/author/canva",
      },
      {
        title: "テンプレート活用",
        description:
          "既存テンプレートを活かしつつブランド感を崩さない編集の進め方を整理します。",
        href: "https://mcpservers.org/ja/agent-skills/author/canva",
      },
      {
        title: "プレゼン素材量産",
        description:
          "発表資料向けの図版やサムネイルを短時間で揃えるためのワークフローです。",
        href: "https://mcpservers.org/ja/agent-skills/author/canva",
      },
    ],
  },
  {
    slug: "huggingface",
    letter: "H",
    name: "Hugging Face",
    count: 8,
    headline: "Hugging Faceスキル",
    description:
      "モデル活用、推論、デモ公開など、Hugging Face エコシステムを扱うためのスキル群です。",
    skills: [
      {
        title: "モデル探索",
        description:
          "用途に合うモデルやデータセットを探し、比較しながら選ぶための支援を行います。",
        href: "https://mcpservers.org/ja/agent-skills/author/huggingface",
      },
      {
        title: "推論ワークフロー",
        description:
          "推論 API やローカル実行を含む、実験から実装へのつなぎ方を整理します。",
        href: "https://mcpservers.org/ja/agent-skills/author/huggingface",
      },
      {
        title: "デモ公開",
        description:
          "Space やサンプル UI を使って成果物を見せるところまでを意識したスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/huggingface",
      },
      {
        title: "モデル活用設計",
        description:
          "精度・速度・運用コストを見ながらモデル選択するための考え方を扱います。",
        href: "https://mcpservers.org/ja/agent-skills/author/huggingface",
      },
    ],
  },
  {
    slug: "zapier",
    letter: "Z",
    name: "Zapier",
    count: 3,
    headline: "Zapierスキル",
    description:
      "複数サービスをまたぐ業務自動化や、ノーコード連携の設計を進めるためのスキルです。",
    skills: [
      {
        title: "業務自動化フロー設計",
        description:
          "トリガー、アクション、条件分岐を組み合わせた自動化フローの設計を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/zapier",
      },
      {
        title: "外部サービス連携",
        description:
          "CRM、メール、フォームなどのサービス連携を Zapier 前提で整理します。",
        href: "https://mcpservers.org/ja/agent-skills/author/zapier",
      },
      {
        title: "通知と同期",
        description:
          "イベント通知やデータ同期をノーコードで組むための実践的な進め方です。",
        href: "https://mcpservers.org/ja/agent-skills/author/zapier",
      },
    ],
  },
  {
    slug: "sentry",
    letter: "S",
    name: "Sentry",
    count: 5,
    headline: "Sentryスキル",
    description:
      "エラー監視、パフォーマンス追跡、障害調査の起点づくりに使える Sentry 系スキルです。",
    skills: [
      {
        title: "エラー調査",
        description:
          "本番エラーの状況把握、発生条件の切り分け、再発防止につながる調査を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/sentry",
      },
      {
        title: "パフォーマンス確認",
        description:
          "遅い画面や API を見つけ、体感を悪化させている要因を追うためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/sentry",
      },
      {
        title: "運用通知整備",
        description:
          "アラート粒度やチーム連携まで含めた運用面の設計を整えます。",
        href: "https://mcpservers.org/ja/agent-skills/author/sentry",
      },
    ],
  },
  {
    slug: "elevenlabs",
    letter: "E",
    name: "ElevenLabs",
    count: 6,
    headline: "ElevenLabsスキル",
    description:
      "音声生成、読み上げ、ボイス体験の設計を進めるための ElevenLabs 系スキルです。",
    skills: [
      {
        title: "音声生成",
        description:
          "テキストから自然な音声を生成し、プロダクト体験へ組み込む導線を整理します。",
        href: "https://mcpservers.org/ja/agent-skills/author/elevenlabs",
      },
      {
        title: "ボイス体験設計",
        description:
          "読み上げ品質、用途別トーン、導入シーンの設計をまとめて考えるためのスキルです。",
        href: "https://mcpservers.org/ja/agent-skills/author/elevenlabs",
      },
      {
        title: "音声ワークフロー統合",
        description:
          "生成音声を配信・保存・連携フローにのせる実務的な設計観点を支援します。",
        href: "https://mcpservers.org/ja/agent-skills/author/elevenlabs",
      },
    ],
  },
];

export function getOfficialAuthor(slug: string) {
  return officialAuthorsDetail.find((author) => author.slug === slug);
}
