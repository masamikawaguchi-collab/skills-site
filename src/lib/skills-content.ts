export type SkillCodeExample = {
  title?: string;
  language: string;
  code: string;
};

export type SkillTable = {
  headers: string[];
  rows: string[][];
};

export type SkillSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  codeExamples?: SkillCodeExample[];
  table?: SkillTable;
};

export type MockupVariant =
  | "doc"
  | "pdf"
  | "pptx"
  | "xlsx"
  | "epub"
  | "frontend"
  | "react"
  | "notebook"
  | "youtube"
  | "agent-browser"
  | "browser-use"
  | "playwright"
  | "db-schema"
  | "mysql"
  | "neon"
  | "postgres"
  | "ast"
  | "aws-cost"
  | "cloudflare-agent"
  | "brand"
  | "canvas"
  | "image"
  | "domain"
  | "file"
  | "csv"
  | "vendor"
  | "article"
  | "lead";

export type Skill = {
  author: string;
  skill: string;
  title: string;
  authorLabel: string;
  summary: string;
  intro: string;
  description: string;
  installCommand: string;
  githubUrl: string;
  localHref: string;
  categorySlug: string;
  categoryTitle: string;
  mockup: MockupVariant;
  sections: SkillSection[];
};

export const allSkills: Skill[] = [
  {
    author: "anthropic",
    skill: "frontend-design",
    title: "フロントエンド設計",
    authorLabel: "Anthropic",
    summary:
      "ありきたりなAI生成UIを避け、実運用レベルのフロントエンドを設計・実装するためのスキルです。",
    intro:
      "AI が出力する UI は、配色も余白もボタン形状も似たような『どこかで見た画面』に寄りやすい性質があります。このスキルは、そうしたテンプレ感の手前で『情報階層・余白・色・コンポーネント分割』をどう詰めるかを言語化し、量産品ではない仕上がりへ寄せていくためのガイドです。",
    description:
      "視線の流れ、グルーピング、余白のリズム、状態のバリエーション（空・読み込み中・エラー・成功）、アクセシビリティ、パフォーマンスまでを横断的に検討します。デザイン・実装の両方の判断ポイントをチェックリスト形式に落とし込み、レビューでも使える共通言語として整理しています。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill frontend-design",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/frontend-design",
    categorySlug: "featured",
    categoryTitle: "おすすめスキル",
    mockup: "frontend",
    sections: [
      {
        id: "design-pillars",
        title: "設計の柱",
        bullets: [
          "情報階層: 見出し・余白・カラーで読み順を意図的に作る",
          "コンポーネント: 再利用性と一貫性を優先し、例外は明示的に切り出す",
          "アクセシビリティ: キーボード操作、コントラスト、スクリーンリーダーを最初から織り込む",
          "状態設計: 空 / 読み込み中 / エラー / 成功のすべてに専用の見た目を用意する",
          "余白とリズム: 8 / 16 / 24 のような階段で揃え、視覚的な単調さを避ける",
        ],
      },
      {
        id: "anti-patterns",
        title: "AI 生成 UI に出やすい弱点",
        paragraphs: [
          "AI が一度で出した UI は、似たカード・似た配色・似たボタンが画面を埋め、強弱のない『のっぺりした画面』になりがちです。レビュー時には、まず『主役は何か』『2番手は何か』を 1 文で言えるかを確かめます。",
        ],
        bullets: [
          "全カードが同じ大きさ・同じ色で並び、優先順位がない",
          "余白がすべて 16px などの単調なスペーシング",
          "見出し・補助テキスト・キャプションのコントラストが弱い",
          "Hover / Focus / Disabled の意匠が抜け落ちている",
          "モバイルで情報の優先順位が崩れ、横スクロールが発生する",
        ],
      },
      {
        id: "review-flow",
        title: "レビューの進め方",
        table: {
          headers: ["観点", "確認すること", "NG の典型例"],
          rows: [
            ["視線", "最初に目が行く要素が意図したものか", "全要素が同サイズで主役不在"],
            ["余白", "セクション間と要素内で余白に差があるか", "全部 16px で平坦"],
            ["色", "強調色が画面で 1〜2 種に絞られているか", "強調色が 5 色以上"],
            ["状態", "空・読み込み・エラーが用意されているか", "成功時のみデザインが存在"],
            ["可変幅", "幅 320px〜1440px で破綻しないか", "中間幅で要素が重なる"],
          ],
        },
      },
      {
        id: "implementation-tips",
        title: "実装に落とすときのコツ",
        bullets: [
          "デザイントークン（色 / 余白 / 角丸 / 影）を CSS 変数か Tailwind で集中管理する",
          "1 コンポーネントは 200〜300 行を上限に分割する",
          "props のバリアントは enum 化し、文字列の typo を防ぐ",
          "Storybook やプレビュー環境で状態を切り替えながらレビューする",
        ],
      },
      {
        id: "review-checklist",
        title: "仕上げチェック",
        bullets: [
          "同じ役割の UI が画面内でばらついていないか",
          "目的に対して文字量が多すぎないか",
          "Hover / Focus / Disabled まで意匠が揃っているか",
          "モバイルでも情報の優先順位が崩れていないか",
          "実装後の Lighthouse / axe スコアが本番想定値に届いているか",
        ],
      },
    ],
  },
  {
    author: "pleaseprompto",
    skill: "notebooklm-skill",
    title: "NotebookLM 連携",
    authorLabel: "pleaseprompto",
    summary:
      "NotebookLM のノートブックにアップロード済みのソースを活用し、資料に根ざした回答を引き出すためのスキルです。",
    intro:
      "NotebookLM は、アップロード済みの資料『だけ』を根拠に回答する性質が強みです。一般論を混ぜず、社内マニュアルや論文のような特定資料に基づいた回答を引き出したい場面で力を発揮します。このスキルは、その特性を活かしきるための問いかけ方とノートブック設計を整理します。",
    description:
      "10 本の PDF や数十件の議事録など、複数資料の塊から論点に沿った答えを引き出すための観点をまとめています。資料の選び方、質問粒度、出典付き回答の取り扱い、答えが資料外だった場合の処理まで、運用に落とすための要素を含みます。",
    installCommand: "npx skills add https://github.com/pleaseprompto/notebooklm-skill",
    githubUrl: "https://github.com/pleaseprompto/notebooklm-skill",
    localHref: "/agent-skills/pleaseprompto/notebooklm-skill",
    categorySlug: "featured",
    categoryTitle: "おすすめスキル",
    mockup: "notebook",
    sections: [
      {
        id: "typical-uses",
        title: "向いている使い方",
        bullets: [
          "社内マニュアルを根拠とした FAQ 回答を引き出す",
          "過去の議事録を集約し、意思決定の経緯を整理する",
          "読み込み済み論文から要点だけを抽出し、引用付きで返す",
          "複数資料間の差分・矛盾を洗い出す",
          "顧客からの問い合わせに、社内ドキュメントだけを根拠に答える",
        ],
      },
      {
        id: "notebook-design",
        title: "ノートブック設計",
        paragraphs: [
          "1 つのノートブックに資料を詰め込みすぎると、回答の精度が落ちやすくなります。テーマ単位（例: 製品仕様 / 営業 FAQ / 法務）でノートブックを分け、それぞれに 5〜30 件程度を目安にすると扱いやすい粒度です。",
          "PDF はスキャン画像のままだと精度が落ちるため、OCR 済みのテキスト PDF に揃えてから入れるのが安全です。",
        ],
      },
      {
        id: "prompt-tips",
        title: "問いかけのコツ",
        table: {
          headers: ["NG な聞き方", "改善した聞き方"],
          rows: [
            ["この件についてどう思う？", "資料 A の 3 章を根拠に、現状の課題を 3 行で要約して"],
            ["まとめて", "決定事項・宿題・未決事項に分けて、それぞれ箇条書きで"],
            ["参考になる箇所は？", "出典（資料名・セクション）付きで、関連する 3 箇所を列挙して"],
          ],
        },
        bullets: [
          "対象資料を必ず指定する",
          "観点（誰のため・何のため）を一文で添える",
          "出力形式（箇条書き / 表 / 段落）を指定する",
          "出典の粒度（資料名のみ / セクションまで）を指定する",
        ],
      },
      {
        id: "guardrails",
        title: "誤回答を防ぐ運用",
        bullets: [
          "資料に書かれていない場合は『資料内に該当情報なし』と明示させる",
          "推測を含む回答は『推測』『不確実』と前置きしてもらう",
          "更新頻度が高い資料は最終更新日を必ず添える",
          "外部公開する回答は、人の目で出典確認したものだけにする",
        ],
      },
    ],
  },
  {
    author: "vercel",
    skill: "react-best-practices",
    title: "React ベストプラクティス",
    authorLabel: "Vercel",
    summary:
      "React と Next.js 前提のコードレビュー観点や実装判断を、実務で再利用しやすい形に整理したスキルです。",
    intro:
      "React や Next.js の実装で迷うのは、機能ではなく『判断』のほうです。state はどこに置くか、データ取得は Server か Client か、コンポーネントはどこで分けるか──このスキルは、そうした判断軸を事前に共有して『迷わず手を動かす』状態に揃えます。",
    description:
      "コンポーネント分割、データ取得、状態設計、レンダリング戦略、キャッシュ・再検証、エラーバウンダリ、テスト戦略まで、現場で頻発する論点を網羅しています。レビュー観点としても利用でき、PR レビューの基準を揃える効果があります。",
    installCommand: "npx skills add https://github.com/vercel/skills --skill react-best-practices",
    githubUrl: "https://github.com/vercel/skills",
    localHref: "/agent-skills/vercel/react-best-practices",
    categorySlug: "featured",
    categoryTitle: "おすすめスキル",
    mockup: "react",
    sections: [
      {
        id: "component-design",
        title: "コンポーネント設計",
        bullets: [
          "状態は使う場所の直近に寄せる（不要な prop drilling を避けるだけで複雑化しない）",
          "表示ロジックと副作用を混ぜない（読み込み・送信は Hook やサーバー側に逃がす）",
          "境界を持たない巨大コンポーネント（画面 1 ファイル）を作らない",
          "props と戻り値の型を先に固めてから中身を書く",
          "再利用しないものを早すぎる段階で『汎用化』しない",
        ],
      },
      {
        id: "server-vs-client",
        title: "Server / Client の使い分け",
        table: {
          headers: ["処理", "推奨", "理由"],
          rows: [
            ["DB やファイル読み込み", "Server Component", "バンドルに含めず、認証情報も漏れない"],
            ["フォーム送信のロジック", "Server Action", "クライアントの依存を持ち込まずに完結"],
            ["スクロール・入力監視", "Client Component", "ブラウザ API が必要"],
            ["3rd party のライブ更新", "Client Component", "WebSocket / Streaming はクライアントで購読"],
          ],
        },
        paragraphs: [
          "迷ったら Server Component から始め、ブラウザ API が必要になった部分だけを Client Component に切り出すのが安全な定石です。",
        ],
      },
      {
        id: "data-fetching",
        title: "データ取得",
        codeExamples: [
          {
            title: "Server Component での取得（Next.js App Router）",
            language: "tsx",
            code: `import { db } from "@/lib/db";\n\nexport default async function OrdersPage() {\n  const orders = await db.order.findMany({\n    where: { status: "open" },\n    orderBy: { createdAt: "desc" },\n    take: 50,\n  });\n\n  return (\n    <ul>\n      {orders.map((order) => (\n        <li key={order.id}>{order.code}</li>\n      ))}\n    </ul>\n  );\n}`,
          },
        ],
        bullets: [
          "ユーザー操作がない取得は Server Component に寄せる",
          "再検証のしくみ（revalidatePath / revalidateTag / on-demand ISR）を最初に決める",
          "クライアント側で頻繁に取得し直すデータは React Query / SWR を検討する",
          "失敗時はリトライ戦略・タイムアウトをセットで設計する",
        ],
      },
      {
        id: "performance",
        title: "パフォーマンス",
        bullets: [
          "不要な再レンダリングを作らない（依存配列と props 参照の見直し）",
          "大きなリストは仮想化または分割表示で耐久性を持たせる",
          "画像と動画は next/image と next/video を前提に扱う",
          "計測なしに最適化しない（実機の Profiler で確認する）",
          "クライアントコンポーネントへ渡す props はシリアライズ可能な値だけに限定する",
        ],
      },
      {
        id: "review-checklist",
        title: "PR レビューチェック",
        bullets: [
          "型がフロントとバックで重複していないか（共通の型定義で一元化）",
          "Server Component に大きなクライアント依存が混入していないか",
          "Suspense / Error Boundary の境界が説明できる位置にあるか",
          "状態の出処が複数経路にまたがっていないか",
          "テスト（ユニット・統合・E2E）の最低 1 つが付いているか",
        ],
      },
    ],
  },
  {
    author: "michalparkola",
    skill: "youtube-transcript",
    title: "YouTube 文字起こし取得",
    authorLabel: "michalparkola",
    summary:
      "YouTube のURLから字幕や文字起こしを取り出し、要約や引用、リサーチに再利用するためのスキルです。",
    intro:
      "動画は情報密度が高いものの、検索・引用・要約には扱いづらいメディアです。このスキルは URL を渡すだけで字幕を取り出し、段落化・整形までを一気に進めます。長尺の動画を『テキスト主体のワークフロー』に乗せる下ごしらえとして使えます。",
    description:
      "公開字幕の優先取得、自動生成字幕へのフォールバック、章立てに沿った段落化、固有名詞の整形までを扱います。要約・抜粋・引用集・全文検索インデックスといった後工程との接続を意識した出力に整えます。",
    installCommand: "npx skills add https://github.com/michalparkola/youtube-transcript",
    githubUrl: "https://github.com/michalparkola/youtube-transcript",
    localHref: "/agent-skills/michalparkola/youtube-transcript",
    categorySlug: "featured",
    categoryTitle: "おすすめスキル",
    mockup: "youtube",
    sections: [
      {
        id: "use-cases",
        title: "向いている用途",
        bullets: [
          "1 時間級の対談・基調講演を 5 分で要点把握する",
          "技術カンファレンス動画から実装に使えそうな箇所を抽出する",
          "競合プロダクトのデモ動画から機能仕様を整理する",
          "自社プロダクトの解説動画を SEO 用テキストとして再利用する",
          "学習動画の章立てを目次として再構成する",
        ],
      },
      {
        id: "workflow",
        title: "使い方の流れ",
        paragraphs: [
          "対象動画の URL を渡し、字幕の有無を確認した上で取得します。公式字幕がある場合は精度が高いため最優先で利用します。なければ自動生成字幕を取り、固有名詞や数値の取り違えを後段で補正します。",
        ],
        bullets: [
          "対象動画の URL を渡す",
          "公開字幕 → 自動生成字幕の順にフォールバックする",
          "得た文字起こしを段落化・整形する",
          "要約・抜粋・引用・全文検索のいずれかへ流し込む",
        ],
      },
      {
        id: "post-processing",
        title: "整形のコツ",
        bullets: [
          "発言者が複数いる動画は、話者ラベルを残したまま段落を切る",
          "笑い声・相槌（『はい』『えっと』）は除去する",
          "数値・固有名詞は元動画と突き合わせて補正する",
          "引用するときは元動画 URL とタイムスタンプを必ず保持する",
        ],
      },
      {
        id: "caveats",
        title: "扱う際の注意",
        bullets: [
          "自動生成字幕は固有名詞を取り違えやすい",
          "長尺動画はセクション分割してから扱うと破綻しにくい",
          "著作権上、公開引用には適切な範囲・出典付与が必要",
          "字幕が公式に無効化されている動画では取得自体ができない",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "docx",
    title: "Word 文書",
    authorLabel: "Anthropic",
    summary:
      "コメント、変更履歴、書式を保ちながら Word 文書を作成・編集・確認するためのスキルです。",
    intro:
      "Word ファイルは『見た目』『書式』『変更履歴』『コメント』が一体の成果物です。値だけ書き換えると体裁が崩れ、社外に出せる状態ではなくなります。このスキルは、書式とトラックチェンジを保ったまま安全に編集するための判断軸と道具を整理します。",
    description:
      "新規作成・既存編集・変更履歴対応・テキスト抽出の 4 場面に絞り、どこで Pandoc を使うか、どこで python-docx / docx ライブラリを使うか、どこで XML 直接編集が必要かを切り分けます。社外提出物として通用する仕上がりに揃えるためのチェック項目も含みます。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill docx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/docx",
    categorySlug: "document",
    categoryTitle: "ドキュメントスキル",
    mockup: "doc",
    sections: [
      {
        id: "quick-reference",
        title: "やりたいことから引く",
        table: {
          headers: ["やりたいこと", "おすすめの進め方"],
          rows: [
            ["本文をざっと確認したい", "Pandoc / MarkItDown でテキスト抽出して構造を把握する"],
            ["新規文書を作りたい", "テンプレートがあれば複製、なければ docx ライブラリで生成する"],
            ["既存文書を直したい", "原本を複製してから段落単位で差分を入れる"],
            ["変更履歴を確定したい", "LibreOffice / Word 系ツールで承認後に再出力する"],
            ["差し込み印刷したい", "テンプレート + データ CSV を組み合わせて一括生成"],
          ],
        },
      },
      {
        id: "new-documents",
        title: "新規作成",
        paragraphs: [
          "いきなり本文から書くと、見出しの抜け・余白の崩れが起きやすくなります。先に『タイトル / 見出し階層 / 表 / 注意書き』の骨組みを入れ、後から本文を流し込む順序が安定します。",
        ],
        codeExamples: [
          {
            title: "Node.js で骨組みを作る例",
            language: "ts",
            code: `import { Document, Packer, Paragraph, HeadingLevel } from "docx";\nimport { writeFileSync } from "node:fs";\n\nconst doc = new Document({\n  sections: [\n    {\n      children: [\n        new Paragraph({ text: "四半期レビュー報告書", heading: HeadingLevel.TITLE }),\n        new Paragraph({ text: "1. 背景", heading: HeadingLevel.HEADING_1 }),\n        new Paragraph("目的と前提条件をここに記載"),\n        new Paragraph({ text: "2. 取り組み", heading: HeadingLevel.HEADING_1 }),\n      ],\n    },\n  ],\n});\n\nconst buffer = await Packer.toBuffer(doc);\nwriteFileSync("quarterly-review.docx", buffer);`,
          },
        ],
      },
      {
        id: "editing",
        title: "既存文書の編集",
        bullets: [
          "原本は触らず、複製ファイルに対して差分を入れる",
          "全文を Markdown / プレーンテキストに変換して、修正箇所を先に特定する",
          "表・脚注・段組みは本文と別に確認ポイントを持つ",
          "最後は Word / Word Online で人の目でも確認する",
        ],
        codeExamples: [
          {
            title: "確認用に Markdown へ変換する例",
            language: "bash",
            code: "pandoc --track-changes=all proposal.docx -o proposal.md",
          },
        ],
      },
      {
        id: "track-changes",
        title: "変更履歴の扱い",
        paragraphs: [
          "変更履歴付きの文書を機械的に編集すると、承認状態がリセットされる事故が起きやすいです。承認 / 却下を確定させるか、編集を新規コメントとして付与するかを最初に決めておきます。",
        ],
      },
      {
        id: "xml-reference",
        title: "XML 直接編集が必要な場合",
        paragraphs: [
          "高度な差し替え（独自スタイル適用、特殊な目次構造）が必要なときだけ、docx を unzip して XML を直接編集します。styles.xml と document.xml の整合を壊すと全体の見た目が崩れるため、置換だけで終わらせず、必ず Word でレンダリング確認します。",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "pdf",
    title: "PDF",
    authorLabel: "Anthropic",
    summary:
      "抽出、生成、結合、フォーム入力まで、PDF 業務をまとめて扱うためのスキルです。",
    intro:
      "PDF は表示の再現性が高い反面、編集と抽出は方法が目的ごとに分かれます。このスキルは『読む / 抜き出す / まとめる / 書き込む』の 4 軸で道具を選び、請求書・契約書・帳票のような実務 PDF を安全に扱えるようにします。",
    description:
      "テキスト抽出、表抽出、OCR、結合・分割、フォーム入力、署名検証など、PDF 業務でよく登場するタスクをカバーします。バッチ処理時にありがちな『1 件は通るが 100 件目で壊れる』を防ぐ運用上の注意も含みます。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill pdf",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/pdf",
    categorySlug: "document",
    categoryTitle: "ドキュメントスキル",
    mockup: "pdf",
    sections: [
      {
        id: "tool-matrix",
        title: "用途別の道具選び",
        table: {
          headers: ["用途", "候補", "向いている作業"],
          rows: [
            ["基本操作", "pypdf", "結合 / 分割 / テキスト抽出 / メタデータ確認"],
            ["表抽出", "tabula / camelot", "請求書や帳票から表を取り出す"],
            ["OCR", "ocrmypdf", "スキャン PDF を検索可能にする"],
            ["CLI 補助", "pdftotext / pdfinfo", "素早い確認やバッチ処理"],
            ["フォーム入力", "PyPDF2 / pdfrw", "フォーム付き PDF への定型値書き込み"],
          ],
        },
      },
      {
        id: "common-tasks",
        title: "よくある作業",
        bullets: [
          "複数 PDF を結合して配布用の 1 冊にまとめる",
          "ページ単位で分割して案件別に保存する",
          "フォーム付き PDF に定型値を書き込む",
          "表や本文を抽出して CSV / Markdown に変換する",
          "スキャン PDF を OCR してテキスト検索可能にする",
        ],
        codeExamples: [
          {
            title: "複数ファイルを結合する例",
            language: "py",
            code: `from pypdf import PdfReader, PdfWriter\n\nwriter = PdfWriter()\nfor filename in ["cover.pdf", "body.pdf", "appendix.pdf"]:\n    reader = PdfReader(filename)\n    for page in reader.pages:\n        writer.add_page(page)\n\nwith open("merged.pdf", "wb") as fh:\n    writer.write(fh)`,
          },
        ],
      },
      {
        id: "batch-processing",
        title: "バッチ処理の落とし穴",
        bullets: [
          "1 件のサンプルで通っても、文字化け・回転・暗号化された PDF で詰まる",
          "OCR は処理時間が長いため、並列度と進捗ログを設計する",
          "失敗 PDF を別フォルダに退避し、後で原因別に対応する",
          "ファイル名と内容のひも付けを必ず残す（ハッシュやメタデータ）",
        ],
      },
      {
        id: "next-steps",
        title: "実務での次の一手",
        paragraphs: [
          "PDF 処理で一番事故が起きるのは、抽出後の欠損や文字化けを見逃すケースです。自動化するほど、最終工程に『人がサンプル 5 件を目視する』ステップを残してください。フォーム入力や大量処理は、まず 1 件正しく流れるかを確認してからバッチ化するのが安全です。",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "pptx",
    title: "PowerPoint プレゼン",
    authorLabel: "Anthropic",
    summary:
      "プレゼン資料の作成、編集、レイアウト調整、スピーカーノート運用まで支援するスキルです。",
    intro:
      "PowerPoint は『話すための資料』ですが、AI が出力するスライドは情報を全部スライドに乗せた『読む資料』になりやすいです。このスキルは、レイアウト・配色・1 枚 1 メッセージといった『見せる資料』の原則を保ちつつ、編集と新規作成の両方を支援します。",
    description:
      "テンプレート観察、構成設計、各スライドのレイアウト判断、レビュー観点までを扱います。企画提案・社内報告・営業資料など、用途ごとに密度のあるスライドを作るための判断軸を整理しています。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill pptx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/pptx",
    categorySlug: "document",
    categoryTitle: "ドキュメントスキル",
    mockup: "pptx",
    sections: [
      {
        id: "quick-reference",
        title: "やりたいことから引く",
        table: {
          headers: ["やりたいこと", "おすすめの進め方"],
          rows: [
            ["資料の中身を把握", "全スライドをサムネイル化して全体の流れを掴む"],
            ["既存資料を直す", "テンプレート規則を観察してから段階的に編集"],
            ["ゼロから作る", "ストーリーとスライド役割を定義してから実装"],
            ["品質確認", "文字量 / 揃え / 見出し階層 / 注釈漏れを最終チェック"],
            ["スピーカー支援", "話す内容はスピーカーノートへ逃がす"],
          ],
        },
      },
      {
        id: "reading",
        title: "資料を読み解く",
        paragraphs: [
          "PowerPoint は本文テキストだけ読むと構造を誤解しがちです。先に全スライドのレイアウトをサムネイル化して把握し、次に主要メッセージを追う順序が安定します。",
        ],
        codeExamples: [
          {
            title: "サムネイル化して全体を見る例",
            language: "bash",
            code: "python scripts/thumbnail.py presentation.pptx --out thumbnails/",
          },
        ],
      },
      {
        id: "story-design",
        title: "ストーリー設計",
        paragraphs: [
          "1 スライドに『結論 / 根拠 / 比較 / 次のアクション』のどれを担わせるかを決めてから作ると、無駄なスライドが減ります。最初に結論を見せてから根拠で支える流れが、社内・社外を問わず通りやすい構成です。",
        ],
        bullets: [
          "1 枚 1 メッセージの原則を守る",
          "情報量が多いページは分割した方が伝わるかを先に検討する",
          "話す内容はスピーカーノートに逃がし、スライド面は軽く保つ",
          "結論スライドと重要図版を先に固める",
        ],
      },
      {
        id: "visual-design",
        title: "見せ方",
        bullets: [
          "白背景 + 箇条書きだけにせず、強調色を 1 色だけ用意する",
          "見出し / 本文 / 注釈の 3 階層でフォントサイズを揃える",
          "図表には番号と出典を必ず入れる",
          "プロジェクター投影でも読める明度差を確保する",
        ],
      },
      {
        id: "qa",
        title: "提出前チェック",
        bullets: [
          "スライドごとの主メッセージが 1 文で言えるか",
          "図表や数値の出典が明記されているか",
          "フォントサイズや余白のばらつきがないか",
          "プロジェクター表示でも読める配色になっているか",
          "アニメーションが必要最小限に絞られているか",
        ],
      },
    ],
  },
  {
    author: "smerchek",
    skill: "markdown-to-epub",
    title: "Markdown から EPUB",
    authorLabel: "smerchek",
    summary:
      "Markdown の原稿や会話ログを、配布しやすい EPUB 形式へ変換するためのスキルです。",
    intro:
      "長文の Markdown は情報整理に強い反面、配布物としては読みにくいことがあります。EPUB 化することで、スマホ・タブレット・E-Reader で章立て付き・本のような体験で読める成果物に整えられます。このスキルは、その変換と前処理をまとめて扱います。",
    description:
      "見出し階層を章立てに対応付け、画像・脚注・コードブロックを EPUB の制約に合わせて整える進め方を整理します。調査レポート、ブログ連載、長文メモ、対話ログなどを 1 冊の電子書籍にまとめたい場面に向きます。",
    installCommand:
      "npx skills add https://github.com/smerchek/claude-epub-skill --skill markdown-to-epub-converter",
    githubUrl: "https://github.com/smerchek/claude-epub-skill",
    localHref: "/agent-skills/smerchek/markdown-to-epub",
    categorySlug: "document",
    categoryTitle: "ドキュメントスキル",
    mockup: "epub",
    sections: [
      {
        id: "input-formats",
        title: "扱える入力",
        bullets: [
          "ローカルの .md ファイル（単独・複数）",
          "貼り付けた Markdown テキスト",
          "チャットの要約や対話ログを Markdown に整えたもの",
          "Notion / Obsidian からエクスポートした Markdown",
        ],
      },
      {
        id: "structure",
        title: "章立ての作り方",
        paragraphs: [
          "H1 を章、H2 を節として扱うと、電子書籍として自然な目次構造を作りやすくなります。複数 .md ファイルから生成する場合は、ファイル名に番号プレフィックス（01-, 02-）を付けて並び順を固定するのが安全です。",
        ],
        codeExamples: [
          {
            title: "入力 Markdown の例",
            language: "md",
            code: `# 事業戦略メモ\n\n## 1. 市場環境\n市場の前提条件を整理する。\n\n## 2. 仮説\n- 仮説A\n- 仮説B\n\n## 3. 検証計画\n各仮説に対する検証手順。`,
          },
        ],
      },
      {
        id: "media-handling",
        title: "画像・コードブロック・脚注",
        bullets: [
          "画像はパスを相対指定し、生成時に EPUB 内へバンドルする",
          "コードブロックは横スクロール前提でフォント幅を狭めに設定",
          "脚注は本文末ではなく章末・巻末にまとめる方が読み心地が良い",
          "外部リンクが多い場合は『参考リンク集』として巻末に集約する",
        ],
      },
      {
        id: "metadata",
        title: "メタ情報の埋め方",
        bullets: [
          "タイトル・著者名・説明文・言語コードを必ず指定する",
          "カバー画像を入れると一覧で見つけやすくなる",
          "ISBN / 発行日は配布用途に応じて記載する",
          "更新版を出すときは『版数 / 更新日』をメタ情報と本文冒頭に明記する",
        ],
      },
      {
        id: "quality",
        title: "出力品質を上げる",
        bullets: [
          "章ごとの長さを大きく偏らせない（短すぎ・長すぎを避ける）",
          "強い装飾より読みやすさを優先する",
          "端末ごとの表示差を前提に、複数デバイスで実機確認する",
          "テーマ（ライト / ダーク）切り替えで色が破綻しないか確認する",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "xlsx",
    title: "XLSX 表計算",
    authorLabel: "Anthropic",
    summary:
      "表計算ファイルを作成・編集・分析しながら、数式や書式を壊さず扱うためのスキルです。",
    intro:
      "Excel ファイルは『値』と『数式』の両方が成果物です。値だけ更新して数式を壊すと、現場の予実管理や帳票が動かなくなります。このスキルは、再計算可能な状態を保ちながら、テンプレートの色・列幅・書式まで踏襲する更新手順を整理します。",
    description:
      "予実管理、売上分析、テンプレート更新といった実務シーンを想定し、入力値と計算値の分離・参照切れの検出・テンプレート踏襲のルールをまとめています。配布用 PDF 化や画像化を最後の工程に置き、原本 xlsx を正とする運用設計に寄せます。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill xlsx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/xlsx",
    categorySlug: "document",
    categoryTitle: "ドキュメントスキル",
    mockup: "xlsx",
    sections: [
      {
        id: "requirements",
        title: "重要な前提",
        bullets: [
          "ハードコードではなく数式で再計算できる状態を保つ",
          "テンプレート更新時は配色・フォント・列幅を踏襲する",
          "数式エラー（#REF! / #DIV/0! / #NAME?）を残したまま納品しない",
          "入力セル / 計算セル / 参照セルを色や枠線で見分けやすくする",
          "シート名を変更したら、参照しているセルすべてを確認する",
        ],
      },
      {
        id: "workflow",
        title: "実務フロー",
        table: {
          headers: ["段階", "確認すること"],
          rows: [
            ["読み込み", "シート構成・主要数式列・色分けルールを把握"],
            ["編集", "入力値だけ変えるのか式も追加するのかを先に決める"],
            ["検証", "再計算 / 参照切れ / 合計の整合性を確認"],
            ["提出", "主要シートを目視確認、値と見た目の両方をチェック"],
          ],
        },
      },
      {
        id: "formula-design",
        title: "数式設計",
        codeExamples: [
          {
            title: "数式を使う列設計のイメージ",
            language: "text",
            code: `売上 = 単価 * 数量\n粗利 = 売上 - 原価\n粗利率 = IFERROR(粗利 / 売上, 0)\n累計売上 = SUMIF(月, "<=" & 当月, 売上)`,
          },
        ],
        bullets: [
          "同じ列内で数式パターンが途中から変わっていないか",
          "ゼロ除算・空セル参照は IFERROR / IFNA で握りつぶさず、明示する",
          "シート間参照は名前付き範囲を使い、シート名変更に強くする",
          "集計表と明細の合計が一致しているか必ず確認する",
        ],
      },
      {
        id: "best-practices",
        title: "ベストプラクティス",
        paragraphs: [
          "ファイナンス系や予実管理のシートでは、入力値（青字）・計算値（黒字）・参照値（緑字）のように色を分けると、引き継ぎコストが大きく下がります。配布用の PDF 化や画像化は最後の工程にし、原本 xlsx を正とした運用に寄せるのが安全です。",
        ],
      },
      {
        id: "automation",
        title: "自動化のコツ",
        bullets: [
          "openpyxl / xlsxwriter は数式を文字列として書き込む点に注意",
          "条件付き書式やピボットは Excel ネイティブの機能を温存する",
          "大量シート更新は 1 件のサンプルで通してからバッチ化する",
          "更新ログ（誰が・いつ・何を）を別シートに残すと監査が楽",
        ],
      },
    ],
  },
  {
    author: "vercel",
    skill: "agent-browser",
    title: "エージェントブラウザ",
    authorLabel: "Vercel",
    summary:
      "ページ遷移、フォーム入力、スクリーンショット取得など、ブラウザ作業をエージェントから自動化するためのスキルです。",
    intro:
      "ログイン・フォーム入力・確認画面の遷移など、毎回似た操作を手で繰り返すと時間と精度の両方を消耗します。このスキルは、そうしたブラウザ作業を自然言語の指示から自動で進め、UI 検証・リグレッション確認・定型操作の自動化に使えるようにします。",
    description:
      "操作対象の URL、手順、成功条件を言語化して与え、要素特定と待ち時間を安定させることが要点です。リリース前後のスクリーンショット比較、リード収集、定期的なヘルスチェックといった用途で使えます。",
    installCommand: "npx skills add https://github.com/vercel/skills --skill agent-browser",
    githubUrl: "https://github.com/vercel/skills",
    localHref: "/agent-skills/vercel/agent-browser",
    categorySlug: "browser-automation",
    categoryTitle: "ブラウザ自動化スキル",
    mockup: "agent-browser",
    sections: [
      {
        id: "use-cases",
        title: "主な用途",
        bullets: [
          "ログイン後の画面表示確認を自動化する",
          "フォーム入力から送信までを一連のフローで検証する",
          "リリース前後のスクリーンショットを比較する",
          "特定 URL の表示パフォーマンスを定点観測する",
          "管理画面の定期メンテ作業（バックアップ取得など）を代行する",
        ],
      },
      {
        id: "stable-selectors",
        title: "壊れにくい指示の書き方",
        paragraphs: [
          "ブラウザ自動化が壊れる原因の大半は『要素特定』と『待ち時間』です。要素はテキスト・ロール・ラベルなど安定した手がかりで指定し、CSS セレクタや XPath の位置依存指定は最小限に抑えます。",
        ],
        bullets: [
          "ボタンは『ログインボタン』『登録ボタン』のように表示テキストで指定",
          "入力欄は『メールアドレスのテキストボックス』のようにラベル + ロールで指定",
          "成功条件は『ダッシュボードという見出しが見える』のような目視可能な事実で書く",
          "明示待ちを使い、固定の sleep を避ける",
        ],
      },
      {
        id: "common-flows",
        title: "代表的なフロー例",
        codeExamples: [
          {
            title: "シナリオ記述の雰囲気",
            language: "text",
            code: `1. https://example.com/login を開く\n2. メールアドレス欄に test@example.com を入力\n3. パスワード欄に ******** を入力\n4. ログインボタンをクリック\n5. ダッシュボードという見出しが見えるまで待つ\n6. 表示後のフルページスクリーンショットを保存`,
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "つまずきやすい点",
        bullets: [
          "ログイン直後の遷移タイミングでタイムアウトが発生する",
          "iframe 内の操作がスコープから外れて動かない",
          "テスト環境と本番で要素構造が異なる",
          "CAPTCHA / 2FA など人力前提の画面では自動化を断念する",
          "アクセス制限のある社内 IP では VPN / 接続元の調整が必要",
        ],
      },
    ],
  },
  {
    author: "browser-use",
    skill: "browser-use",
    title: "ブラウザ操作支援",
    authorLabel: "browser-use",
    summary:
      "サイト操作、フォーム入力、画面情報の取得などを横断的に扱える汎用ブラウザ自動化スキルです。",
    intro:
      "管理画面の定型入力、社内ツールの操作、リサーチ目的の情報取得など、特定サービスに依存しない『日常のブラウザ作業』を自動化したい場面に向いています。ガチガチのテストコードを書かず、自然言語で指示しながら段階的に進められる柔軟さが特長です。",
    description:
      "テスト用ではなく『日々の業務』向けに設計されているため、汎用性と取り回しの良さを重視します。スクリプト化しづらい単発作業や、複数サイトをまたぐ調査作業の自動化に適しています。",
    installCommand: "npx skills add https://github.com/browser-use/browser-use",
    githubUrl: "https://github.com/browser-use/browser-use",
    localHref: "/agent-skills/browser-use/browser-use",
    categorySlug: "browser-automation",
    categoryTitle: "ブラウザ自動化スキル",
    mockup: "browser-use",
    sections: [
      {
        id: "tasks",
        title: "扱える作業",
        bullets: [
          "管理画面への定型入力と確認",
          "特定ページからの情報抽出（金額・日付・ステータスなど）",
          "複数タブをまたいだ作業の橋渡し",
          "見つけたい要素まで段階的に探索する",
          "ダウンロード・アップロードを含む一連の作業",
        ],
      },
      {
        id: "design-considerations",
        title: "設計上の配慮",
        paragraphs: [
          "外部サービスを操作する場合は、利用規約・レート制限・アクセスログの扱いを必ず確認します。失敗時の副作用（誤送信・多重登録）を減らすため、本番実行の前にドライランを挟むのが安全です。",
        ],
        bullets: [
          "操作ログを残し、誰が何をしたか追えるようにする",
          "失敗時にリトライするか中断するかを操作ごとに決める",
          "破壊的操作（削除・送信）は確認ステップを挟む",
          "Cookie / セッションの永続化方針を決める",
        ],
      },
      {
        id: "comparison",
        title: "Playwright との使い分け",
        table: {
          headers: ["観点", "browser-use", "Playwright"],
          rows: [
            ["主用途", "業務自動化・調査", "テスト・継続的検証"],
            ["指示形式", "自然言語が中心", "コードが中心"],
            ["柔軟性", "高い（探索的に進められる）", "決め打ちのフロー向き"],
            ["再現性", "中（指示の解釈差が出る）", "高（コードで固定）"],
          ],
        },
      },
    ],
  },
  {
    author: "microsoft",
    skill: "playwright",
    title: "Playwright 自動化",
    authorLabel: "Microsoft",
    summary:
      "テスト、操作フロー検証、スクリーンショット取得に向いた安定したブラウザ自動化のためのスキルです。",
    intro:
      "Playwright は『毎回同じ操作を、同じ条件で確認する』のが得意なテスト・自動化フレームワークです。リリース前のリグレッション、購入導線の継続的確認、ビジュアル回帰テストなど、再現性が要求される場面で力を発揮します。",
    description:
      "Chromium / WebKit / Firefox を同一 API で扱える強み、自動待機の仕組み、トレース / 動画によるデバッグ性の高さを活かした書き方を整理します。CI 組み込み、フレーキー対策、並列実行の設計までを含みます。",
    installCommand: "npx skills add https://github.com/microsoft/playwright",
    githubUrl: "https://github.com/microsoft/playwright",
    localHref: "/agent-skills/microsoft/playwright",
    categorySlug: "browser-automation",
    categoryTitle: "ブラウザ自動化スキル",
    mockup: "playwright",
    sections: [
      {
        id: "strengths",
        title: "得意分野",
        bullets: [
          "複数ブラウザ（Chromium / WebKit / Firefox）を同一 API で扱える",
          "ネットワーク待ちや可視要素の自動待機が強い",
          "ヘッドレス / ヘッドフルの切り替えが容易",
          "トレース・動画・スクリーンショットを含むデバッグ情報を残しやすい",
          "API レベルのモック・差し込みが容易",
        ],
      },
      {
        id: "locator-strategy",
        title: "ロケータ戦略",
        paragraphs: [
          "テキスト・ロール・ラベルベースのロケータを優先し、CSS や位置依存の指定は最小限に抑えます。これだけで E2E テストの破損率が大きく下がります。",
        ],
        codeExamples: [
          {
            title: "ロケータの書き方（TypeScript）",
            language: "ts",
            code: `import { test, expect } from "@playwright/test";\n\ntest("ログイン導線が動く", async ({ page }) => {\n  await page.goto("/login");\n  await page.getByLabel("メールアドレス").fill("user@example.com");\n  await page.getByLabel("パスワード").fill("********");\n  await page.getByRole("button", { name: "ログイン" }).click();\n  await expect(page.getByRole("heading", { name: "ダッシュボード" })).toBeVisible();\n});`,
          },
        ],
      },
      {
        id: "ci",
        title: "CI 運用のコツ",
        bullets: [
          "失敗時のみトレースと動画を保存する（成功時は捨ててストレージを節約）",
          "並列度を上げすぎず、安定性を優先する",
          "環境依存の秘密値は環境変数で注入する",
          "フレーキーテストは即座に隔離（test.fixme）して原因を別タスクで追う",
          "プレビュー環境ごとに base URL を切り替える",
        ],
      },
      {
        id: "anti-patterns",
        title: "避けたいパターン",
        bullets: [
          "page.waitForTimeout() を多用する（明示待ちに置き換える）",
          "data-testid を全要素に振って実装と密結合にする（必要箇所のみ）",
          "テストごとにユーザー作成・削除のコストが膨らむ（fixture でセットアップ）",
          "成功した動画 / トレースを全件保存しストレージを圧迫する",
        ],
      },
    ],
  },
  {
    author: "softaworks",
    skill: "database-schema-designer",
    title: "データベース設計",
    authorLabel: "softaworks",
    summary:
      "SQL と NoSQL の両方で、実運用を意識したスキーマ設計を進めるためのスキルです。",
    intro:
      "新規プロジェクトで一番大きな技術的負債が生まれるのは、最初のスキーマ設計です。アクセスパターンを考えずに正規化だけして満足したり、逆に early optimization で過剰に非正規化したりと、両方向に偏りやすい領域です。このスキルは、業務要件から逆算した設計判断を支援します。",
    description:
      "主要エンティティの抽出、関係（1:N / N:N）の決定、正規化と非正規化の判断、インデックス・トランザクション・整合性レベルまでを段階的に詰めます。SQL / NoSQL の選定基準、マイグレーション戦略も含めて扱います。",
    installCommand: "npx skills add https://github.com/softaworks/database-schema-designer",
    githubUrl: "https://github.com/softaworks/database-schema-designer",
    localHref: "/agent-skills/softaworks/database-schema-designer",
    categorySlug: "database",
    categoryTitle: "データベーススキル",
    mockup: "db-schema",
    sections: [
      {
        id: "intake",
        title: "要件ヒアリング",
        bullets: [
          "扱うエンティティとそれぞれのライフサイクル（生成 / 更新 / 削除頻度）",
          "主要な参照・更新パターンと頻度",
          "将来の拡張で変わりうる領域の想定",
          "整合性と可用性のどちらを優先するか",
          "1 リクエストでの想定 SQL 本数（N+1 になりやすい箇所）",
        ],
      },
      {
        id: "modeling",
        title: "モデリングの段取り",
        paragraphs: [
          "完成形を最初から描かず、ユースケースの上位 3 つに対してアクセスパターンを書き出すところから始めます。読み書き頻度の高い経路に対して、インデックスや非正規化の判断を後半で入れるのが現実的です。",
        ],
      },
      {
        id: "sql-vs-nosql",
        title: "SQL / NoSQL 判断",
        table: {
          headers: ["特徴", "SQL（PostgreSQL / MySQL）", "NoSQL（DynamoDB / Firestore）"],
          rows: [
            ["関連の多さ", "JOIN が強い", "事前に集約しておく必要"],
            ["スキーマ", "厳密", "柔軟（ただし設計責任が増す）"],
            ["スケール", "垂直 + リードレプリカ中心", "水平に強い"],
            ["強整合", "デフォルト強整合", "結果整合が中心"],
            ["集計", "得意", "苦手（別ストアへ転送が定番）"],
          ],
        },
      },
      {
        id: "review",
        title: "最終チェック",
        bullets: [
          "排他制御やトランザクション境界が意図通りか",
          "N+1 を誘発するアクセスパターンがないか",
          "論理削除・監査ログの扱いが決まっているか",
          "マイグレーション戦略が現場で運用可能か（ロック時間・ロールバック）",
          "RLS / 行レベル権限の扱いが要件と一致しているか",
        ],
      },
    ],
  },
  {
    author: "planetscale",
    skill: "mysql",
    title: "MySQL",
    authorLabel: "PlanetScale",
    summary:
      "MySQL / InnoDB のスキーマ変更、索引設計、トランザクション、クエリ最適化を支援するスキルです。",
    intro:
      "MySQL は導入のハードルが低い反面、運用に入ると『重い JOIN』『ロック競合』『binlog の膨張』といった独特の落とし穴が次々に現れます。このスキルは、それらを早めに検知し、対処の選択肢を持っておくための実務ガイドです。",
    description:
      "EXPLAIN の読み方、複合索引の順序、デッドロック分析、オンライン DDL の運用、レプリカ追従遅延の前提など、MySQL 特有の運用課題をまとめて扱います。",
    installCommand: "npx skills add https://github.com/planetscale/skills --skill mysql",
    githubUrl: "https://github.com/planetscale/skills",
    localHref: "/agent-skills/planetscale/mysql",
    categorySlug: "database",
    categoryTitle: "データベーススキル",
    mockup: "mysql",
    sections: [
      {
        id: "hotspots",
        title: "よく問題になる領域",
        bullets: [
          "適切でない索引や複合索引の順序",
          "長時間走るトランザクションによるロック競合",
          "大量更新での binlog 膨張とディスク逼迫",
          "結合列の型不一致による暗黙変換とインデックス無効化",
          "utf8mb3 と utf8mb4 の混在による比較・索引の不整合",
        ],
      },
      {
        id: "query-optimization",
        title: "クエリ最適化",
        paragraphs: [
          "EXPLAIN を取るだけで終わらず、想定行数と実際の行数の乖離を確認します。統計情報の更新（ANALYZE TABLE）や、必要であればインデックスヒントの利用も検討対象に含めます。",
        ],
        codeExamples: [
          {
            title: "実行計画を JSON 形式で確認",
            language: "sql",
            code: `EXPLAIN FORMAT=JSON\nSELECT order_id, total_amount\nFROM orders\nWHERE customer_id = 123\n  AND created_at >= '2026-01-01';`,
          },
        ],
      },
      {
        id: "indexing",
        title: "索引設計",
        bullets: [
          "WHERE / JOIN / ORDER BY を 1 索引でカバーできるよう列順を決める",
          "選択性の高い列を先頭に置く",
          "更新頻度が高い列に過剰に索引を張らない",
          "covering index が使えると、テーブルアクセス自体を回避できる",
        ],
      },
      {
        id: "migration",
        title: "スキーマ変更の運用",
        bullets: [
          "オンライン DDL が効く操作か事前に確認する",
          "レプリカ追従遅延を前提に作業時間帯を決める",
          "ロールバック経路を手順書に含める",
          "運用中のクエリを止めない前提で設計する（pt-online-schema-change / gh-ost）",
        ],
      },
    ],
  },
  {
    author: "neon",
    skill: "neon-serverless-postgres",
    title: "Neon サーバーレス Postgres",
    authorLabel: "Neon",
    summary:
      "Neon の Serverless Postgres を扱う上で意識したい設計・実装・運用パターンを整理したスキルです。",
    intro:
      "Neon の最大の特徴は、Postgres を『ブランチ』のように扱える点です。本番のコピーを瞬時に作って試したり、検証用 DB を毎日リセットしたり、不具合の再現専用ブランチを切ったりできます。このスキルは、その仕組みを業務フローに組み込むための観点を整理します。",
    description:
      "ブランチ運用、サーバーレス特有の接続管理、オートサスペンド、コスト指標、バックアップ・リストアといった運用要素を、Postgres の標準的な設計知識と合わせて扱います。",
    installCommand: "npx skills add https://github.com/neondatabase/skills",
    githubUrl: "https://github.com/neondatabase/skills",
    localHref: "/agent-skills/neon/neon-serverless-postgres",
    categorySlug: "database",
    categoryTitle: "データベーススキル",
    mockup: "neon",
    sections: [
      {
        id: "branches",
        title: "ブランチの使いどころ",
        bullets: [
          "検証環境ごとに独立したデータを持つ（PR ごとにブランチを生成）",
          "マイグレーションを本番前にブランチで試す",
          "不具合調査用の再現スナップショットを作る",
          "一時的なパフォーマンス試験で本番に影響させない",
          "デモ用に毎日リセットされる環境を用意する",
        ],
      },
      {
        id: "connections",
        title: "接続の設計",
        paragraphs: [
          "サーバーレス関数からの短命接続が多い構成では、Neon のプーラーを利用し、最大接続数の上限を最初に決めるのが安全です。接続リークはアプリ側のメトリクスでも検知できる状態にしておきます。",
        ],
        bullets: [
          "プーラー経由の接続を基本とする",
          "max_connections と関数同時実行数の関係を設計する",
          "Edge Functions では HTTP / WebSocket ベースのドライバを検討する",
          "接続リーク検出のメトリクスを必ず仕込む",
        ],
      },
      {
        id: "operations",
        title: "運用の進め方",
        bullets: [
          "オートサスペンドのしきい値を環境別に設定する",
          "バックアップ・リストアの手順を明文化し、定期的に試す",
          "コスト指標（計算時間 / 容量）を週次で確認する",
          "ブランチ作成のテンプレートを CI に組み込む",
        ],
      },
    ],
  },
  {
    author: "planetscale",
    skill: "postgres",
    title: "PlanetScale Postgres 最適化",
    authorLabel: "PlanetScale",
    summary:
      "Postgres の最適化とトラブルシュートを通じて、安定したデータベース運用を支援するスキルです。",
    intro:
      "Postgres は柔軟性が高いぶん、運用に入ると『遅い』『ロックが重い』『vacuum が追いつかない』といった症状の切り分けが必要になります。このスキルは、症状から原因を絞り込み、適切な対処を選ぶための観点を整理します。",
    description:
      "統計情報の更新、autovacuum、pg_stat_statements、ロック解析、インデックスのブロート、接続数管理など、Postgres 特有のパフォーマンス要因を体系的に扱います。",
    installCommand: "npx skills add https://github.com/planetscale/skills --skill postgres",
    githubUrl: "https://github.com/planetscale/skills",
    localHref: "/agent-skills/planetscale/postgres",
    categorySlug: "database",
    categoryTitle: "データベーススキル",
    mockup: "postgres",
    sections: [
      {
        id: "checklist",
        title: "最初に見る観点",
        bullets: [
          "auto-vacuum が遅延していないか",
          "pg_stat_statements で重たいクエリが特定できているか",
          "インデックスのブロートや未使用状態がないか",
          "接続数と max_connections のバランス",
          "WAL の蓄積量（レプリカ追従遅延の可能性）",
        ],
      },
      {
        id: "query-plan",
        title: "クエリプランを読む",
        codeExamples: [
          {
            title: "EXPLAIN ANALYZE の例",
            language: "sql",
            code: `EXPLAIN (ANALYZE, BUFFERS)\nSELECT o.id, o.total, c.name\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nWHERE o.created_at >= now() - interval '30 days';`,
          },
        ],
        paragraphs: [
          "想定と実測の行数、バッファヒット率、ソート発生の有無を見ると、どこにボトルネックがあるかが特定しやすくなります。Seq Scan / Nested Loop / Sort のうち、想定外のものが出ていないかを確認します。",
        ],
      },
      {
        id: "lock-analysis",
        title: "ロック解析",
        codeExamples: [
          {
            title: "現在ブロックしているクエリの抽出",
            language: "sql",
            code: `SELECT blocked.pid AS blocked_pid,\n       blocking.pid AS blocking_pid,\n       blocked.query AS blocked_query,\n       blocking.query AS blocking_query\nFROM pg_stat_activity blocked\nJOIN pg_stat_activity blocking ON blocking.pid = ANY(pg_blocking_pids(blocked.pid))\nWHERE blocked.wait_event_type = 'Lock';`,
          },
        ],
      },
      {
        id: "ops",
        title: "継続運用のコツ",
        bullets: [
          "定例的にインデックスの再編成を計画する",
          "スロークエリを閾値で自動抽出する（pg_stat_statements + アラート）",
          "クリティカルなクエリにはタイムアウトを設定する",
          "マイグレーションはロック取得が軽い順序で進める（NOT VALID → VALIDATE 等）",
        ],
      },
    ],
  },
  {
    author: "ast-grep",
    skill: "ast-grep",
    title: "ast-grep",
    authorLabel: "ast-grep",
    summary:
      "構文木ベースでコードを検索・置換するスキルで、単純な文字列検索よりも深い解析を行えます。",
    intro:
      "grep や正規表現は便利ですが、関数呼び出しと変数参照、コメント内とリテラル内の出現を区別できません。ast-grep は構文木（AST）の単位で検索・置換するため、誤検知を避けながら、API のリネームや非推奨パターンの一括検出のような大規模変更を安全に進められます。",
    description:
      "Pattern と Rule の書き方、複数言語サポート（TypeScript / Python / Go / Rust 他）、CI への組み込み方、危険パターン検出など、現場で使える形に整理しています。",
    installCommand: "npx skills add https://github.com/ast-grep/ast-grep",
    githubUrl: "https://github.com/ast-grep/ast-grep",
    localHref: "/agent-skills/ast-grep/ast-grep",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "ast",
    sections: [
      {
        id: "why-ast",
        title: "なぜ AST なのか",
        paragraphs: [
          "grep / 正規表現では、コメントや文字列内の偽陽性、メソッド呼び出しと同名の文字列リテラルを区別できません。AST ベースの検索は、構文要素の種類（関数呼び出し・宣言・代入など）を正しく識別したうえで操作できます。",
        ],
      },
      {
        id: "patterns",
        title: "よく使うパターン",
        bullets: [
          "特定 API 呼び出しの一括リネーム",
          "非推奨関数の利用箇所検出",
          "危険な構文（eval / 生の SQL 連結など）の検知",
          "共通テンプレートから外れたコードの検索",
          "セキュリティ規則の自動チェック（CI 組み込み）",
        ],
      },
      {
        id: "examples",
        title: "ルール定義の例",
        codeExamples: [
          {
            title: "非推奨関数の検出ルール",
            language: "yaml",
            code: `id: deprecated-function\nlanguage: typescript\nrule:\n  pattern: oldFunctionName($ARGS)\nmessage: "oldFunctionName は newFunctionName に置き換えてください"\nseverity: warning\nfix: newFunctionName($ARGS)`,
          },
          {
            title: "console.log の検出（テストコードを除外）",
            language: "yaml",
            code: `id: no-console-log\nlanguage: typescript\nrule:\n  pattern: console.log($$$)\nignores:\n  - "**/*.test.ts"\n  - "**/*.spec.ts"`,
          },
        ],
      },
      {
        id: "ci-integration",
        title: "CI への組み込み",
        bullets: [
          "ルールを `sgconfig.yml` にまとめてリポジトリへコミット",
          "PR で差分のあるファイルだけスキャンして高速化",
          "新規ルールはまず warning から始め、定着後に error に格上げ",
          "false positive が出たら ignores で個別除外する",
        ],
      },
    ],
  },
  {
    author: "zxkane",
    skill: "aws-cost-and-operations",
    title: "AWS コストと運用",
    authorLabel: "zxkane",
    summary:
      "AWS 環境のコスト把握、監視、運用改善をまとめて支援するためのスキルです。",
    intro:
      "AWS の月額請求は『放置されたリソース』と『過剰なログ保持』『未使用 NAT ゲートウェイ』などの定番要因で、簡単に倍増します。このスキルは、毎月のコストレポートを読み、削減候補を洗い出し、再発防止のガードレールを敷くまでを一連で扱います。",
    description:
      "Cost Explorer の読み方、サービス別の典型的な無駄、タグ運用、予算アラート、未使用検出の自動化など、コスト最適化を継続するための仕組みを整理します。",
    installCommand: "npx skills add https://github.com/zxkane/aws-cost-and-operations",
    githubUrl: "https://github.com/zxkane/aws-cost-and-operations",
    localHref: "/agent-skills/zxkane/aws-cost-and-operations",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "aws-cost",
    sections: [
      {
        id: "cost-intake",
        title: "最初に見る指標",
        bullets: [
          "サービス別の月次コストと推移（前月比 +20% 超は要調査）",
          "未使用のボリューム・Elastic IP・NAT ゲートウェイ",
          "過剰なログ保持期間による S3 / CloudWatch 料金",
          "本番以外の常時稼働リソース",
          "データ転送料金（リージョン跨ぎ・AZ 跨ぎ）",
        ],
      },
      {
        id: "service-hotspots",
        title: "サービス別の典型的な無駄",
        table: {
          headers: ["サービス", "ありがちな無駄", "対処"],
          rows: [
            ["EC2", "停止インスタンスでも EBS は課金", "未使用 EBS の棚卸し"],
            ["S3", "Glacier / IA に移行できる古いデータ", "ライフサイクルポリシー設定"],
            ["NAT GW", "1 AZ あたり時間課金 + データ処理", "VPC エンドポイント・統合検討"],
            ["CloudWatch", "Logs 保持無期限", "保持期間を 30〜90 日に設定"],
            ["RDS", "本番外も Multi-AZ", "検証環境は Single-AZ に"],
          ],
        },
      },
      {
        id: "guardrails",
        title: "運用ガードレール",
        bullets: [
          "タグ付け規約を明文化し、未タグリソースを毎週通知する",
          "予算アラートをサービス単位で設定する",
          "アイドル検出の自動レポートを週次で流す",
          "新規構築はコスト試算を必須にする（IaC のレビューに含める）",
        ],
      },
      {
        id: "continuous",
        title: "継続的な最適化",
        paragraphs: [
          "一度きりの棚卸しではコストは戻ります。しきい値を超えたら通知する仕組みを仕込み、運用当番の定例タスクに組み込むのが定石です。チームに『コスト見直し当番』を持ち回りで設けるのも有効です。",
        ],
      },
    ],
  },
  {
    author: "cloudflare",
    skill: "building-ai-agent-on-cloudflare",
    title: "Cloudflare AIエージェント構築",
    authorLabel: "Cloudflare",
    summary:
      "Cloudflare Workers と Agents SDK を使い、リアルタイム処理やツール呼び出しを備えた AI エージェントを構築するスキルです。",
    intro:
      "Cloudflare Workers の上で動くエージェントは、世界中のエッジで実行されるため低レイテンシで応答できます。このスキルは、Workers + Durable Objects + Agents SDK の組み合わせで、状態を持ちツールを呼べるエージェントを構築するための設計と実装を扱います。",
    description:
      "アーキテクチャ、状態管理、ツール呼び出し、外部 API 連携、デプロイと観測まで、エッジで動くエージェントを実運用に乗せるための要素を整理します。",
    installCommand: "npx skills add https://github.com/cloudflare/skills --skill ai-agent",
    githubUrl: "https://github.com/cloudflare/skills",
    localHref: "/agent-skills/cloudflare/building-ai-agent-on-cloudflare",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "cloudflare-agent",
    sections: [
      {
        id: "architecture",
        title: "基本アーキテクチャ",
        paragraphs: [
          "Workers でエージェント本体（HTTP / WebSocket）を受け、状態は Durable Objects、長期記憶は KV / D1 / Vectorize に分けて持ちます。エッジで動く都合上、実行時間制限と永続化先を最初に決めるのが安全です。",
        ],
      },
      {
        id: "state-design",
        title: "状態管理の設計",
        bullets: [
          "セッション ID ごとに Durable Object を 1 つ割り当てる",
          "短期記憶（直近の会話）は DO 内に持つ",
          "長期記憶は Vectorize や D1 に逃がす",
          "副作用のある操作は冪等に設計し、再実行に耐える",
          "メモリの上限（DO は 128MB 程度）を意識する",
        ],
      },
      {
        id: "tools",
        title: "ツール呼び出しの設計",
        bullets: [
          "副作用のある操作は idempotent に設計する",
          "外部 API のレート制限と失敗時の再試行戦略を決める",
          "呼び出し履歴を構造化ログとして保存する",
          "危険な操作（送信 / 削除）は承認フローを挟む",
          "ツール定義の変更は後方互換性を意識する",
        ],
      },
      {
        id: "deploy",
        title: "デプロイと運用",
        bullets: [
          "プレビュー環境を PR ごとに用意する",
          "Wrangler で設定差分を明確にする（wrangler.toml）",
          "エッジ側の遅延とコールドスタートを計測する",
          "Logpush でログを集約し、監査できる状態にする",
          "Tail Worker で本番のリアルタイムログを観察する",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "brand-guidelines",
    title: "ブランドガイドライン",
    authorLabel: "Anthropic",
    summary:
      "ブランドカラー、タイポグラフィ、視覚ルールを成果物へ一貫して適用するためのスキルです。",
    intro:
      "ブランドが崩れる典型は、Web・資料・SNS・印刷物のあいだで色やフォントが微妙に違ってくることです。このスキルは、ガイドラインを『作って終わり』にせず、現場の制作者が使える粒度に分解して、いつ・どこで・何を選ぶかを判断できる状態に整えます。",
    description:
      "色・タイポグラフィ・余白・写真トーン・図版のルールを、Web / 資料 / SNS の各文脈ごとに対応付けます。よくある崩れ方と、それを防ぐためのレビュー観点も含みます。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill brand-guidelines",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/brand-guidelines",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "brand",
    sections: [
      {
        id: "core-elements",
        title: "押さえる要素",
        bullets: [
          "ロゴの最小サイズ・余白・色バリエーション",
          "主要カラーとアクセントカラーの役割（基調 / 補助 / 強調）",
          "見出し・本文フォントのペアリングとサイズ階段",
          "写真・イラストのトーン（明度・彩度・構図）",
          "余白・グリッドの基準値",
        ],
      },
      {
        id: "context-mapping",
        title: "用途別の使い分け",
        table: {
          headers: ["用途", "優先する要素", "注意"],
          rows: [
            ["Web", "可読性・コントラスト", "ダークモード対応の色も用意"],
            ["スライド", "視認性・余白", "プロジェクター投影で色が薄まる"],
            ["SNS", "サムネイルでの強さ", "1:1 / 4:5 のセーフエリアを意識"],
            ["印刷", "CMYK 変換時の色再現", "RGB → CMYK で色味が変わる"],
          ],
        },
      },
      {
        id: "usage",
        title: "運用の進め方",
        paragraphs: [
          "ガイドラインは抽象的な原則だけにせず、実物のサンプル（Do / Don't）を必ず添えると判断のブレが減ります。新しい媒体が増えたタイミングで、その媒体向けのサンプルを追加していきます。",
        ],
      },
      {
        id: "mistakes",
        title: "よくある崩れ方",
        bullets: [
          "強調色を多用しすぎて画面が濁る",
          "フォントを場面ごとに増やしてしまう",
          "ロゴ周りの余白を確保しないまま縮小する",
          "写真と図版のトーンが揃わない",
          "新規制作物がガイドラインの参照なしに作られる",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "canvas-design",
    title: "キャンバスデザイン",
    authorLabel: "Anthropic",
    summary:
      "ポスターやアートワーク、静的ビジュアルを、洗練された構図で制作するためのスキルです。",
    intro:
      "ポスター・表紙・SNS カードのような『止まっている絵』は、Web ほど機能的な要素が少ないぶん、構図と余白の判断がそのまま品質になります。このスキルは、主役・余白・色数・タイポグラフィの 4 軸で、軸のぶれない 1 枚に仕上げるための判断軸を整理します。",
    description:
      "視線誘導、グルーピング、余白、タイポグラフィのバランスなど、静止画としての完成度を高めるための原則と、制作プロセスをまとめています。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill canvas-design",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/canvas-design",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "canvas",
    sections: [
      {
        id: "principles",
        title: "原則",
        bullets: [
          "主役を 1 つに絞り、画面内の優先順位を明確にする",
          "色数は絞り、強調が必要な箇所だけ差し色を使う",
          "文字は『読ませる量』と『見せる量』を分けて使う",
          "余白はデザインの一部として配置する",
          "視線の流れ（左上 → 右下、Z 字 / F 字）を意図して使う",
        ],
      },
      {
        id: "process",
        title: "制作プロセス",
        paragraphs: [
          "先にラフで構図を決め、次に色、最後にタイポグラフィへ進むと破綻が少なくなります。いきなり細部から作り込むと、全体の印象が弱くなりがちです。",
        ],
        bullets: [
          "サムネイル大（5cm 角程度）で構図を決める",
          "色は 2〜3 色 + ニュートラルから始める",
          "タイポグラフィは見出し・本文の 2 階層から始める",
          "細部は最後にまとめて詰める",
        ],
      },
      {
        id: "scale-test",
        title: "縮小・拡大での検証",
        paragraphs: [
          "完成イメージは縮小表示でも主役が伝わるか必ず確認します。SNS ではフィードでサムネイル化されるため、半分以下のサイズで読めるかが実用的な指標になります。",
        ],
      },
      {
        id: "finalize",
        title: "仕上げ",
        bullets: [
          "縮小表示でも主役が目立つか確認",
          "印刷する場合は書き出し解像度（300dpi）と色空間（CMYK）を揃える",
          "複数サイズで成果物を書き出し、レイアウト崩れを確認する",
          "アクセシビリティ（コントラスト比）も併せて確認",
        ],
      },
    ],
  },
  {
    author: "composiohq",
    skill: "image-enhancer",
    title: "画像補正",
    authorLabel: "composiohq",
    summary:
      "画像やスクリーンショットを整え、より見やすく伝わる状態へ補正するためのスキルです。",
    intro:
      "ブログ・SNS・資料に使う画像は、撮影 / キャプチャしただけだと『なんとなく暗い』『色が浅い』『主役が分かりにくい』ことが多いです。このスキルは、露出 / 色味 / 構図 / 文字可読性を整える定石と、バッチ処理で大量画像を扱う進め方を整理します。",
    description:
      "個別の補正と、複数枚を統一トーンに揃えるバッチ処理の両方を扱います。EC 商品画像、プレゼン資料のスクリーンショット、SNS 用ビジュアルなどに応用できます。",
    installCommand: "npx skills add https://github.com/composiohq/image-enhancer",
    githubUrl: "https://github.com/composiohq/image-enhancer",
    localHref: "/agent-skills/composiohq/image-enhancer",
    categorySlug: "media",
    categoryTitle: "メディアスキル",
    mockup: "image",
    sections: [
      {
        id: "use-cases",
        title: "よくある用途",
        bullets: [
          "ブログ・SNS 向けに見栄えを揃える",
          "プレゼン資料のスクリーンショットを読みやすくする",
          "EC 商品画像の明るさと色味を調整する",
          "バッチ処理で大量画像を一括補正する",
          "画像内の不要な要素（人物の顔・通行人）をマスクする",
        ],
      },
      {
        id: "pipeline",
        title: "補正の順序",
        paragraphs: [
          "露出 → コントラスト → 色味 → 構図トリミング → 書き出し、の順で進めると安定します。順序を逆にすると、後工程でかけた調整が崩れやすくなります。",
        ],
        bullets: [
          "1. 露出（明るさ全体）を整える",
          "2. コントラスト（明暗差）を整える",
          "3. ホワイトバランスと彩度を調整",
          "4. 構図トリミングと水平調整",
          "5. シャープネスを最後に少しだけ",
        ],
      },
      {
        id: "batch",
        title: "バッチ処理のコツ",
        bullets: [
          "代表 3 枚で設定を作り、残りに適用するワークフローにする",
          "極端な補正値を 1 枚に対して適用しない（残りで崩れる）",
          "ファイル名 + 元画像のハッシュを残し、原本に戻れるようにする",
          "JPEG 再保存の劣化を考慮し、中間は PNG / TIFF を使う",
        ],
      },
      {
        id: "quality",
        title: "品質を保つために",
        bullets: [
          "オリジナルは必ず保管してから補正する",
          "JPEG の再保存によるロスに注意する",
          "書き出し時に色空間（sRGB）と解像度を意識する",
          "アクセシビリティ（テキストとのコントラスト）を確認",
        ],
      },
    ],
  },
  {
    author: "composiohq",
    skill: "domain-name-brainstormer",
    title: "ドメイン名アイデア出し",
    authorLabel: "composiohq",
    summary:
      "新しいサービスやブランド向けに、取得可能性も踏まえたドメイン案を出すためのスキルです。",
    intro:
      "ドメイン名は『最初に決まらないと先に進めない』のに、決め方が属人化しがちな領域です。このスキルは、サービスのコンセプトから複数の切り口で候補を生成し、取得可能性・発音しやすさ・想起性まで含めて絞り込むまでを支援します。",
    description:
      "造語・比喩・略称・複合語など複数の系統で候補を出し、TLD 横断の取得可能性、商標衝突、競合との混同などを確認するための観点を整理します。",
    installCommand: "npx skills add https://github.com/composiohq/domain-name-brainstormer",
    githubUrl: "https://github.com/composiohq/domain-name-brainstormer",
    localHref: "/agent-skills/composiohq/domain-name-brainstormer",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "domain",
    sections: [
      {
        id: "brief",
        title: "ブリーフの整理",
        bullets: [
          "サービスの中核価値とトーン（柔らかい / 堅い / 革新的）",
          "想定ユーザーと使用シーン",
          "他社との差別化ポイント",
          "避けたい言葉・テーマ・既存類似サービス",
          "対象市場（国・言語）",
        ],
      },
      {
        id: "ideation",
        title: "候補出しの切り口",
        table: {
          headers: ["系統", "例", "向いているケース"],
          rows: [
            ["直接的", "fastnotes.com", "機能が一目で分かる"],
            ["比喩", "lighthouse.dev", "概念や効果を象徴"],
            ["造語", "linear.app", "競合と被らず覚えやすい"],
            ["略語", "k6.io", "短く打ちやすい"],
            ["複合語", "stackshare.io", "業界用語の組み合わせ"],
          ],
        },
        paragraphs: [
          "1 つの系統に偏らせず、複数の系統を並行して 30〜50 案を出してから、後段で絞り込むのが安定します。",
        ],
      },
      {
        id: "screening",
        title: "最終スクリーニング",
        bullets: [
          "主要 TLD（.com / .io / .ai / .co）での取得可能性を確認",
          "商標・既存サービスとの衝突を確認（USPTO / J-PlatPat）",
          "音読・入力の間違いやすさをテスト（電話で伝えられるか）",
          "ローマ字読みで意図しない意味にならないか確認",
          "SNS のハンドル取得可能性を確認",
        ],
      },
    ],
  },
  {
    author: "composiohq",
    skill: "file-organizer",
    title: "ファイル整理",
    authorLabel: "composiohq",
    summary:
      "ファイルとフォルダを整理し、運用しやすいディレクトリ構成へ整えるためのスキルです。",
    intro:
      "個人 PC・共有ドライブ・プロジェクトフォルダは、放っておくと『同じ案件が複数フォルダに分散』『最新版の判別が難しい』『古いファイルで容量を圧迫』の状態に陥ります。このスキルは、現状把握・構成設計・維持の仕組みを 3 段階で整えます。",
    description:
      "個人作業フォルダ、チーム共有、プロジェクト成果物など、散らかりやすい領域を持続可能な形に組み直します。命名規則やテンプレートフォルダを併せて整備します。",
    installCommand: "npx skills add https://github.com/composiohq/file-organizer",
    githubUrl: "https://github.com/composiohq/file-organizer",
    localHref: "/agent-skills/composiohq/file-organizer",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "file",
    sections: [
      {
        id: "audit",
        title: "現状把握",
        bullets: [
          "容量を大きく占めているフォルダを特定する",
          "命名がばらついているファイル群を抽出する",
          "使われていない古いファイルを仕分ける",
          "重複ファイル（同名・同内容）をまとめる",
          "深すぎる階層（5 段以上）を抽出する",
        ],
      },
      {
        id: "structure",
        title: "構成の考え方",
        paragraphs: [
          "フォルダ階層を深くしすぎると運用が崩れます。トップ 2 階層で『用途』と『案件』を分け、細かい粒度は下位に寄せると維持しやすくなります。",
        ],
        codeExamples: [
          {
            title: "おすすめのフォルダ構成例",
            language: "text",
            code: `Documents/\n├ 01-active/        # 進行中の案件\n│ ├ project-a/\n│ └ project-b/\n├ 02-reference/     # 常に参照する資料\n├ 03-archive/       # 完了 / 凍結案件\n└ 99-inbox/         # 未分類の一時置き場`,
          },
        ],
      },
      {
        id: "naming",
        title: "命名規則",
        bullets: [
          "日付プレフィックス（YYYYMMDD）で並び順を強制する",
          "案件コード + 種別 + 内容の順で揃える",
          "全角スペースとローマ字混在を避ける",
          "バージョンは v1 / v2 ではなく日付で管理する",
        ],
      },
      {
        id: "maintain",
        title: "維持するしくみ",
        bullets: [
          "命名規則を短い README に書いて先頭フォルダに置く",
          "古いファイルの自動アーカイブ（90 日経過で archive へ移動）",
          "新規案件はテンプレートフォルダから複製で始める",
          "四半期ごとに棚卸しの定例を入れる",
        ],
      },
    ],
  },
  {
    author: "coffeefuelbump",
    skill: "csv-data-summarizer",
    title: "CSV データ要約",
    authorLabel: "coffeefuelbump",
    summary:
      "CSV を読み込み、追加指示がなくても分析結果や示唆、可視化の要点をまとめてくれるスキルです。",
    intro:
      "業務で渡される CSV は、1 行目の眺めだけでは『何のデータか』『何を見るべきか』が分かりません。このスキルは、行数・列型・欠損・分布・偏りを自動で読み取り、レポートのたたき台と次の問いまで一気に作ります。分析の最初の 30 分を肩代わりする使い方ができます。",
    description:
      "一次観察、欠損値・外れ値の扱い、要約と示唆の生成、可視化の選び方を扱います。意思決定者が読みやすいフォーマットへの整形まで含みます。",
    installCommand: "npx skills add https://github.com/coffeefuelbump/csv-data-summarizer",
    githubUrl: "https://github.com/coffeefuelbump/csv-data-summarizer",
    localHref: "/agent-skills/coffeefuelbump/csv-data-summarizer",
    categorySlug: "data-analysis",
    categoryTitle: "データ分析スキル",
    mockup: "csv",
    sections: [
      {
        id: "first-look",
        title: "最初の観察",
        bullets: [
          "行数・列数と各列の型の概略",
          "欠損値・外れ値の量",
          "キーとなる列の一意性（重複の有無）",
          "時系列データかどうか（粒度: 日 / 週 / 月）",
          "カテゴリ列のユニーク数とトップ 5",
        ],
      },
      {
        id: "summary",
        title: "要約の作り方",
        paragraphs: [
          "合計や平均だけでは意思決定に使いづらいため、分布と偏りを合わせて示します。『平均 X、ただし上位 10% が全体の半分』のように、数字の裏側にある仮説まで含めて提示するのが効果的です。",
        ],
      },
      {
        id: "visualization",
        title: "可視化の方針",
        table: {
          headers: ["伝えたいこと", "向くグラフ", "避けたい選択"],
          rows: [
            ["時間変化", "折れ線", "棒グラフを並べる"],
            ["割合", "棒（積み上げ） / ドーナツ", "ピザのような 3D 円"],
            ["分布", "ヒストグラム / 箱ひげ", "平均値だけ"],
            ["相関", "散布図", "色分けしただけの表"],
            ["上位順位", "ランキング棒", "全件並べる"],
          ],
        },
      },
      {
        id: "deliver",
        title: "受け取り手に届ける",
        bullets: [
          "結論を冒頭で 1〜2 文に固める",
          "数値は 3 桁区切りと単位を必ず付ける",
          "比較対象（前期比 / 目標比）を必ず添える",
          "次の問い（追加で見るべきもの）を 3 つ提案する",
        ],
      },
    ],
  },
  {
    author: "ramp",
    skill: "vendor-spend-analysis",
    title: "Ramp ベンダー支出分析",
    authorLabel: "Ramp",
    summary:
      "ベンダー支出データを分析し、レポートや運用改善に活用できる示唆を引き出すためのスキルです。",
    intro:
      "ベンダー支出は『気づいたら倍増している』領域の代表です。SaaS の単価上昇、契約の重複、利用率の低い契約──これらを横断的に洗い出し、削減候補と再交渉カレンダーまで具体化するのがこのスキルの目的です。",
    description:
      "部門別 / プロジェクト別の内訳、契約サイクル、上位ベンダーの継続率、役割の重複・利用率の低い契約の検出など、行動につながる示唆を引き出すための観点を整理します。",
    installCommand: "npx skills add https://github.com/ramp/skills --skill vendor-spend-analysis",
    githubUrl: "https://github.com/ramp/skills",
    localHref: "/agent-skills/ramp/vendor-spend-analysis",
    categorySlug: "data-analysis",
    categoryTitle: "データ分析スキル",
    mockup: "vendor",
    sections: [
      {
        id: "breakdown",
        title: "支出の分解",
        bullets: [
          "部門・プロジェクト単位での内訳",
          "サブスクリプションとスポットの比率",
          "上位 10 ベンダーの継続率と単価推移",
          "契約通貨・契約サイクル（月 / 年）",
          "利用率（アクティブユーザー / ライセンス数）",
        ],
      },
      {
        id: "insights",
        title: "示唆の引き出し方",
        paragraphs: [
          "単にランキングするだけでなく、『役割の重複』『単価の変動』『使っていない契約』の 3 点から改善余地を探すと、行動につながる示唆になりやすいです。",
        ],
        table: {
          headers: ["シグナル", "ありがちな打ち手"],
          rows: [
            ["役割が重複する 2 ツール", "片方に集約 / プラン縮小"],
            ["利用率 30% 未満のサブスク", "ライセンス数の見直し"],
            ["前年比 +20% の単価", "更新交渉 / 競合比較"],
            ["1 部門だけが使う高額ツール", "費用配賦の整理"],
          ],
        },
      },
      {
        id: "actions",
        title: "アクションにつなげる",
        bullets: [
          "重複契約の統合案を提示する",
          "利用実績に基づいたプランの見直し提案",
          "更新時期と再交渉カレンダーを共有する",
          "削減後の効果を定期レポートで可視化する",
        ],
      },
    ],
  },
  {
    author: "michalparkola",
    skill: "article-extractor",
    title: "記事本文抽出",
    authorLabel: "michalparkola",
    summary:
      "記事ページから本文だけを抜き出し、周辺のノイズを除いた読みやすい内容に整えるためのスキルです。",
    intro:
      "ニュース記事やブログは、本文の周りに広告・関連記事・SNS ボタン・ヘッダー・フッターが大量に並びます。このスキルは、DOM 構造から本文を推定し、純粋な本文だけを取り出して、読書メモや要約のために使える形に整えます。",
    description:
      "本文抽出、見出しの階層化、画像と引用の保持、Markdown への整形までを扱います。読書メモ用、要約パイプラインの前処理、引用集の作成といった用途に向きます。",
    installCommand: "npx skills add https://github.com/michalparkola/article-extractor",
    githubUrl: "https://github.com/michalparkola/article-extractor",
    localHref: "/agent-skills/michalparkola/article-extractor",
    categorySlug: "research",
    categoryTitle: "リサーチスキル",
    mockup: "article",
    sections: [
      {
        id: "scope",
        title: "扱える記事",
        bullets: [
          "一般的なニュース記事・ブログ",
          "会社ブログやリリース記事",
          "マガジン系の連載記事",
          "画像キャプションや補足を含む解説系記事",
          "Wiki / ドキュメンテーションサイト",
        ],
      },
      {
        id: "pipeline",
        title: "抽出の流れ",
        paragraphs: [
          "DOM 構造からメインコンテンツを推定し、そこから広告・関連リンク・ソーシャルボタンを除外します。残った本文を段落単位で整え、見出しを階層化します。",
        ],
        bullets: [
          "URL を取得して HTML をフェッチ",
          "Readability アルゴリズムでメイン領域を推定",
          "広告・関連リンクを除外",
          "見出し（h2 / h3）を Markdown 階層に対応付け",
          "画像と引用を保持して整形",
        ],
      },
      {
        id: "post-processing",
        title: "後処理",
        bullets: [
          "読書メモ用の Markdown に整形する",
          "引用や参考リンクを巻末にまとめる",
          "文章の長さに応じて要約を添える",
          "メタ情報（タイトル / 著者 / 公開日）を YAML フロントマターに格納",
        ],
      },
      {
        id: "caveats",
        title: "扱う際の注意",
        bullets: [
          "ペイウォール記事は本文取得自体ができない",
          "JavaScript で後から描画される本文はヘッドレスブラウザが必要",
          "著作権上、引用範囲と出典付与のルールを守る",
          "サイトの robots.txt とアクセス頻度を尊重する",
        ],
      },
    ],
  },
  {
    author: "composiohq",
    skill: "lead-research-assistant",
    title: "リード調査アシスタント",
    authorLabel: "composiohq",
    summary:
      "見込み顧客の調査結果を整理し、アプローチ計画へ落とし込むための支援を行うスキルです。",
    intro:
      "営業や事業開発の初回コンタクトで一番時間がかかるのは『相手のことを調べる』作業です。このスキルは、企業名から公式サイト・IR・プレスリリース・採用情報・SNS を横断し、『何をしている会社か』『直近の動き』『想定される課題』『キーパーソン』『次のアクション』を 1 ページにまとめます。",
    description:
      "公開情報のみを扱い、推測と事実を分けて記述する設計です。リード調査・代替案検討・コンタクト戦略の起点として使えます。",
    installCommand: "npx skills add https://github.com/composiohq/lead-research-assistant",
    githubUrl: "https://github.com/composiohq/lead-research-assistant",
    localHref: "/agent-skills/composiohq/lead-research-assistant",
    categorySlug: "research",
    categoryTitle: "リサーチスキル",
    mockup: "lead",
    sections: [
      {
        id: "inputs",
        title: "扱える入力",
        bullets: [
          "公式サイトや IR 資料",
          "公開されているプレスリリース",
          "技術ブログ・採用情報",
          "SNS / インタビュー / カンファレンス登壇",
          "業界レポート（公開分）",
        ],
      },
      {
        id: "output-structure",
        title: "アウトプットの構成",
        paragraphs: [
          "『何をしている会社か』『直近の動き』『想定される課題』『キーパーソン候補』『次のアクション』の 5 ブロックに整理すると、営業・事業開発でそのまま使えます。",
        ],
        table: {
          headers: ["ブロック", "含める内容"],
          rows: [
            ["事業概要", "主要プロダクト・収益モデル・市場ポジション"],
            ["直近 3 ヶ月の動き", "資金調達 / リリース / 人事"],
            ["想定される課題", "公開情報から推測される論点（推測と明記）"],
            ["キーパーソン", "意思決定者・推進者の候補"],
            ["次のアクション", "アプローチ手段と切り口"],
          ],
        },
      },
      {
        id: "etiquette",
        title: "扱う際の注意",
        bullets: [
          "公開情報のみを扱い、出典を残す",
          "憶測を断定形で書かない（『〜と推測される』を使う）",
          "最新化の頻度をあらかじめ決めておく",
          "個人情報の扱いは社内ガイドラインに従う",
        ],
      },
    ],
  },
  {
    author: "cloudflare",
    skill: "agents-sdk",
    title: "Agents SDK",
    authorLabel: "Cloudflare",
    summary:
      "Cloudflare Workers 上で状態を持つ AI エージェントを組み立てるための基礎スキルです。",
    intro:
      "Cloudflare の Agents SDK は、Workers + Durable Objects を土台にして、ツール呼び出し・会話履歴・長期記憶を備えたエージェントを最小構成から組み立てられます。エッジで実行されるため低レイテンシで応答でき、世界中のユーザーに均質な体験を提供できます。",
    description:
      "中核となる構成要素（Worker / Durable Object / Tool / Memory）、最小構成のコード、状態管理の設計、外部ツールとの接続パターンを扱い、エッジで動くエージェントの全体像を示します。",
    installCommand: "npx skills add https://github.com/cloudflare/skills --skill agents-sdk",
    githubUrl: "https://github.com/cloudflare/agents",
    localHref: "/agent-skills/cloudflare/agents-sdk",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "cloudflare-agent",
    sections: [
      {
        id: "core-concepts",
        title: "中核となる構成要素",
        bullets: [
          "Worker: HTTP / WebSocket のエントリポイント",
          "Durable Object: 会話セッションごとの状態を保持する単位",
          "Tool: エージェントから呼び出せる関数や外部 API",
          "Memory: 短期と長期に分けて会話・知識を扱う",
          "Vectorize: ベクター検索を使った長期記憶ストア",
        ],
      },
      {
        id: "minimal-example",
        title: "最小構成",
        paragraphs: [
          "Workers の handler から Agent インスタンスを取り出し、ツールと指示を渡してメッセージを処理する流れが基本です。",
        ],
        codeExamples: [
          {
            title: "Agent をインスタンス化する",
            language: "ts",
            code: `import { Agent } from "@cloudflare/agents";\n\nexport class ChatAgent extends Agent {\n  async onMessage(message: string) {\n    const reply = await this.respond({\n      system: "あなたはユーザーの作業を助けるアシスタントです。",\n      tools: [searchDocs, openTicket],\n      input: message,\n    });\n    return reply;\n  }\n}`,
          },
        ],
      },
      {
        id: "state",
        title: "状態管理の考え方",
        bullets: [
          "セッション ID ごとに Durable Object を割り当てる",
          "短期記憶は会話履歴、長期記憶はベクター DB や KV に逃がす",
          "副作用のある操作は冪等に設計し、再実行に耐えられるようにする",
          "永続化先のしきい値（容量・コスト）を最初に決める",
          "監査用のイベントログを別ストアに残す",
        ],
      },
      {
        id: "tooling",
        title: "ツール接続",
        bullets: [
          "ツール定義は引数スキーマと戻り値型を明示する",
          "外部 API のレート制限とタイムアウトをツール側で握る",
          "破壊的操作は承認ステップを挟む",
          "失敗時のリトライ戦略は冪等性とセットで設計する",
        ],
      },
    ],
  },
  {
    author: "cloudflare",
    skill: "mcp-server",
    title: "Cloudflare で MCP サーバー構築",
    authorLabel: "Cloudflare",
    summary:
      "Cloudflare Workers 上で OAuth 対応のリモート MCP サーバーを構築・展開するためのスキルです。",
    intro:
      "MCP（Model Context Protocol）は、Claude をはじめとする LLM クライアントから外部ツールを呼び出すための標準プロトコルです。このスキルは、Workers の上に MCP サーバーを立て、OAuth による認可・ツール公開・監査ログまでを実運用に乗せる方法を扱います。",
    description:
      "サーバー構成、OAuth フロー、ツール公開の流れ、ログ・監査・再試行戦略まで、リモート MCP サーバーを業務利用するために必要な要素をまとめています。",
    installCommand: "npx skills add https://github.com/cloudflare/skills --skill mcp-server",
    githubUrl: "https://github.com/cloudflare/mcp-server-cloudflare",
    localHref: "/agent-skills/cloudflare/mcp-server",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "cloudflare-agent",
    sections: [
      {
        id: "architecture",
        title: "サーバー構成",
        paragraphs: [
          "Worker が MCP のエンドポイントを公開し、ツール本体や状態は Durable Object・KV・D1 に分けて持ちます。エッジで動かすため、長時間処理は背景ジョブとして切り出すのが基本です。",
        ],
      },
      {
        id: "auth",
        title: "OAuth 認可フロー",
        bullets: [
          "クライアント登録とリダイレクト URI を最初に決める",
          "アクセストークンは KV や Durable Object に短時間で保管する",
          "スコープごとに許可するツールを切り分ける",
          "リフレッシュトークンの取り回しを設計に含める",
          "失効時の再認可フローを UX に落とす",
        ],
      },
      {
        id: "tooling",
        title: "ツール公開",
        codeExamples: [
          {
            title: "ツール定義の例",
            language: "ts",
            code: `server.tool("create_ticket", {\n  description: "サポートチケットを作成する",\n  inputSchema: {\n    type: "object",\n    properties: {\n      subject: { type: "string" },\n      body: { type: "string" },\n    },\n    required: ["subject", "body"],\n  },\n}, async ({ subject, body }) => {\n  return await createTicket({ subject, body });\n});`,
          },
        ],
        bullets: [
          "ツール名と引数スキーマを安定させる（後方互換を意識）",
          "失敗時の戻り値も型で表現し、クライアントが処理しやすくする",
          "監査ログを必ず残し、誰がいつどのツールを呼んだか追える状態に",
          "破壊的ツールは dry-run モードを用意する",
        ],
      },
      {
        id: "operations",
        title: "運用",
        bullets: [
          "Logpush でログをストレージに集約",
          "Tail Worker で本番のリアルタイムログを観察",
          "Wrangler で環境ごとの差分を明示する",
          "障害時のロールバック手順をリリースノートに含める",
        ],
      },
    ],
  },
  {
    author: "cloudflare",
    skill: "platform",
    title: "Cloudflare プラットフォーム総合",
    authorLabel: "Cloudflare",
    summary:
      "Workers、KV、D1、R2、セキュリティ機能まで横断して扱うための総合ガイドです。",
    intro:
      "Cloudflare のプロダクトは単体でも使えますが、組み合わせて初めて『エッジで動く分散アプリ』として強さを発揮します。このスキルは、どのデータをどこに置き、どこで処理するかを判断するための見取り図を提供します。",
    description:
      "Workers を中心に、KV / D1 / R2 / Queues / Cache / Durable Objects のどれを選ぶかを判断できる基準と、セキュリティ・運用の基本をまとめています。",
    installCommand: "npx skills add https://github.com/cloudflare/skills --skill platform",
    githubUrl: "https://github.com/cloudflare/workers-sdk",
    localHref: "/agent-skills/cloudflare/platform",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "cloudflare-agent",
    sections: [
      {
        id: "storage-matrix",
        title: "ストレージ選定",
        table: {
          headers: ["プロダクト", "得意なデータ", "向いている用途"],
          rows: [
            ["KV", "小さなキー・バリュー", "設定値・フラグ・軽量キャッシュ"],
            ["D1", "リレーショナル", "ユーザー・注文などの構造化データ"],
            ["R2", "オブジェクト", "画像・動画・バックアップなど大容量"],
            ["Durable Objects", "強整合な単一インスタンス", "セッション・リアルタイム共同編集"],
            ["Queues", "メッセージング", "非同期処理・デカップリング"],
          ],
        },
      },
      {
        id: "patterns",
        title: "よく使う構成",
        bullets: [
          "Workers でリクエストを受け、Cache → KV → D1 の順にフォールバック",
          "重い処理は Queues に積み、別 Worker で処理",
          "画像変換は Cloudflare Images / R2 を組み合わせて配信",
          "ゾーン共通の制御は Workers Routes でまとめる",
          "API Gateway 的な役割を Workers + Service Bindings で構成",
        ],
      },
      {
        id: "security",
        title: "セキュリティの基本",
        bullets: [
          "API トークンは最小権限で発行し、Wrangler のシークレットに登録",
          "WAF / Bot Management を本番ドメインで必ず有効化",
          "送出ドメインは Allowlist で制御し、未知の宛先を遮断",
          "ログは Logpush でストレージに集約し、監査可能な状態に",
          "Zero Trust（Access）で内部ツールを保護",
        ],
      },
      {
        id: "observability",
        title: "観測性",
        bullets: [
          "Workers Analytics でリクエスト数・遅延を確認",
          "Tail Worker で本番ログをリアルタイム観察",
          "Sentry / Datadog 連携でエラー追跡",
          "コスト指標を週次で見るダッシュボードを用意",
        ],
      },
    ],
  },
  {
    author: "figma",
    skill: "page-generation",
    title: "Figma 画面生成",
    authorLabel: "Figma",
    summary:
      "コードや要件から、Figma 内にページや画面構成を組み立てるためのスキルです。",
    intro:
      "新規プロダクトの初期段階で『画面ラフをまず置きたい』ときに、ユーザーストーリーやスクリーンショットから Figma 上の画面構成を一気に生成します。0→1 のスピードを優先しつつ、後で整えやすい構造で出力するのが特長です。",
    description:
      "ページ単位の構成、共通コンポーネントの再利用、命名規則の整備など、Figma で画面を立ち上げる初動の判断を支援します。",
    installCommand: "npx skills add https://github.com/figma/skills --skill page-generation",
    githubUrl: "https://github.com/figma/code-connect",
    localHref: "/agent-skills/figma/page-generation",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "frontend",
    sections: [
      {
        id: "inputs",
        title: "扱える入力",
        bullets: [
          "ユーザーストーリー・要件メモ",
          "既存画面のスクリーンショットやキャプチャ",
          "コードリポジトリ内のページ構成",
          "ブランドカラー・タイポグラフィ指定",
          "競合プロダクトの参考画像",
        ],
      },
      {
        id: "process",
        title: "生成の流れ",
        paragraphs: [
          "まず『何ページ必要か』『各ページの主目的』を確定し、それぞれのページに対して要素のレイアウトを生成します。共通の見出し・ナビゲーションは初期段階でコンポーネント化しておくと、後の差分修正が楽になります。",
        ],
        bullets: [
          "1. ページ一覧と各ページの目的を 1 行で書き出す",
          "2. 共通要素（ヘッダー / フッター / ナビ）をコンポーネント化",
          "3. 各ページにレイアウトとサンプルテキストを配置",
          "4. 状態（空 / エラー / 読み込み）のバリアントも作る",
          "5. レビューしてアートボード単位で命名を整える",
        ],
      },
      {
        id: "review",
        title: "生成後のレビュー観点",
        bullets: [
          "情報階層（タイトル・本文・補助情報）の強弱が出ているか",
          "余白とフォントサイズが共通ルールに沿っているか",
          "状態（空・読み込み・エラー）のバリアントを用意できているか",
          "モバイル幅でも崩れない構造になっているか",
          "命名規則（Page / Section / Component）が揃っているか",
        ],
      },
    ],
  },
  {
    author: "figma",
    skill: "design-implementation",
    title: "Figma デザイン実装",
    authorLabel: "Figma",
    summary:
      "Figma デザインをアプリケーションコードへ落とし込む際の実装ガイドです。",
    intro:
      "Figma の画面を React や Next.js で実装するときに迷うのは『どこまで再現するか』『どこで分割するか』『どこをトークン化するか』です。このスキルは、デザイントークンの抽出からコンポーネント分割、状態のバリアント実装までを順序立てて整理します。",
    description:
      "デザインと実装のあいだの認識ズレを減らすための共通言語と、実装後のレビュー手順を含みます。Figma → コードを安定して回すための型を提供します。",
    installCommand:
      "npx skills add https://github.com/figma/skills --skill design-implementation",
    githubUrl: "https://github.com/figma/code-connect",
    localHref: "/agent-skills/figma/design-implementation",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "frontend",
    sections: [
      {
        id: "tokens",
        title: "デザイントークン",
        paragraphs: [
          "色・フォント・余白・角丸・影は、CSS 変数や Tailwind 設定として共通化してから実装に入ると、後の調整コストが大きく下がります。Figma の Variables 機能を使うと、デザイン側と実装側の同期がさらに楽になります。",
        ],
        codeExamples: [
          {
            title: "トークンの定義例（TypeScript）",
            language: "ts",
            code: `export const tokens = {\n  color: {\n    primary: "#2563eb",\n    primarySoft: "#dbeafe",\n    text: "#0f172a",\n    textMuted: "#64748b",\n  },\n  radius: { sm: 4, md: 8, lg: 16 },\n  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },\n  fontSize: { sm: 14, base: 16, lg: 18, xl: 20, h2: 28, h1: 36 },\n};`,
          },
        ],
      },
      {
        id: "splitting",
        title: "コンポーネント分割",
        bullets: [
          "ページ単位ではなく、再利用される最小単位から切り出す",
          "見た目とロジックを分け、見た目側は props だけで動かす",
          "バリアントは props で表現し、コピペでの分岐を避ける",
          "テストや Storybook で見た目を確認できる状態を保つ",
          "1 コンポーネント 200〜300 行を超えたら分割を検討",
        ],
      },
      {
        id: "state-variants",
        title: "状態のバリアント実装",
        bullets: [
          "空 / 読み込み中 / エラー / 成功の 4 状態を必ず実装",
          "Hover / Focus / Disabled の意匠を実装段階で固める",
          "アニメーション・トランジションは Figma の指定に揃える",
          "アクセシビリティ属性（aria-*）も状態に応じて切り替え",
        ],
      },
      {
        id: "review-flow",
        title: "デザインレビューの回し方",
        paragraphs: [
          "実装後は Figma と並べて差分を確認し、デザインと実装のどちらを正にするかをその場で決めます。両方が変わり続けると追従コストが膨らむため、変更窓口を一本化するのが安全です。",
        ],
      },
    ],
  },
  {
    author: "figma",
    skill: "design-system",
    title: "デザインシステムルール作成",
    authorLabel: "Figma",
    summary:
      "プロジェクトごとの設計規則やコンポーネントルールを Figma 連携前提で整備します。",
    intro:
      "デザインシステムは別文書として作るとほぼ参照されません。このスキルは、ガイドラインを Figma のスタイル・コンポーネント・バリアントとして表現し、現場が実物を触りながら従える形に整えます。",
    description:
      "色・タイポグラフィ・余白・コンポーネントの命名規則を、Figma と実装コードの両方で共通化するためのルール作りを支援します。運用ガバナンスまで含めます。",
    installCommand: "npx skills add https://github.com/figma/skills --skill design-system",
    githubUrl: "https://github.com/figma/code-connect",
    localHref: "/agent-skills/figma/design-system",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "brand",
    sections: [
      {
        id: "scope",
        title: "対象範囲を決める",
        bullets: [
          "色・タイポグラフィ・スペース・角丸の基本トークン",
          "ボタン・入力・カード・モーダルなどの基礎コンポーネント",
          "ナビゲーション・ヘッダー・フッターなどのレイアウト要素",
          "状態（hover / focus / disabled / loading）の扱い方",
          "図表・グラフのトンマナ",
        ],
      },
      {
        id: "naming",
        title: "命名規則",
        paragraphs: [
          "Figma 上のコンポーネント名は、実装側のファイル名と一致させると追跡が楽になります。`Button/Primary` のように『役割 / バリアント』で揃えるのが扱いやすい慣習です。",
        ],
        table: {
          headers: ["カテゴリ", "命名例"],
          rows: [
            ["ボタン", "Button/Primary, Button/Secondary, Button/Ghost"],
            ["入力", "Input/Text, Input/Select, Input/Textarea"],
            ["カード", "Card/Default, Card/Highlighted"],
            ["フィードバック", "Toast/Success, Toast/Error"],
          ],
        },
      },
      {
        id: "governance",
        title: "運用とガバナンス",
        bullets: [
          "変更提案は専用チャンネルで合意してから反映",
          "破壊的変更はバージョン番号を上げて通知",
          "サンプル画面を 1 枚用意し、トークン変更の影響を確認",
          "古いコンポーネントは『非推奨』ラベルを付けてから削除",
          "リリースノートを四半期ごとに発行",
        ],
      },
      {
        id: "anti-patterns",
        title: "避けたいパターン",
        bullets: [
          "1 コンポーネントに props を大量に積みすぎる（10 を超えたら分割）",
          "ガイドラインを別 PDF にして Figma から離す",
          "色トークンを 30 種以上に増やして判断不能にする",
          "誰がオーナーかを決めずに更新する",
        ],
      },
    ],
  },
  {
    author: "figma",
    skill: "code-connect",
    title: "Code Connect コンポーネント連携",
    authorLabel: "Figma",
    summary:
      "デザインコンポーネントと実装コンポーネントの対応付けを管理するためのスキルです。",
    intro:
      "デザインと実装が別の場所で進化すると、いつのまにか『Figma の Button と実装の Button は別物』になります。Code Connect は両者を 1 対 1 で結びつけ、デザイナーが Figma 上で『この実装に直結する』と分かる状態を作ります。",
    description:
      "マッピング定義、props の対応、CI でのチェック、運用フローまで、Code Connect を業務に乗せるための要素を整理します。",
    installCommand: "npx skills add https://github.com/figma/code-connect --skill code-connect",
    githubUrl: "https://github.com/figma/code-connect",
    localHref: "/agent-skills/figma/code-connect",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "react",
    sections: [
      {
        id: "mapping",
        title: "マッピング定義",
        codeExamples: [
          {
            title: "Code Connect 定義の例",
            language: "tsx",
            code: `import figma from "@figma/code-connect";\nimport { Button } from "./Button";\n\nfigma.connect(Button, "https://figma.com/file/.../?node-id=...", {\n  props: {\n    label: figma.string("Label"),\n    variant: figma.enum("Variant", {\n      Primary: "primary",\n      Secondary: "secondary",\n    }),\n    disabled: figma.boolean("Disabled"),\n  },\n  example: ({ label, variant, disabled }) => (\n    <Button variant={variant} disabled={disabled}>{label}</Button>\n  ),\n});`,
          },
        ],
      },
      {
        id: "operation",
        title: "運用の進め方",
        bullets: [
          "デザインの新規コンポーネントは、必ず実装側を先に決めてから接続",
          "props 名はデザイン側のレイヤー名と揃える",
          "破棄するコンポーネントはマッピングも削除",
          "未接続コンポーネントを CI で警告",
          "PR レビュー時にマッピング差分も確認する",
        ],
      },
      {
        id: "benefits",
        title: "得られる効果",
        paragraphs: [
          "デザイナーは Figma 上で『この実装に直結する』と分かり、開発者は実装側のソースを起点にデザイン参照ができます。両者の同期コストが大きく下がり、デザインと実装の乖離が起きにくくなります。",
        ],
      },
      {
        id: "limitations",
        title: "限界と注意",
        bullets: [
          "完全自動ではない（マッピング定義の保守は必要）",
          "デザイントークンの変更には別途追従が必要",
          "1 コンポーネントに対する複数バリアントは複雑化しやすい",
          "新人 / 外部メンバーへの初回オンボーディングを設計する",
        ],
      },
    ],
  },
  {
    author: "vercel",
    skill: "deploy",
    title: "Vercel デプロイ",
    authorLabel: "Vercel",
    summary:
      "アプリケーションのプレビュー・本番デプロイを安全に進めるためのスキルです。",
    intro:
      "Vercel は最初の git push でデプロイが終わる手軽さが魅力ですが、本番運用では環境変数の管理・プレビュー URL の活用・失敗時の切り分けがそのまま品質に直結します。このスキルは、日々のデプロイ作業を一気通貫で安定させるためのガイドです。",
    description:
      "ブランチ運用、環境変数の階層、プレビュー URL の使い方、デプロイ失敗時の確認順、ロールバックなど、Vercel 上での運用に必要な要素を扱います。",
    installCommand: "npx skills add https://github.com/vercel/skills --skill deploy",
    githubUrl: "https://github.com/vercel/vercel",
    localHref: "/agent-skills/vercel/deploy",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "frontend",
    sections: [
      {
        id: "branching",
        title: "ブランチ運用",
        bullets: [
          "main ブランチを常に本番デプロイ可能な状態に保つ",
          "プレビュー URL を PR コメントに自動投稿",
          "デザイナー・PdM レビューは PR 上のプレビューを正とする",
          "デプロイ失敗時の通知先を Slack などに集約",
          "リリースタグを切ってロールバックできるようにする",
        ],
      },
      {
        id: "envvars",
        title: "環境変数の管理",
        paragraphs: [
          "Production / Preview / Development の 3 環境で別の値を持てます。秘密鍵は Production だけに登録し、プレビュー環境では擬似データに切り替えるのが安全です。",
        ],
        table: {
          headers: ["環境", "用途", "鍵の扱い"],
          rows: [
            ["Production", "本番", "本物の API キー"],
            ["Preview", "PR ごとの確認", "ステージング / モックキー"],
            ["Development", "ローカル開発", ".env.local で各自が管理"],
          ],
        },
      },
      {
        id: "troubleshoot",
        title: "デプロイ失敗時の確認順",
        bullets: [
          "ビルドログのエラー行を最後まで読む",
          "ローカルで `next build` が通るかを再現する",
          "依存パッケージのバージョン差異を確認（lockfile の有無）",
          "Edge / Node ランタイムの選択ミスを疑う",
          "ビルドキャッシュをクリアして再試行",
        ],
      },
      {
        id: "rollback",
        title: "ロールバック",
        bullets: [
          "Deployments 一覧から『Promote to Production』で過去版に戻せる",
          "DB マイグレーションを伴う場合はロールバック手順をセットで持つ",
          "ロールバック後に必ず原因調査タスクを起票",
        ],
      },
    ],
  },
  {
    author: "vercel",
    skill: "web-interface-guidelines",
    title: "Web インターフェースガイドライン",
    authorLabel: "Vercel",
    summary:
      "UI とアクセシビリティの観点から、画面の品質をレビューするためのガイドです。",
    intro:
      "見た目を整えるだけでは『使い心地』は良くなりません。キーボード操作・コントラスト・読み込み体験・フィードバックといった要素まで揃って初めて『普通に使える』レベルに到達します。このスキルは、その最低ラインの品質基準をチェックリストで提供します。",
    description:
      "操作性、フィードバック、アクセシビリティ、応答性能の 4 軸で、Web UI のレビュー観点を整理します。実装段階・PR レビュー・QA フェーズで使えます。",
    installCommand:
      "npx skills add https://github.com/vercel/skills --skill web-interface-guidelines",
    githubUrl: "https://github.com/vercel/vercel",
    localHref: "/agent-skills/vercel/web-interface-guidelines",
    categorySlug: "creative",
    categoryTitle: "クリエイティブスキル",
    mockup: "frontend",
    sections: [
      {
        id: "interaction",
        title: "操作性",
        bullets: [
          "キーボードだけで主要操作が完結する",
          "フォーカスリングが見える状態を保つ",
          "クリック領域は 44px 以上を目安にする",
          "Hover に依存しない代替手段を用意する",
          "モーダルでは Tab トラップを実装する",
        ],
      },
      {
        id: "feedback",
        title: "フィードバック",
        paragraphs: [
          "操作の成功・失敗・進行中はすべて画面で表現します。応答が 1 秒を超える操作にはローディング表示を、完了時にはトーストや状態変化で結果を返してください。",
        ],
        table: {
          headers: ["操作の応答時間", "推奨フィードバック"],
          rows: [
            ["100ms 未満", "視覚的変化のみで十分"],
            ["100ms〜1s", "ボタン押下のフィードバック（色変化等）"],
            ["1s〜4s", "スピナー / プログレス表示"],
            ["4s 以上", "進捗バー + 推定残り時間"],
          ],
        },
      },
      {
        id: "accessibility",
        title: "アクセシビリティ",
        bullets: [
          "テキストとの色コントラストを WCAG AA 以上に保つ",
          "画像には用途に応じた alt を必ず設定",
          "見出し階層（h1〜h6）を飛ばさず構造で読める",
          "動的に変化する領域は aria-live で通知",
          "Reduced Motion 設定にも対応する",
        ],
      },
      {
        id: "performance",
        title: "応答性能",
        bullets: [
          "LCP（最大コンテンツ描画）2.5s 以内",
          "CLS（レイアウトシフト）0.1 以下",
          "INP（操作応答）200ms 以内",
          "画像は next/image で遅延読み込みと最適化",
          "サードパーティスクリプトは defer / async で読み込む",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "calendar",
    title: "Google Calendar 管理",
    authorLabel: "Google Workspace",
    summary:
      "予定確認、イベント作成、空き時間探索などカレンダー操作を支援します。",
    intro:
      "日程調整・予定確認・出席返信のような『短いけれど数が多い』カレンダー作業は、自動化との相性が高い領域です。このスキルは、参加者全員の空き時間から候補を提示したり、繰り返し予定の管理を任せられる状態に整えます。",
    description:
      "予定の検索、空き時間提案、イベントの作成・更新・削除、出席返信、繰り返し予定の編集など、Calendar まわりの操作をひと通りカバーします。",
    installCommand: "npx skills add https://github.com/google/skills --skill calendar",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/calendar",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "file",
    sections: [
      {
        id: "tasks",
        title: "扱える操作",
        bullets: [
          "今日 / 今週 / 来週の予定を要約する",
          "空き時間を抽出し、候補を提示する",
          "イベントを作成・更新・削除する",
          "出席可否を返信する",
          "繰り返し予定の例外を編集する",
        ],
      },
      {
        id: "scheduling",
        title: "日程調整の進め方",
        paragraphs: [
          "参加者全員のカレンダーから候補を絞り込み、提示する候補は 3 件以内に抑えるのが扱いやすい慣習です。タイムゾーンが混在する場合は必ず明示し、UTC との差を併記します。",
        ],
        bullets: [
          "必須参加者の空き時間を先に確認",
          "オプション参加者は『可能なら』として扱う",
          "30 分単位で候補を切る（細かすぎると意思決定が遅れる）",
          "前後の予定との連続性（移動・休憩）を考慮する",
        ],
      },
      {
        id: "etiquette",
        title: "運用上の注意",
        bullets: [
          "プライベート予定は要約のみを共有する",
          "外部の人を招待するときは権限と通知設定を確認",
          "繰り返し予定の編集は『今回のみ／全体』を必ず指定",
          "削除前に主要参加者へ通知する",
          "終日予定とタイムゾーンの組み合わせに注意",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "drive",
    title: "Google Drive 管理",
    authorLabel: "Google Workspace",
    summary:
      "ファイル、フォルダ、共有ドライブの操作や整理を進めるためのスキルです。",
    intro:
      "Google Drive は便利な反面、共有設定・命名・古いファイルの放置で『何が最新か分からない』状態に陥りやすい領域です。このスキルは、検索・共有・整理を一連で扱い、見つけやすく安全な状態を維持するための運用を支援します。",
    description:
      "個人ドライブと共有ドライブを横断した検索、共有権限の設計、ファイル移動・整理を、誤共有・誤削除を起こさず進める手順を扱います。",
    installCommand: "npx skills add https://github.com/google/skills --skill drive",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/drive",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "file",
    sections: [
      {
        id: "search",
        title: "検索の使いどころ",
        bullets: [
          "ファイル名・所有者・更新日で絞り込む",
          "本文中の文言で検索し、関連資料を集める",
          "共有ドライブと個人ドライブを区別して扱う",
          "削除済みアイテム（ゴミ箱）も探索範囲に入れる",
          "MIME タイプでフィルタ（.docx だけ / .xlsx だけ など）",
        ],
      },
      {
        id: "sharing",
        title: "共有の設計",
        paragraphs: [
          "リンク共有は便利な反面、意図しない人にまで届きやすい設定です。社外共有はメールアドレス指定を基本にし、公開リンクは期限付きで運用するのが安全です。",
        ],
        table: {
          headers: ["共有レベル", "用途", "リスク"],
          rows: [
            ["特定ユーザー", "社内コラボ", "低"],
            ["ドメイン内全員", "全社展開", "中（退職者も見られる可能性）"],
            ["リンクを知っている全員", "外部展開", "高（転送で漏洩）"],
            ["ウェブで一般公開", "プレスリリース等", "極高（検索エンジン到達）"],
          ],
        },
      },
      {
        id: "cleanup",
        title: "整理の進め方",
        bullets: [
          "古い案件フォルダはアーカイブにまとめる",
          "重複ファイルを検出してリンクを統一する",
          "命名ルールを README に明記する",
          "オーナー不在のファイルを定期的に棚卸す",
          "退職者所有ファイルの引き継ぎを忘れない",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "gmail",
    title: "Gmail 管理",
    authorLabel: "Google Workspace",
    summary:
      "メール送信、返信、転送、未読整理まで Gmail 作業を横断的に支援します。",
    intro:
      "メールは『開いて読んで返す』を 1 日に何十回も繰り返す典型的な摩擦業務です。このスキルは、未読の優先度判定・返信案の下書き・定型処理の自動化で、メール作業全体の所要時間を圧縮します。",
    description:
      "受信トレイの整理、フィルタとラベルの設計、長文メールの要約、返信案の生成、定型送信の自動化までを扱います。送信は人の承認を経る前提です。",
    installCommand: "npx skills add https://github.com/google/skills --skill gmail",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/gmail",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "article",
    sections: [
      {
        id: "triage",
        title: "受信トレイの整理",
        bullets: [
          "未読メールをラベル別に分類する",
          "差出人・件名から優先度を推定する",
          "外部ドメインからの依頼を抽出する",
          "古いスレッドのアーカイブを提案する",
          "通知系メールはフィルタで自動振り分け",
        ],
      },
      {
        id: "drafting",
        title: "返信の下書き",
        paragraphs: [
          "原文の論点を 1〜3 項目に整理してから、合意・確認・差し戻しのいずれかの形で返信案を作成します。送信前に必ず人が確認する前提で運用します。",
        ],
      },
      {
        id: "filters",
        title: "フィルタとラベルの設計",
        bullets: [
          "顧客 / パートナー / 社内 / 通知 の 4 系統で分類",
          "重要度（自分が動くべき / 情報共有のみ）でラベルを分ける",
          "アーカイブ条件を明確にし、受信トレイを軽く保つ",
          "プロジェクト単位のラベルで横断検索を効率化",
        ],
      },
      {
        id: "automation",
        title: "自動化の落とし穴",
        bullets: [
          "外部送信は必ず承認フローを挟む",
          "返信先 / Cc を取り違えやすいため、宛先は最後にチェック",
          "添付ファイルは内容を要約してから扱う",
          "繰り返しの定型は文面テンプレートとして登録",
          "誤送信を検知する仕組み（送信前確認）を仕込む",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "docs",
    title: "Google Docs 書き込み",
    authorLabel: "Google Workspace",
    summary:
      "Google Docs への追記や文書更新をエージェントから扱いやすくするスキルです。",
    intro:
      "Google Docs は議事録・提案書・レポートの『置き場』として広く使われていますが、複数人での同時編集や提案モード、コメントの活用度合いはチームによって大きな差があります。このスキルは、Docs を成果物管理として安定運用するための型を提供します。",
    description:
      "見出し階層、コメント、リビジョン、共有範囲を意識して、Docs 上で安全に編集を回すための進め方をまとめます。",
    installCommand: "npx skills add https://github.com/google/skills --skill docs",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/docs",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "doc",
    sections: [
      {
        id: "structure",
        title: "文書構造",
        bullets: [
          "タイトル → 見出し1 → 見出し2 の階層を必ず使う",
          "目次は冒頭に自動生成しておく",
          "重要箇所はハイライトとコメントで明示する",
          "図表には番号と出典を入れる",
          "末尾に『次のアクション』ブロックを置く",
        ],
      },
      {
        id: "writing-flow",
        title: "編集の進め方",
        paragraphs: [
          "下書きを別文書で作成し、確定したセクションだけを本文書にコピーすると、レビュー中の混乱を避けられます。提案モードを使うと、修正履歴を残したまま合意形成できます。",
        ],
      },
      {
        id: "collaboration",
        title: "コラボレーション",
        bullets: [
          "コメントで議論し、決定後に本文へ反映する",
          "@メンションでアクションオーナーを明示",
          "コメントは解決後に必ず Resolve する",
          "提案モードは外部レビュー時に活用",
        ],
      },
      {
        id: "sharing",
        title: "共有とレビュー",
        bullets: [
          "閲覧 / コメント / 編集の権限を明確に切り分ける",
          "外部共有時はリンクの有効期限を設定",
          "レビュー期限を Doc 内に明記する",
          "確定後はバージョン名（v1.0）を付けて保管",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "chat",
    title: "Google Chat 送信",
    authorLabel: "Google Workspace",
    summary:
      "Google Chat スペースへの通知やメッセージ送信を自動化します。",
    intro:
      "デプロイ通知・アラート・定期サマリーは、必要な人にだけ届けば最強の情報インフラになりますが、雑に流すと『通知疲れ』を引き起こします。このスキルは、スペース設計とメッセージ整形の両面から、通知が埋もれない運用を支援します。",
    description:
      "スペース設計、メンション、メッセージ整形、自動化の注意点をまとめ、通知が機能する状態を維持します。",
    installCommand: "npx skills add https://github.com/google/skills --skill chat",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/chat",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "article",
    sections: [
      {
        id: "channel-design",
        title: "スペース設計",
        bullets: [
          "通知用 / 議論用のスペースを分ける",
          "緊急度に応じてスペースを切り分ける",
          "全員メンションは閾値を決めて使う",
          "アーカイブ方針を最初に明文化",
          "外部ゲストの招待ルールを決める",
        ],
      },
      {
        id: "message-format",
        title: "メッセージの整形",
        paragraphs: [
          "1 通で複数の話題を混ぜないのが基本です。タイトル行・要点 3 行・関連リンクの構成にすると、流し読みでも要点が伝わります。",
        ],
        codeExamples: [
          {
            title: "通知メッセージのテンプレート例",
            language: "text",
            code: `🚀 デプロイ完了: 2026-04-16 14:23\n• 環境: Production\n• バージョン: v2.4.1\n• 変更: 検索改善 / バグ修正 3 件\n📎 リリースノート: https://...`,
          },
        ],
      },
      {
        id: "automation",
        title: "自動化の注意",
        bullets: [
          "失敗時に再送ループへ入らないように冪等化",
          "送信間隔のレート制限を考慮",
          "送信先の権限を変更したらドキュメントも更新",
          "ボット送信と人手送信を識別できるようにする",
          "深夜帯の通知は緊急度に応じて抑制",
        ],
      },
    ],
  },
  {
    author: "google",
    skill: "forms",
    title: "Google Forms 操作",
    authorLabel: "Google Workspace",
    summary:
      "フォームの読み書きや回答収集を含めた調査フローを支援するスキルです。",
    intro:
      "アンケートや申込フォームは、設問設計を間違えると回収率も分析の質も大きく落ちます。このスキルは、設問の精選・配布・回答集計までを支援し、軽量な調査を素早く回せる状態に整えます。",
    description:
      "設問設計、必須項目の判断、回答データの集計と要約、Sheets 連携を含めた一連の運用を整理します。",
    installCommand: "npx skills add https://github.com/google/skills --skill forms",
    githubUrl: "https://github.com/google-workspace",
    localHref: "/agent-skills/google/forms",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "file",
    sections: [
      {
        id: "design",
        title: "設問設計",
        bullets: [
          "本当に必要な項目に絞る（多くても 10 問以内）",
          "選択肢は重複なく抜けもない MECE を意識",
          "自由記述は最後に 1 問だけ置く",
          "必須項目は『本当に答えがある質問』だけにする",
          "回答時間の目安を冒頭に明記する",
        ],
      },
      {
        id: "distribution",
        title: "配布の進め方",
        paragraphs: [
          "対象者の規模・回答締切・回収率の目標を最初に決めてから配布します。回収率が伸び悩む場合は、リマインドを 1 回だけ送るのが標準的な運用です。",
        ],
        table: {
          headers: ["対象規模", "想定回収率", "リマインド戦略"],
          rows: [
            ["10 名以下", "80% 以上", "個別フォロー"],
            ["50 名前後", "50〜70%", "1 回のリマインド"],
            ["100 名以上", "30〜50%", "セグメント別リマインド"],
          ],
        },
      },
      {
        id: "analysis",
        title: "回答の集計",
        bullets: [
          "Sheets と連携して自動的に保存",
          "数値項目は分布、選択項目は割合で要約",
          "自由記述は同じ意味のまとまりで分類",
          "個人特定につながる情報の扱いを事前に決める",
          "クロス集計（属性 × 設問）で示唆を引き出す",
        ],
      },
    ],
  },
  {
    author: "notion",
    skill: "knowledge-capture",
    title: "Notion ナレッジキャプチャ",
    authorLabel: "Notion",
    summary:
      "会話や意思決定を Notion 上の資産として構造化し、後から再利用しやすくします。",
    intro:
      "Slack やメモアプリに残る『書きっぱなし』の会話・決定事項は、3 ヶ月後には誰も見つけられません。このスキルは、雑談・意思決定・調査結果を Notion 上の検索可能なページとして整える型を提供し、ナレッジを資産にしていきます。",
    description:
      "テンプレート、タグ運用、関連ページのリンクなど、検索性を保つためのページ設計をまとめます。書く負担を最小化しつつ、後から見つけられる形に整えます。",
    installCommand: "npx skills add https://github.com/notion/skills --skill knowledge-capture",
    githubUrl: "https://github.com/makenotion",
    localHref: "/agent-skills/notion/knowledge-capture",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "article",
    sections: [
      {
        id: "templates",
        title: "テンプレート",
        bullets: [
          "決定事項・背景・代替案・次のアクションを定型ブロックにする",
          "属性（カテゴリ・関係者・期限）はデータベースのプロパティで管理",
          "本文末尾に『関連ページ』ブロックを必ず置く",
          "改訂履歴は更新日と変更点で簡潔に残す",
          "テンプレート自体を四半期ごとに見直す",
        ],
      },
      {
        id: "tagging",
        title: "タグとプロパティの運用",
        paragraphs: [
          "タグは少なめに、明確な意味を持たせて運用します。属性が増えると入力負荷が上がるため、入力者が迷わない設計が長続きします。",
        ],
      },
      {
        id: "discoverability",
        title: "見つけやすさ",
        bullets: [
          "ホームから 2 クリック以内に主要ページへ届くようにする",
          "シノニムを意識した見出しにする",
          "古いページは Archive タグを付け、検索結果から外す",
          "新規追加は Slack などで定期的に紹介する",
          "週次サマリーで新規ページをハイライト",
        ],
      },
      {
        id: "anti-patterns",
        title: "ありがちな失敗",
        bullets: [
          "1 ページに何でも書いて 1 万字を超える",
          "タグを 50 種類以上に増やして使われない",
          "タイトルが『無題』『メモ』のまま放置される",
          "アーカイブの基準がなく、古い情報が混在する",
        ],
      },
    ],
  },
  {
    author: "notion",
    skill: "meeting-intelligence",
    title: "Notion 会議インテリジェンス",
    authorLabel: "Notion",
    summary:
      "会議前の準備資料、アジェンダ、関連コンテキストの整理を支援します。",
    intro:
      "会議の質は『準備の質』でほぼ決まります。このスキルは、Notion 上の関連ページから情報を集め、会議冒頭で『前提』『目的』『論点』をすぐ共有できる状態にし、議事録テンプレートとフォローアップまで一連で支援します。",
    description:
      "事前準備、議事録運用、フォローアップの 3 段階で会議の質を底上げします。情報共有のための会議を減らし、決める会議へ寄せていきます。",
    installCommand: "npx skills add https://github.com/notion/skills --skill meeting-intelligence",
    githubUrl: "https://github.com/makenotion",
    localHref: "/agent-skills/notion/meeting-intelligence",
    categorySlug: "productivity",
    categoryTitle: "生産性スキル",
    mockup: "article",
    sections: [
      {
        id: "preparation",
        title: "事前準備",
        bullets: [
          "目的とゴール（何が決まれば成功か）を 1 行で書く",
          "前回議事録と関連ドキュメントへのリンクを並べる",
          "論点ごとに想定される判断材料を整理する",
          "誰が決定者で、誰が情報共有のために来るかを区別する",
          "想定所要時間を論点ごとに割り振る",
        ],
      },
      {
        id: "during",
        title: "会議中の運用",
        paragraphs: [
          "議事録テンプレートに沿って、発言ではなく『決定事項』『宿題』『未決事項』に絞って書きます。書記が逐語を追わないことで、参加者全員が議論に集中できます。",
        ],
        codeExamples: [
          {
            title: "議事録テンプレートの例",
            language: "text",
            code: `# 2026-04-16 プロダクトレビュー\n\n## 目的\n次四半期の方針について合意する\n\n## 決定事項\n- 新機能 X を 5 月リリースに含める\n- ユーザビリティテストを 4/25 に実施\n\n## 宿題\n- [ ] @taro: 仕様書を 4/20 までに更新\n- [ ] @hanako: 被験者リストを 4/22 までに作成\n\n## 未決事項\n- 価格モデルの最終決定（次回持ち越し）`,
          },
        ],
      },
      {
        id: "followup",
        title: "終了後のフォロー",
        bullets: [
          "宿題は担当者と期限を必ず付けて Notion に残す",
          "決定事項を関係者へ共有",
          "未決事項は次回アジェンダに繰り上げる",
          "1 週間後に進捗確認のリマインドをセット",
          "宿題の完了率を四半期で振り返る",
        ],
      },
    ],
  },
  {
    author: "notion",
    skill: "research-documentation",
    title: "Notion 調査ドキュメンテーション",
    authorLabel: "Notion",
    summary:
      "複数の Notion 情報を横断して調査結果を文書化するためのスキルです。",
    intro:
      "調査ドキュメントは『事実』『解釈』『推測』が混ざったまま提出されると、読み手が判断を誤ります。このスキルは、社内外の情報を集約しつつ、事実と解釈を分けて記述する型を提供し、再利用可能な調査資産を作ります。",
    description:
      "情報源の整理、引用ルール、結論と根拠の分離、レビューと更新のサイクルなど、調査ドキュメントの質を担保するための要素をまとめます。",
    installCommand: "npx skills add https://github.com/notion/skills --skill research-documentation",
    githubUrl: "https://github.com/makenotion",
    localHref: "/agent-skills/notion/research-documentation",
    categorySlug: "research",
    categoryTitle: "リサーチスキル",
    mockup: "article",
    sections: [
      {
        id: "structure",
        title: "ドキュメントの型",
        bullets: [
          "結論を冒頭で言い切る",
          "根拠を箇条書きで並べ、それぞれに出典を付ける",
          "議論の余地がある論点は別セクションに分ける",
          "次のアクション候補を末尾に明記する",
          "TL;DR を 100 字以内で書く",
        ],
      },
      {
        id: "sources",
        title: "情報源の扱い",
        paragraphs: [
          "Notion ページ内のリンクと外部 URL を区別し、いつ参照したかを併記します。一次情報と二次情報を必ず分けて表記すると、再利用時の信頼性が大きく上がります。",
        ],
        table: {
          headers: ["ソース種別", "扱い", "賞味期限"],
          rows: [
            ["公式ドキュメント", "一次情報", "長"],
            ["技術ブログ", "二次情報", "中"],
            ["SNS / 噂", "未確認情報", "短（要確認）"],
            ["インタビュー", "一次情報", "中"],
          ],
        },
      },
      {
        id: "review",
        title: "レビューと更新",
        bullets: [
          "事実と解釈を別ブロックに分けてレビューする",
          "数値の出典は必ず追跡できる状態にする",
          "更新日と更新者を明示する",
          "古くなった内容は『要更新』ラベルで通知",
          "四半期に 1 回、棚卸しの定例を入れる",
        ],
      },
    ],
  },
  {
    author: "notion",
    skill: "spec-to-implementation",
    title: "Notion 仕様から実装へ",
    authorLabel: "Notion",
    summary:
      "Notion 上の仕様をタスクや実装計画へ落とし込むための支援を行います。",
    intro:
      "プロダクト仕様書は『書いてある』だけでは実装に進めません。曖昧な箇所の確認、影響範囲の洗い出し、タスクの粒度調整が必要です。このスキルは、Notion 上の仕様を読み解き、実装可能なタスクと段取りに分解するまでを支援します。",
    description:
      "受け入れ基準の抽出、タスク分解、リスクの洗い出し、リリース後の観察指標までを扱い、仕様 → 実装の橋渡しを安定化します。",
    installCommand:
      "npx skills add https://github.com/notion/skills --skill spec-to-implementation",
    githubUrl: "https://github.com/makenotion",
    localHref: "/agent-skills/notion/spec-to-implementation",
    categorySlug: "development",
    categoryTitle: "開発スキル",
    mockup: "doc",
    sections: [
      {
        id: "intake",
        title: "仕様の読み解き",
        bullets: [
          "ユーザーストーリーと受け入れ基準を抽出する",
          "曖昧な記述・前提が伏せられている箇所を洗い出す",
          "影響範囲（画面・API・データ）を一覧化する",
          "外部依存・スケジュール制約を明示する",
          "テストシナリオの観点を仕様から逆算する",
        ],
      },
      {
        id: "breakdown",
        title: "タスク分解",
        paragraphs: [
          "1 タスクは半日〜1 日で終わる粒度に揃えます。設計タスク・実装タスク・検証タスクを分けて並べると、進捗の把握が楽になります。",
        ],
        table: {
          headers: ["フェーズ", "タスク例", "成果物"],
          rows: [
            ["設計", "DB スキーマ設計 / API 設計", "ER 図 / OpenAPI"],
            ["実装", "API / UI / バリデーション実装", "コード + ユニットテスト"],
            ["検証", "結合テスト / E2E", "テスト結果 + バグチケット"],
            ["リリース", "デプロイ / フィーチャーフラグ", "リリースノート"],
          ],
        },
      },
      {
        id: "risk",
        title: "リスクと打ち手",
        bullets: [
          "未確定要素は仮置きの値と確認期限をセットで残す",
          "外部 API や 3rd party 依存は早期に検証",
          "ロールバック方法を最初の段階で決める",
          "リリース後に観察すべき指標を仕様に書き戻す",
          "段階リリース（10% → 50% → 100%）の計画を立てる",
        ],
      },
    ],
  },
];

export function getSkill(author: string, skill: string): Skill | undefined {
  return allSkills.find((entry) => entry.author === author && entry.skill === skill);
}

export function getSkillsByCategory(slug: string): Skill[] {
  return allSkills.filter((entry) => entry.categorySlug === slug);
}
