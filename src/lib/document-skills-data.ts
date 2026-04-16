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

export type DocumentSkill = {
  author: string;
  skill: string;
  title: string;
  summary: string;
  description: string;
  installCommand: string;
  githubUrl: string;
  localHref: string;
  categoryTitle: string;
  sections: SkillSection[];
};

export const documentSkillsCategory = {
  title: "ドキュメントスキル",
  description:
    "文書、表計算、プレゼン、電子書籍などの成果物をAIエージェントと一緒に扱うためのスキル群です。ローカル版では、元サイトの情報設計を踏襲しながら、日本語で読みやすい独自コンテンツに再構成しています。",
  localHref: "/agent-skills/category/document",
};

export const documentSkills: DocumentSkill[] = [
  {
    author: "anthropic",
    skill: "docx",
    title: "Word 文書",
    summary:
      "コメント、変更履歴、書式を保ちながら Word 文書を作成・編集・確認するためのスキルです。",
    description:
      "会議メモの整形、レビュー反映、社外提出資料の清書など、.docx を崩さず扱いたい場面を想定したガイドです。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill docx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/docx",
    categoryTitle: "ドキュメントスキル",
    sections: [
      {
        id: "overview",
        title: "概要",
        paragraphs: [
          "Word 文書は ZIP 化された XML の集合なので、見た目を崩さずに扱うには『どの手段で編集するか』を先に決めるのが重要です。",
          "このページでは、新規作成、既存文書編集、変更履歴対応、テキスト抽出の4つを中心に、実務で破綻しづらい進め方へ整理しています。",
        ],
      },
      {
        id: "quick-reference",
        title: "クイックリファレンス",
        table: {
          headers: ["やりたいこと", "おすすめの進め方"],
          rows: [
            ["本文をざっと確認したい", "Pandoc や MarkItDown でテキスト抽出して構造を把握する"],
            ["新規文書を作りたい", "テンプレートがあるなら複製、なければ docx ライブラリで生成する"],
            ["既存文書を直したい", "元ファイルを複製してから段落単位で差分を入れる"],
            ["変更履歴を確定したい", "LibreOffice や Word 系ツールで承認後に再出力する"],
          ],
        },
      },
      {
        id: "new-documents",
        title: "新規文書の作り方",
        paragraphs: [
          "新規作成では、いきなり本文から書くより『タイトル・見出し階層・表・注意書き』の順で骨組みを先に入れると崩れにくくなります。",
          "社内テンプレートがある場合はそれを複製し、フォント・余白・見出しスタイルを踏襲してください。",
        ],
        codeExamples: [
          {
            title: "Node.js で文書の骨組みを作る例",
            language: "ts",
            code: `import { Document, Packer, Paragraph, HeadingLevel } from "docx";\nimport { writeFileSync } from "node:fs";\n\nconst doc = new Document({\n  sections: [\n    {\n      children: [\n        new Paragraph({ text: "四半期レビュー報告書", heading: HeadingLevel.TITLE }),\n        new Paragraph({ text: "1. 背景", heading: HeadingLevel.HEADING_1 }),\n        new Paragraph("目的と前提条件をここに記載"),\n      ],\n    },\n  ],\n});\n\nconst buffer = await Packer.toBuffer(doc);\nwriteFileSync("quarterly-review.docx", buffer);`,
          },
        ],
      },
      {
        id: "editing",
        title: "既存文書の編集フロー",
        bullets: [
          "必ず元ファイルを複製してから触る",
          "先に全文をテキスト化して、どの段落を直すかを特定する",
          "表や脚注がある場合は、本文と別に確認ポイントを持つ",
          "最終的に Word 互換ビューアで見た目を確認する",
        ],
        codeExamples: [
          {
            title: "内容確認用に Markdown へ変換する例",
            language: "bash",
            code: "pandoc --track-changes=all proposal.docx -o proposal.md",
          },
        ],
      },
      {
        id: "xml-reference",
        title: "XML レベルで触るときの考え方",
        paragraphs: [
          "高度な差し替えが必要な場合だけ、docx を展開して XML を直接編集します。通常業務では頻度は高くありません。",
          "直接編集する場合でも、styles.xml と document.xml の関係を壊すと全体の見た目が崩れるため、テキスト置換だけで終わらせないようにします。",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "pdf",
    title: "PDF",
    summary:
      "抽出、生成、結合、フォーム入力まで、PDF 業務をまとめて扱うためのスキルです。",
    description:
      "請求書や契約書の抽出、複数PDFの結合、帳票フォーム入力など、PDF を実務処理する場面向けに整理しています。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill pdf",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/pdf",
    categoryTitle: "ドキュメントスキル",
    sections: [
      {
        id: "overview",
        title: "概要",
        paragraphs: [
          "PDF は見た目の再現性が高い反面、編集や抽出の方法が目的ごとに分かれます。",
          "このページでは、まず『読む』『抜き出す』『まとめる』『書き込む』を分けて考える実務向けの流れを示しています。",
        ],
      },
      {
        id: "quick-start",
        title: "クイックスタート",
        codeExamples: [
          {
            title: "Python でテキスト抽出する最小例",
            language: "py",
            code: `from pypdf import PdfReader\n\nreader = PdfReader("document.pdf")\ntext = ""\nfor page in reader.pages:\n    text += page.extract_text() or ""\n\nprint(text[:2000])`,
          },
        ],
      },
      {
        id: "libraries",
        title: "よく使うライブラリ",
        table: {
          headers: ["用途", "候補", "向いている作業"],
          rows: [
            ["基本操作", "pypdf", "結合、分割、テキスト抽出、メタデータ確認"],
            ["表抽出", "tabula / camelot", "請求書や帳票から表を取り出す"],
            ["OCR", "ocrmypdf", "スキャンPDFを検索可能にする"],
            ["CLI 補助", "pdftotext / pdfinfo", "素早い確認やバッチ処理"],
          ],
        },
      },
      {
        id: "common-tasks",
        title: "よくある作業",
        bullets: [
          "複数の PDF を結合して配布用の1冊にまとめる",
          "ページ単位で分割して案件別に保存する",
          "フォーム付き PDF に定型値を書き込む",
          "表や文章を抽出して CSV や Markdown に変換する",
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
        id: "next-steps",
        title: "実務での次の一手",
        paragraphs: [
          "PDF の処理で一番事故が起きやすいのは、抽出後の欠損や文字化けを見逃すことです。自動化するほど、最後に人の目でサンプル確認する工程を残してください。",
          "フォーム入力や大量処理は、1件だけ正しく流れるかを先に確認してからバッチ化するのが安全です。",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "pptx",
    title: "PowerPoint プレゼン",
    summary:
      "プレゼン資料の作成、編集、レイアウト調整、スピーカーノート運用まで支援するスキルです。",
    description:
      "企画提案、社内報告、営業資料など、PowerPoint を雰囲気ではなく構成と見た目の両面から整えるためのガイドです。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill pptx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/pptx",
    categoryTitle: "ドキュメントスキル",
    sections: [
      {
        id: "quick-reference",
        title: "クイックリファレンス",
        table: {
          headers: ["やりたいこと", "おすすめの進め方"],
          rows: [
            ["資料の中身を把握したい", "まず全スライドをサムネイル化して全体の流れを見る"],
            ["既存資料を直したい", "テンプレート規則を観察してから段階的に編集する"],
            ["ゼロから作りたい", "先にストーリーとスライド役割を定義してから実装する"],
            ["品質確認したい", "文字量、揃え、見出し階層、注釈漏れを最終チェックする"],
          ],
        },
      },
      {
        id: "reading",
        title: "内容確認の進め方",
        paragraphs: [
          "PowerPoint は本文テキストだけ読むと構造を誤解しがちです。全スライドのレイアウトを先に把握し、次に要点テキストを追う流れが安定します。",
        ],
        codeExamples: [
          {
            title: "サムネイルを作って全体を見る例",
            language: "bash",
            code: "python scripts/thumbnail.py presentation.pptx",
          },
        ],
      },
      {
        id: "editing-workflow",
        title: "編集ワークフロー",
        bullets: [
          "テンプレートに使われている色、余白、見出しサイズを先に観察する",
          "1枚目から順に直さず、まず結論スライドと重要図版を固める",
          "情報量が多いページは、分割した方が伝わるかを先に検討する",
          "話す用の補足はスピーカーノートへ逃がし、スライド面は軽く保つ",
        ],
      },
      {
        id: "from-scratch",
        title: "ゼロから作るときの考え方",
        paragraphs: [
          "白背景に箇条書きだけの資料は、内容が良くても印象が弱く見えます。資料の目的に応じて色と強弱をつける方針を最初に決めてください。",
          "『結論』『根拠』『比較』『次のアクション』のどれを担うスライドなのかを定義してから作ると、無駄なページが減ります。",
        ],
      },
      {
        id: "qa",
        title: "提出前チェック",
        bullets: [
          "スライドごとの主メッセージが1文で言えるか",
          "図表や数値の出典が明記されているか",
          "フォントサイズや余白のばらつきがないか",
          "プロジェクター表示でも読める配色になっているか",
        ],
      },
    ],
  },
  {
    author: "smerchek",
    skill: "markdown-to-epub",
    title: "Markdown から EPUB",
    summary:
      "Markdown の原稿や会話ログを、配布しやすい EPUB 形式へ変換するためのスキルです。",
    description:
      "調査レポート、長文メモ、ブログ原稿を電子書籍風にまとめたいときに、章構成と変換の考え方を整理したページです。",
    installCommand:
      "npx skills add https://github.com/smerchek/claude-epub-skill --skill markdown-to-epub-converter",
    githubUrl: "https://github.com/smerchek/claude-epub-skill",
    localHref: "/agent-skills/smerchek/markdown-to-epub",
    categoryTitle: "ドキュメントスキル",
    sections: [
      {
        id: "overview",
        title: "概要",
        paragraphs: [
          "Markdown は情報整理に強い一方、そのままだと配布物としては読みにくいことがあります。EPUB 化すると、長文をデバイス横断で読みやすく提供できます。",
          "このスキルは、章立ての作り方と EPUB 変換の前処理をまとめて扱う想定です。",
        ],
      },
      {
        id: "input-formats",
        title: "入力形式",
        bullets: [
          "そのまま Markdown テキストを貼り付ける",
          "ローカルの .md ファイルを指定する",
          "チャットの要約を Markdown に整えてから変換する",
        ],
      },
      {
        id: "how-it-works",
        title: "変換の考え方",
        paragraphs: [
          "H1 は章、H2 は節として扱うと、電子書籍として自然な目次構造を作りやすくなります。",
          "画像やコードブロックを含む場合は、本文量よりも表示崩れを優先して検証するのが安全です。",
        ],
        codeExamples: [
          {
            title: "入力 Markdown の例",
            language: "md",
            code: `# 事業戦略メモ\n\n## 1. 市場環境\n市場の前提条件を整理する。\n\n## 2. 仮説\n- 仮説A\n- 仮説B`,
          },
        ],
      },
      {
        id: "output",
        title: "出力品質を上げるコツ",
        bullets: [
          "タイトル、著者名、説明文などのメタ情報を埋める",
          "章ごとの長さを大きく偏らせない",
          "脚注や外部リンクが多い場合は、巻末にまとめる構成も検討する",
          "端末ごとの見え方差を前提に、強い装飾より読みやすさを優先する",
        ],
      },
    ],
  },
  {
    author: "anthropic",
    skill: "xlsx",
    title: "XLSX 表計算",
    summary:
      "表計算ファイルを作成・編集・分析しながら、数式や書式を壊さず扱うためのスキルです。",
    description:
      "予実管理、売上分析、テンプレート更新など、Excel 系ファイルを実務で安全に扱うための流れをまとめています。",
    installCommand: "npx skills add https://github.com/anthropics/skills --skill xlsx",
    githubUrl: "https://github.com/anthropics/skills",
    localHref: "/agent-skills/anthropic/xlsx",
    categoryTitle: "ドキュメントスキル",
    sections: [
      {
        id: "overview",
        title: "概要",
        paragraphs: [
          "表計算ファイルは『見た目』と『数式』の両方が成果物です。値だけ合っていても、数式が壊れていれば運用に乗りません。",
          "このページでは、特に再計算可能なモデルを保つことを最優先にしています。",
        ],
      },
      {
        id: "requirements",
        title: "重要な前提",
        bullets: [
          "ハードコードではなく数式を使って再計算できる状態を保つ",
          "既存テンプレートを更新するときは配色、フォント、列幅を踏襲する",
          "数式エラー（#REF! / #DIV/0! など）を残したまま納品しない",
          "入力セル、計算セル、参照セルの役割を見た目でも区別する",
        ],
      },
      {
        id: "workflow",
        title: "実務フロー",
        table: {
          headers: ["段階", "確認すること"],
          rows: [
            ["読み込み", "シート構成、主要な数式列、色分けルールを把握する"],
            ["編集", "入力値だけを変えるのか、式も追加するのかを先に決める"],
            ["検証", "再計算、参照切れ、合計の整合性を確認する"],
            ["提出", "主要シートを人の目でも確認し、値と見た目の両方をチェックする"],
          ],
        },
      },
      {
        id: "formula-check",
        title: "数式チェックの観点",
        codeExamples: [
          {
            title: "数式を使う列設計のイメージ",
            language: "text",
            code: `売上 = 単価 * 数量\n粗利 = 売上 - 原価\n粗利率 = IFERROR(粗利 / 売上, 0)`,
          },
        ],
        bullets: [
          "同じ列で数式パターンが途中から変わっていないか",
          "シート名変更で参照が切れていないか",
          "集計表と明細の合計が一致しているか",
          "フィルタや並び替え後にも意図どおり使えるか",
        ],
      },
      {
        id: "best-practices",
        title: "ベストプラクティス",
        paragraphs: [
          "ファイナンス系や予実管理のシートでは、入力値と計算値の色を分けておくと引き継ぎが非常に楽になります。",
          "配布用の PDF 化や画像化は最後の工程にし、元の xlsx を正とした運用に寄せるのが安全です。",
        ],
      },
    ],
  },
];

export function getDocumentSkill(author: string, skill: string) {
  return documentSkills.find((entry) => entry.author === author && entry.skill === skill);
}
