import type { MockupVariant } from "@/lib/skills-content";

type IconProps = { className?: string };

const categoryIconMap: Record<string, string> = {
  featured: "sparkles",
  document: "file-text",
  "browser-automation": "mouse-pointer-click",
  database: "database",
  development: "code-2",
  creative: "palette",
  media: "film",
  productivity: "list-checks",
  "data-analysis": "bar-chart-3",
  research: "search",
};

export function CategoryIcon({
  slug,
  color,
  size = 20,
  className,
}: {
  slug: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  const iconName = categoryIconMap[slug] ?? "circle";
  const hex = (color ?? "#475569").replace("#", "");
  const src = `https://api.iconify.design/lucide/${iconName}.svg?color=%23${hex}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={className ?? "category-icon-img"}
    />
  );
}

const brandIconMap: Record<string, string> = {
  cloudflare: "logos:cloudflare",
  figma: "logos:figma",
  vercel: "logos:vercel-icon",
  google: "logos:google-icon",
  notion: "logos:notion-icon",
};

export function BrandMark({
  brandKey,
  size = 32,
  className,
}: {
  brandKey: string;
  size?: number;
  className?: string;
}) {
  const iconPath = brandIconMap[brandKey];
  if (!iconPath) return null;
  const [prefix, name] = iconPath.split(":");
  const src = `https://api.iconify.design/${prefix}/${name}.svg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={className ?? "brand-mark-img"}
    />
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "flow-arrow-icon"}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "external-icon"}
    >
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "spark-icon"}
    >
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m6 18 2.5-2.5" />
      <path d="m15.5 8.5 2.5-2.5" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "check-icon"}
    >
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "copy-icon"}
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function Panel({
  children,
  tone = "muted",
}: {
  children?: React.ReactNode;
  tone?: "muted" | "accent";
}) {
  const fill = tone === "accent" ? "var(--mockup-fill)" : "#f8fafc";
  const stroke = tone === "accent" ? "var(--mockup-border)" : "#e5e7eb";
  return (
    <svg viewBox="0 0 240 160" className="mockup-panel-svg" aria-hidden="true">
      <rect x="4" y="4" width="232" height="152" rx="14" fill={fill} stroke={stroke} strokeWidth={1.5} />
      {children}
    </svg>
  );
}

function Bar({ x, y, width, color = "#cbd5e1" }: { x: number; y: number; width: number; color?: string }) {
  return <rect x={x} y={y} width={width} height={6} rx={3} fill={color} />;
}

function Node({ x, y, w, h, color = "#e2e8f0", r = 6 }: { x: number; y: number; w: number; h: number; color?: string; r?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={color} />;
}

function AccentBar({ x, y, width }: { x: number; y: number; width: number }) {
  return <rect x={x} y={y} width={width} height={6} rx={3} fill="var(--mockup-accent)" />;
}

export function SkillMockup({ variant }: { variant: MockupVariant }) {
  return (
    <div className="mockup-shell">
      <div className="mockup-side">
        <span className="mockup-badge">適用前</span>
        {renderBefore(variant)}
      </div>
      <div className="mockup-arrow" aria-hidden="true">
        <ArrowRight />
      </div>
      <div className="mockup-side">
        <span className="mockup-badge is-accent">適用後</span>
        {renderAfter(variant)}
      </div>
    </div>
  );
}

function renderBefore(variant: MockupVariant) {
  switch (variant) {
    case "doc":
      return (
        <Panel>
          <Bar x={22} y={28} width={140} color="#cbd5e1" />
          <Bar x={22} y={44} width={190} color="#cbd5e1" />
          <Bar x={22} y={60} width={170} color="#cbd5e1" />
          <Bar x={22} y={84} width={110} color="#cbd5e1" />
          <Bar x={22} y={100} width={200} color="#cbd5e1" />
          <Bar x={22} y={116} width={160} color="#cbd5e1" />
          <g fill="#fef3c7" stroke="#f59e0b" strokeWidth={1}>
            <rect x={180} y={54} width={40} height={14} rx={3} />
          </g>
          <text x={184} y={65} fontSize={8} fill="#92400e">修正履歴</text>
        </Panel>
      );
    case "pdf":
      return (
        <Panel>
          <rect x={28} y={24} width={140} height={110} rx={6} fill="#fff" stroke="#cbd5e1" />
          <text x={40} y={46} fontSize={11} fill="#334155" fontWeight="bold">請求書 #A-2091</text>
          <Bar x={40} y={60} width={100} color="#e2e8f0" />
          <Bar x={40} y={74} width={120} color="#e2e8f0" />
          <Bar x={40} y={88} width={80} color="#e2e8f0" />
          <Bar x={40} y={108} width={110} color="#cbd5e1" />
          <rect x={175} y={24} width={48} height={110} rx={4} fill="#f1f5f9" />
          <Bar x={180} y={36} width={38} color="#cbd5e1" />
          <Bar x={180} y={48} width={32} color="#cbd5e1" />
          <Bar x={180} y={60} width={36} color="#cbd5e1" />
        </Panel>
      );
    case "pptx":
      return (
        <Panel>
          <rect x={28} y={24} width={184} height={110} rx={6} fill="#fff" stroke="#cbd5e1" />
          <Bar x={44} y={48} width={100} color="#cbd5e1" />
          <Bar x={44} y={68} width={140} color="#e2e8f0" />
          <Bar x={44} y={80} width={120} color="#e2e8f0" />
          <Bar x={44} y={92} width={130} color="#e2e8f0" />
          <Bar x={44} y={104} width={90} color="#e2e8f0" />
        </Panel>
      );
    case "xlsx":
      return (
        <Panel>
          <g stroke="#cbd5e1" strokeWidth={1}>
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1={20} x2={220} y1={30 + i * 22} y2={30 + i * 22} />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`v${i}`} y1={30} y2={140} x1={20 + i * 40} x2={20 + i * 40} />
            ))}
          </g>
          <rect x={20} y={30} width={200} height={22} fill="#e2e8f0" />
          <text x={28} y={72} fontSize={10} fill="#64748b">100</text>
          <text x={28} y={94} fontSize={10} fill="#64748b">250</text>
          <text x={108} y={72} fontSize={10} fill="#ef4444">#REF!</text>
          <text x={68} y={116} fontSize={10} fill="#64748b">120</text>
        </Panel>
      );
    case "epub":
      return (
        <Panel>
          <Bar x={22} y={28} width={180} color="#cbd5e1" />
          <Bar x={22} y={44} width={160} color="#cbd5e1" />
          <Bar x={22} y={58} width={190} color="#cbd5e1" />
          <Bar x={22} y={72} width={140} color="#cbd5e1" />
          <Bar x={22} y={86} width={180} color="#cbd5e1" />
          <Bar x={22} y={100} width={150} color="#cbd5e1" />
          <Bar x={22} y={114} width={200} color="#cbd5e1" />
          <Bar x={22} y={128} width={170} color="#cbd5e1" />
        </Panel>
      );
    case "frontend":
      return (
        <Panel>
          <Node x={28} y={28} w={184} h={20} color="#e2e8f0" />
          <Node x={28} y={56} w={90} h={70} color="#e2e8f0" />
          <Node x={124} y={56} w={88} h={30} color="#e2e8f0" />
          <Node x={124} y={96} w={88} h={30} color="#e2e8f0" />
          <Node x={28} y={134} w={184} h={14} color="#e2e8f0" />
        </Panel>
      );
    case "react":
      return (
        <Panel>
          <rect x={24} y={28} width={70} height={36} rx={6} fill="#e2e8f0" />
          <rect x={104} y={28} width={70} height={36} rx={6} fill="#e2e8f0" />
          <rect x={184} y={28} width={36} height={36} rx={6} fill="#e2e8f0" />
          <rect x={44} y={78} width={70} height={36} rx={6} fill="#e2e8f0" />
          <rect x={124} y={78} width={70} height={36} rx={6} fill="#e2e8f0" />
          <path d="M60 64 L60 78 M138 64 L138 78 M200 64 L160 78" stroke="#cbd5e1" strokeWidth={1.5} />
          <text x={60} y={140} fontSize={9} fill="#94a3b8" textAnchor="middle">state が分散</text>
        </Panel>
      );
    case "notebook":
      return (
        <Panel>
          <circle cx={120} cy={84} r={28} fill="#fff" stroke="#cbd5e1" />
          <text x={120} y={90} fontSize={20} fill="#94a3b8" textAnchor="middle">?</text>
          <Bar x={30} y={134} width={180} color="#e2e8f0" />
        </Panel>
      );
    case "youtube":
      return (
        <Panel>
          <rect x={28} y={28} width={184} height={90} rx={8} fill="#111827" />
          <polygon points="112,60 112,88 138,74" fill="#fff" />
          <Bar x={28} y={128} width={150} color="#e2e8f0" />
        </Panel>
      );
    case "agent-browser":
      return (
        <Panel>
          <rect x={28} y={28} width={184} height={110} rx={8} fill="#fff" stroke="#cbd5e1" />
          <rect x={28} y={28} width={184} height={16} rx={4} fill="#f1f5f9" />
          <circle cx={38} cy={36} r={2} fill="#ef4444" />
          <circle cx={48} cy={36} r={2} fill="#f59e0b" />
          <circle cx={58} cy={36} r={2} fill="#10b981" />
          <Bar x={44} y={60} width={120} color="#e2e8f0" />
          <Bar x={44} y={74} width={100} color="#e2e8f0" />
          <rect x={44} y={90} width={60} height={22} rx={6} fill="#e2e8f0" />
          <path d="M100 108 l6 -4 l-2 6 l5 0 l-6 6 l1 -6z" fill="#64748b" />
        </Panel>
      );
    case "browser-use":
      return (
        <Panel>
          <rect x={24} y={30} width={100} height={100} rx={8} fill="#fff" stroke="#cbd5e1" />
          <rect x={116} y={50} width={100} height={100} rx={8} fill="#fff" stroke="#cbd5e1" />
          <Bar x={32} y={46} width={80} color="#e2e8f0" />
          <Bar x={32} y={60} width={60} color="#e2e8f0" />
          <Bar x={124} y={66} width={80} color="#e2e8f0" />
          <Bar x={124} y={80} width={60} color="#e2e8f0" />
        </Panel>
      );
    case "playwright":
      return (
        <Panel>
          <rect x={28} y={32} width={184} height={20} rx={4} fill="#e2e8f0" />
          <rect x={28} y={60} width={184} height={20} rx={4} fill="#e2e8f0" />
          <rect x={28} y={88} width={184} height={20} rx={4} fill="#e2e8f0" />
          <rect x={28} y={116} width={184} height={20} rx={4} fill="#fee2e2" />
          <text x={200} y={130} fontSize={9} fill="#ef4444" textAnchor="end">失敗</text>
        </Panel>
      );
    case "db-schema":
      return (
        <Panel>
          <circle cx={60} cy={50} r={6} fill="#cbd5e1" />
          <text x={72} y={54} fontSize={9} fill="#64748b">user_id</text>
          <circle cx={160} cy={70} r={6} fill="#cbd5e1" />
          <text x={172} y={74} fontSize={9} fill="#64748b">order</text>
          <circle cx={90} cy={110} r={6} fill="#cbd5e1" />
          <text x={102} y={114} fontSize={9} fill="#64748b">product</text>
          <text x={40} y={30} fontSize={9} fill="#94a3b8">未整理のメモ</text>
        </Panel>
      );
    case "mysql":
      return (
        <Panel>
          <rect x={22} y={30} width={200} height={100} rx={6} fill="#0f172a" />
          <text x={32} y={50} fontSize={10} fill="#cbd5e1" fontFamily="monospace">SELECT * FROM orders</text>
          <text x={32} y={66} fontSize={10} fill="#cbd5e1" fontFamily="monospace">WHERE customer_id=?</text>
          <text x={32} y={96} fontSize={10} fill="#f87171" fontFamily="monospace">slow: 4.2s</text>
          <text x={32} y={114} fontSize={10} fill="#94a3b8" fontFamily="monospace">rows: 1,240,503</text>
        </Panel>
      );
    case "neon":
      return (
        <Panel>
          <ellipse cx={120} cy={52} rx={48} ry={14} fill="#cbd5e1" />
          <path d="M72 52v50c0 8 22 14 48 14s48-6 48-14V52" fill="#e2e8f0" stroke="#cbd5e1" />
          <text x={120} y={130} fontSize={10} fill="#64748b" textAnchor="middle">main のみ</text>
        </Panel>
      );
    case "postgres":
      return (
        <Panel>
          <rect x={22} y={28} width={200} height={104} rx={6} fill="#0f172a" />
          <text x={32} y={50} fontSize={10} fill="#cbd5e1" fontFamily="monospace">EXPLAIN ANALYZE</text>
          <text x={32} y={66} fontSize={10} fill="#cbd5e1" fontFamily="monospace">SELECT ...</text>
          <text x={32} y={96} fontSize={10} fill="#f87171" fontFamily="monospace">Seq Scan: 2.1s</text>
          <text x={32} y={114} fontSize={10} fill="#94a3b8" fontFamily="monospace">rows=4,201,980</text>
        </Panel>
      );
    case "ast":
      return (
        <Panel>
          <text x={26} y={42} fontSize={10} fontFamily="monospace" fill="#64748b">// oldFn(1)</text>
          <text x={26} y={58} fontSize={10} fontFamily="monospace" fill="#334155">oldFn(42)</text>
          <text x={26} y={74} fontSize={10} fontFamily="monospace" fill="#334155">const s = "oldFn(...)"</text>
          <text x={26} y={90} fontSize={10} fontFamily="monospace" fill="#334155">oldFn( user )</text>
          <rect x={22} y={46} width={200} height={16} fill="#fef3c7" opacity={0.5} />
          <rect x={22} y={78} width={200} height={16} fill="#fef3c7" opacity={0.5} />
          <text x={26} y={126} fontSize={9} fill="#ef4444">文字列も誤検出</text>
        </Panel>
      );
    case "aws-cost":
      return (
        <Panel>
          <Bar x={30} y={36} width={180} color="#cbd5e1" />
          <Bar x={30} y={54} width={140} color="#cbd5e1" />
          <Bar x={30} y={72} width={190} color="#cbd5e1" />
          <Bar x={30} y={90} width={110} color="#cbd5e1" />
          <Bar x={30} y={108} width={170} color="#cbd5e1" />
          <text x={30} y={132} fontSize={10} fill="#94a3b8">¥892,400 / 月 (内訳不明)</text>
        </Panel>
      );
    case "cloudflare-agent":
      return (
        <Panel>
          <rect x={26} y={30} width={190} height={100} rx={8} fill="#0f172a" />
          <text x={38} y={50} fontSize={10} fontFamily="monospace" fill="#cbd5e1">async function agent() {"{"}</text>
          <text x={44} y={66} fontSize={10} fontFamily="monospace" fill="#94a3b8">// TODO: ツール連携</text>
          <text x={44} y={82} fontSize={10} fontFamily="monospace" fill="#94a3b8">// TODO: 状態保持</text>
          <text x={44} y={98} fontSize={10} fontFamily="monospace" fill="#94a3b8">// TODO: 再試行</text>
          <text x={38} y={118} fontSize={10} fontFamily="monospace" fill="#cbd5e1">{"}"}</text>
        </Panel>
      );
    case "brand":
      return (
        <Panel>
          <circle cx={50} cy={50} r={12} fill="#ef4444" />
          <circle cx={90} cy={58} r={14} fill="#22c55e" />
          <circle cx={134} cy={44} r={10} fill="#3b82f6" />
          <circle cx={172} cy={60} r={12} fill="#a855f7" />
          <circle cx={74} cy={100} r={13} fill="#f59e0b" />
          <circle cx={136} cy={106} r={11} fill="#06b6d4" />
          <text x={120} y={142} fontSize={9} fill="#94a3b8" textAnchor="middle">色と書体がばらつく</text>
        </Panel>
      );
    case "canvas":
      return (
        <Panel>
          <rect x={30} y={30} width={180} height={100} rx={6} fill="#fff" stroke="#cbd5e1" />
          <circle cx={70} cy={60} r={14} fill="#cbd5e1" />
          <rect x={96} y={50} width={70} height={10} fill="#cbd5e1" />
          <rect x={96} y={66} width={50} height={8} fill="#e2e8f0" />
          <rect x={44} y={92} width={100} height={8} fill="#e2e8f0" />
          <rect x={44} y={108} width={80} height={8} fill="#e2e8f0" />
          <text x={180} y={116} fontSize={9} fill="#94a3b8">雑多</text>
        </Panel>
      );
    case "image":
      return (
        <Panel>
          <rect x={32} y={32} width={176} height={96} rx={6} fill="#1e293b" />
          <circle cx={90} cy={70} r={16} fill="#334155" />
          <path d="M40 120 L80 90 L110 110 L150 80 L200 120 Z" fill="#334155" />
          <text x={40} y={140} fontSize={9} fill="#94a3b8">暗くてコントラスト不足</text>
        </Panel>
      );
    case "domain":
      return (
        <Panel>
          <text x={30} y={44} fontSize={10} fill="#64748b">・新サービス案</text>
          <text x={30} y={62} fontSize={10} fill="#64748b">・覚えやすい名前？</text>
          <text x={30} y={80} fontSize={10} fill="#64748b">・ドメイン取れるかな</text>
          <text x={30} y={98} fontSize={10} fill="#64748b">・既存と被らない？</text>
          <text x={30} y={128} fontSize={10} fill="#94a3b8">候補も未整理</text>
        </Panel>
      );
    case "file":
      return (
        <Panel>
          <g>
            <rect x={28} y={30} width={60} height={14} rx={3} fill="#e2e8f0" />
            <rect x={92} y={36} width={100} height={14} rx={3} fill="#e2e8f0" />
            <rect x={36} y={56} width={80} height={14} rx={3} fill="#e2e8f0" />
            <rect x={120} y={60} width={70} height={14} rx={3} fill="#e2e8f0" />
            <rect x={28} y={80} width={120} height={14} rx={3} fill="#e2e8f0" />
            <rect x={60} y={104} width={90} height={14} rx={3} fill="#e2e8f0" />
            <rect x={156} y={100} width={56} height={14} rx={3} fill="#e2e8f0" />
          </g>
          <text x={30} y={138} fontSize={9} fill="#94a3b8">フォルダ構成が散らかり</text>
        </Panel>
      );
    case "csv":
      return (
        <Panel>
          <g fontFamily="monospace" fontSize={9} fill="#64748b">
            <text x={26} y={40}>id,name,amount,date</text>
            <text x={26} y={56}>1,A,,2026-04-02</text>
            <text x={26} y={72}>2,B,1200,2026-04-03</text>
            <text x={26} y={88}>3,,980,2026-04-05</text>
            <text x={26} y={104}>4,D,450,</text>
            <text x={26} y={120}>5,E,,2026-04-09</text>
            <text x={26} y={136}>...欠損多数</text>
          </g>
        </Panel>
      );
    case "vendor":
      return (
        <Panel>
          <g fontSize={9} fill="#64748b">
            <text x={26} y={40}>Acme SaaS ¥42,000</text>
            <text x={26} y={56}>同系ツール ¥28,000</text>
            <text x={26} y={72}>Acme SaaS ¥42,000</text>
            <text x={26} y={88}>...使ってない? ¥18,000</text>
            <text x={26} y={104}>重複? ¥12,000</text>
            <text x={26} y={120}>未分類 ¥96,000</text>
          </g>
          <text x={26} y={140} fontSize={9} fill="#94a3b8">全体像が見えない</text>
        </Panel>
      );
    case "article":
      return (
        <Panel>
          <rect x={26} y={28} width={190} height={12} fill="#e2e8f0" />
          <rect x={26} y={46} width={40} height={70} fill="#fef3c7" stroke="#f59e0b" strokeDasharray="3,2" />
          <text x={30} y={66} fontSize={8} fill="#92400e">広告</text>
          <Bar x={72} y={52} width={140} color="#e2e8f0" />
          <Bar x={72} y={66} width={120} color="#e2e8f0" />
          <Bar x={72} y={80} width={140} color="#e2e8f0" />
          <Bar x={72} y={94} width={100} color="#e2e8f0" />
          <Bar x={26} y={124} width={190} color="#e2e8f0" />
        </Panel>
      );
    case "lead":
      return (
        <Panel>
          <text x={26} y={42} fontSize={10} fill="#64748b">・会社名しか情報がない</text>
          <text x={26} y={60} fontSize={10} fill="#64748b">・事業内容は？</text>
          <text x={26} y={78} fontSize={10} fill="#64748b">・最近の動きは？</text>
          <text x={26} y={96} fontSize={10} fill="#64748b">・誰に当たる？</text>
          <text x={26} y={122} fontSize={10} fill="#94a3b8">調査に時間がかかる</text>
        </Panel>
      );
    default:
      return <Panel />;
  }
}

function renderAfter(variant: MockupVariant) {
  switch (variant) {
    case "doc":
      return (
        <Panel tone="accent">
          <AccentBar x={22} y={28} width={110} />
          <Bar x={22} y={46} width={200} />
          <Bar x={22} y={60} width={180} />
          <Bar x={22} y={74} width={160} />
          <AccentBar x={22} y={94} width={80} />
          <Bar x={22} y={110} width={200} />
          <Bar x={22} y={124} width={150} />
        </Panel>
      );
    case "pdf":
      return (
        <Panel tone="accent">
          <rect x={28} y={24} width={86} height={40} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={28} y={70} width={86} height={40} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={28} y={116} width={86} height={20} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <text x={36} y={38} fontSize={8} fill="#334155">表紙</text>
          <text x={36} y={82} fontSize={8} fill="#334155">本文</text>
          <text x={36} y={128} fontSize={8} fill="#334155">付録</text>
          <path d="M120 60 l20 0 M120 85 l20 0" stroke="var(--mockup-accent)" strokeWidth={1.5} />
          <rect x={148} y={24} width={78} height={112} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={158} y={38} width={58} />
          <Bar x={158} y={54} width={58} />
          <Bar x={158} y={68} width={40} />
          <Bar x={158} y={82} width={58} />
          <Bar x={158} y={96} width={50} />
          <Bar x={158} y={114} width={40} />
        </Panel>
      );
    case "pptx":
      return (
        <Panel tone="accent">
          <rect x={28} y={24} width={184} height={110} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={40} y={38} width={6} height={30} rx={3} fill="var(--mockup-accent)" />
          <text x={52} y={52} fontSize={11} fill="#0f172a" fontWeight="bold">結論</text>
          <AccentBar x={52} y={62} width={120} />
          <rect x={40} y={82} width={70} height={40} rx={4} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <rect x={120} y={82} width={70} height={40} rx={4} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <Bar x={50} y={98} width={50} />
          <Bar x={130} y={98} width={50} />
        </Panel>
      );
    case "xlsx":
      return (
        <Panel tone="accent">
          <rect x={20} y={24} width={200} height={14} rx={3} fill="var(--mockup-accent)" opacity={0.18} />
          <text x={26} y={34} fontSize={9} fontFamily="monospace" fill="var(--mockup-accent)">= 単価 * 数量</text>
          <g stroke="var(--mockup-border)" strokeWidth={1}>
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={`h${i}`} x1={20} x2={220} y1={48 + i * 22} y2={48 + i * 22} />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`v${i}`} y1={48} y2={136} x1={20 + i * 40} x2={20 + i * 40} />
            ))}
          </g>
          <rect x={20} y={48} width={40} height={22} fill="var(--mockup-accent)" opacity={0.15} />
          <rect x={20} y={70} width={40} height={22} fill="var(--mockup-accent)" opacity={0.15} />
          <text x={26} y={64} fontSize={10} fill="#0f172a">100</text>
          <text x={26} y={86} fontSize={10} fill="#0f172a">250</text>
          <text x={68} y={64} fontSize={10} fill="#0f172a">24</text>
          <text x={108} y={64} fontSize={10} fill="#0f172a">2,400</text>
          <text x={148} y={64} fontSize={10} fill="#0f172a">18%</text>
        </Panel>
      );
    case "epub":
      return (
        <Panel tone="accent">
          <rect x={32} y={22} width={80} height={116} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={40} y={36} width={60} />
          <Bar x={40} y={50} width={40} />
          <rect x={40} y={76} width={64} height={54} rx={4} fill="var(--mockup-fill)" />
          <rect x={128} y={22} width={88} height={116} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={138} y={40} fontSize={9} fill="#475569" fontWeight="bold">目次</text>
          <Bar x={138} y={52} width={60} />
          <Bar x={138} y={66} width={50} />
          <Bar x={138} y={80} width={64} />
          <Bar x={138} y={94} width={40} />
          <Bar x={138} y={108} width={60} />
          <Bar x={138} y={122} width={50} />
        </Panel>
      );
    case "frontend":
      return (
        <Panel tone="accent">
          <rect x={28} y={28} width={184} height={24} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={36} y={36} width={6} height={8} rx={2} fill="var(--mockup-accent)" />
          <Bar x={50} y={38} width={60} />
          <AccentBar x={28} y={64} width={90} />
          <Bar x={28} y={78} width={184} />
          <Bar x={28} y={90} width={160} />
          <rect x={28} y={108} width={184} height={32} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={180} y={118} width={24} height={12} rx={6} fill="var(--mockup-accent)" />
          <Bar x={36} y={122} width={90} />
        </Panel>
      );
    case "react":
      return (
        <Panel tone="accent">
          <rect x={24} y={24} width={192} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={34} y={42} fontSize={10} fill="#0f172a" fontFamily="monospace">&lt;Page&gt;</text>
          <rect x={44} y={64} width={70} height={32} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={124} y={64} width={92} height={32} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={64} y={108} width={50} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={124} y={108} width={52} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <path d="M80 96 L80 108 M150 96 L150 108" stroke="var(--mockup-accent)" strokeWidth={1.5} />
          <text x={120} y={82} fontSize={9} fill="var(--mockup-accent)" textAnchor="middle">Server</text>
        </Panel>
      );
    case "notebook":
      return (
        <Panel tone="accent">
          <rect x={24} y={24} width={76} height={14} rx={3} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <rect x={24} y={42} width={76} height={14} rx={3} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <rect x={24} y={60} width={76} height={14} rx={3} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <text x={30} y={34} fontSize={8} fill="#475569">PDF #1</text>
          <text x={30} y={52} fontSize={8} fill="#475569">議事録</text>
          <text x={30} y={70} fontSize={8} fill="#475569">仕様書</text>
          <rect x={108} y={24} width={116} height={110} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={116} y={38} width={70} />
          <Bar x={116} y={52} width={100} />
          <Bar x={116} y={66} width={90} />
          <Bar x={116} y={80} width={100} />
          <Bar x={116} y={94} width={70} />
          <text x={116} y={124} fontSize={8} fill="var(--mockup-accent)">出典: PDF #1, 議事録</text>
        </Panel>
      );
    case "youtube":
      return (
        <Panel tone="accent">
          <AccentBar x={22} y={26} width={60} />
          <Bar x={22} y={42} width={200} />
          <Bar x={22} y={56} width={180} />
          <Bar x={22} y={70} width={200} />
          <Bar x={22} y={84} width={160} />
          <Bar x={22} y={98} width={200} />
          <Bar x={22} y={112} width={180} />
          <Bar x={22} y={126} width={120} />
        </Panel>
      );
    case "agent-browser":
      return (
        <Panel tone="accent">
          <rect x={28} y={28} width={184} height={110} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={28} y={28} width={184} height={16} rx={4} fill="var(--mockup-fill)" />
          <g>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <circle cx={44} cy={60 + i * 22} r={6} fill="var(--mockup-accent)" />
                <path d={`M40 ${60 + i * 22} l3 3 l6 -6`} stroke="#fff" strokeWidth={1.5} fill="none" strokeLinecap="round" />
                <Bar x={58} y={57 + i * 22} width={120} />
              </g>
            ))}
          </g>
        </Panel>
      );
    case "browser-use":
      return (
        <Panel tone="accent">
          <rect x={24} y={24} width={94} height={40} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={122} y={24} width={94} height={40} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={24} y={72} width={94} height={40} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={122} y={72} width={94} height={40} rx={8} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={32} y={40} width={60} />
          <Bar x={32} y={52} width={40} />
          <AccentBar x={130} y={40} width={60} />
          <Bar x={130} y={52} width={40} />
          <AccentBar x={32} y={88} width={60} />
          <Bar x={32} y={100} width={40} />
          <AccentBar x={130} y={88} width={60} />
          <Bar x={130} y={100} width={40} />
          <text x={120} y={132} fontSize={9} fill="var(--mockup-accent)" textAnchor="middle">一括処理完了</text>
        </Panel>
      );
    case "playwright":
      return (
        <Panel tone="accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x={28} y={30 + i * 20} width={184} height={16} rx={4} fill="#fff" stroke="var(--mockup-border)" />
              <circle cx={40} cy={38 + i * 20} r={4} fill="var(--mockup-accent)" />
              <path d={`M37 ${38 + i * 20} l2 2 l4 -4`} stroke="#fff" strokeWidth={1.3} fill="none" strokeLinecap="round" />
              <Bar x={52} y={35 + i * 20} width={120} />
            </g>
          ))}
        </Panel>
      );
    case "db-schema":
      return (
        <Panel tone="accent">
          <rect x={20} y={28} width={70} height={56} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={28} y={40} width={54} />
          <Bar x={28} y={54} width={44} />
          <Bar x={28} y={66} width={50} />
          <rect x={102} y={28} width={70} height={56} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={110} y={40} width={54} />
          <Bar x={110} y={54} width={44} />
          <Bar x={110} y={66} width={50} />
          <rect x={184} y={80} width={44} height={52} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={190} y={92} width={32} />
          <Bar x={190} y={106} width={30} />
          <path d="M90 56 L102 56 M172 56 C 180 56 184 80 184 92" stroke="var(--mockup-accent)" fill="none" strokeWidth={1.5} />
          <rect x={60} y={104} width={82} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <AccentBar x={68} y={114} width={66} />
          <path d="M101 104 C 101 96 137 84 137 84" stroke="var(--mockup-accent)" fill="none" strokeWidth={1.5} />
        </Panel>
      );
    case "mysql":
      return (
        <Panel tone="accent">
          <rect x={22} y={28} width={200} height={104} rx={6} fill="#0f172a" />
          <text x={32} y={48} fontSize={9} fill="#a5f3fc" fontFamily="monospace">EXPLAIN SELECT ...</text>
          <text x={32} y={64} fontSize={9} fill="#e2e8f0" fontFamily="monospace">type=ref  key=idx_cust</text>
          <text x={32} y={80} fontSize={9} fill="#e2e8f0" fontFamily="monospace">rows=1,402</text>
          <text x={32} y={100} fontSize={9} fill="#86efac" fontFamily="monospace">✓ 42ms</text>
          <text x={32} y={118} fontSize={9} fill="#94a3b8" fontFamily="monospace">推奨: idx_cust_created</text>
        </Panel>
      );
    case "neon":
      return (
        <Panel tone="accent">
          <g>
            <ellipse cx={60} cy={52} rx={28} ry={10} fill="var(--mockup-accent)" opacity={0.25} />
            <path d="M32 52v40c0 5 12 9 28 9s28-4 28-9V52" fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={60} y={120} fontSize={9} fill="#64748b" textAnchor="middle">main</text>
          </g>
          <g transform="translate(100 0)">
            <ellipse cx={60} cy={40} rx={24} ry={8} fill="var(--mockup-accent)" opacity={0.25} />
            <path d="M36 40v28c0 4 11 7 24 7s24-3 24-7V40" fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={60} y={92} fontSize={9} fill="#64748b" textAnchor="middle">preview</text>
            <ellipse cx={60} cy={100} rx={24} ry={8} fill="var(--mockup-accent)" opacity={0.25} />
            <path d="M36 100v24c0 4 11 7 24 7s24-3 24-7v-24" fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={60} y={146} fontSize={8} fill="#64748b" textAnchor="middle">test</text>
          </g>
          <path d="M88 60 L 130 42 M88 70 L130 106" stroke="var(--mockup-accent)" strokeWidth={1.5} fill="none" />
        </Panel>
      );
    case "postgres":
      return (
        <Panel tone="accent">
          <rect x={22} y={28} width={200} height={104} rx={6} fill="#0f172a" />
          <text x={32} y={48} fontSize={9} fill="#a5f3fc" fontFamily="monospace">Index Scan using ...</text>
          <text x={32} y={62} fontSize={9} fill="#e2e8f0" fontFamily="monospace">  cost=0.4..84</text>
          <text x={32} y={76} fontSize={9} fill="#e2e8f0" fontFamily="monospace">  rows=42  width=24</text>
          <text x={32} y={98} fontSize={9} fill="#86efac" fontFamily="monospace">✓ 38ms</text>
          <text x={32} y={116} fontSize={9} fill="#94a3b8" fontFamily="monospace">ANALYZE 実行済</text>
        </Panel>
      );
    case "ast":
      return (
        <Panel tone="accent">
          <text x={26} y={42} fontSize={10} fontFamily="monospace" fill="#94a3b8">// oldFn(1)</text>
          <text x={26} y={58} fontSize={10} fontFamily="monospace" fill="#0f172a">newFn(42)</text>
          <text x={26} y={74} fontSize={10} fontFamily="monospace" fill="#94a3b8">const s = "oldFn(...)"</text>
          <text x={26} y={90} fontSize={10} fontFamily="monospace" fill="#0f172a">newFn( user )</text>
          <rect x={22} y={46} width={200} height={16} fill="var(--mockup-accent)" opacity={0.18} />
          <rect x={22} y={78} width={200} height={16} fill="var(--mockup-accent)" opacity={0.18} />
          <text x={26} y={126} fontSize={9} fill="var(--mockup-accent)">構文として一致する場所のみ</text>
        </Panel>
      );
    case "aws-cost":
      return (
        <Panel tone="accent">
          <AccentBar x={30} y={36} width={190} />
          <text x={30} y={52} fontSize={9} fill="#475569">EC2 ¥312,400</text>
          <rect x={30} y={58} width={80} height={6} rx={3} fill="var(--mockup-accent)" />
          <rect x={112} y={58} width={100} height={6} rx={3} fill="#e2e8f0" />
          <text x={30} y={80} fontSize={9} fill="#475569">S3 ¥184,200</text>
          <rect x={30} y={86} width={60} height={6} rx={3} fill="var(--mockup-accent)" />
          <text x={30} y={108} fontSize={9} fill="#475569">アイドル ¥92,000</text>
          <rect x={30} y={114} width={40} height={6} rx={3} fill="var(--mockup-accent)" />
          <text x={30} y={138} fontSize={9} fill="var(--mockup-accent)">節約余地: ¥92,000 / 月</text>
        </Panel>
      );
    case "cloudflare-agent":
      return (
        <Panel tone="accent">
          <circle cx={120} cy={80} r={50} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
          <circle cx={120} cy={80} r={36} fill="#fff" stroke="var(--mockup-border)" />
          <path
            d="M120 44 A 36 36 0 0 1 156 80 M120 44 A 36 36 0 0 0 84 80 M84 80 A 36 36 0 0 0 120 116 M156 80 A 36 36 0 0 1 120 116"
            stroke="var(--mockup-accent)"
            strokeWidth={1.5}
            fill="none"
          />
          <circle cx={120} cy={80} r={10} fill="var(--mockup-accent)" />
          <text x={120} y={84} fontSize={10} fill="#fff" textAnchor="middle">AI</text>
          <rect x={28} y={40} width={40} height={18} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <text x={48} y={52} fontSize={8} fill="#475569" textAnchor="middle">DB</text>
          <rect x={172} y={40} width={40} height={18} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <text x={192} y={52} fontSize={8} fill="#475569" textAnchor="middle">API</text>
          <rect x={28} y={104} width={40} height={18} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <text x={48} y={116} fontSize={8} fill="#475569" textAnchor="middle">KV</text>
          <rect x={172} y={104} width={40} height={18} rx={4} fill="#fff" stroke="var(--mockup-border)" />
          <text x={192} y={116} fontSize={8} fill="#475569" textAnchor="middle">Mail</text>
          <path d="M68 49 L 88 64 M172 49 L 152 64 M68 113 L 88 96 M172 113 L 152 96" stroke="var(--mockup-accent)" strokeWidth={1.3} />
        </Panel>
      );
    case "brand":
      return (
        <Panel tone="accent">
          <rect x={30} y={30} width={180} height={8} rx={4} fill="var(--mockup-accent)" />
          <rect x={30} y={48} width={20} height={20} rx={4} fill="var(--mockup-accent)" />
          <rect x={56} y={48} width={20} height={20} rx={4} fill="var(--mockup-accent)" opacity={0.6} />
          <rect x={82} y={48} width={20} height={20} rx={4} fill="var(--mockup-accent)" opacity={0.3} />
          <rect x={108} y={48} width={20} height={20} rx={4} fill="#0f172a" />
          <AccentBar x={30} y={84} width={100} />
          <Bar x={30} y={98} width={180} />
          <Bar x={30} y={112} width={160} />
          <Bar x={30} y={126} width={150} />
        </Panel>
      );
    case "canvas":
      return (
        <Panel tone="accent">
          <rect x={30} y={30} width={180} height={100} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <rect x={30} y={30} width={60} height={100} rx={6} fill="var(--mockup-accent)" opacity={0.18} />
          <AccentBar x={102} y={48} width={70} />
          <Bar x={102} y={64} width={88} />
          <Bar x={102} y={78} width={60} />
          <rect x={102} y={98} width={40} height={14} rx={7} fill="var(--mockup-accent)" />
          <text x={122} y={108} fontSize={8} fill="#fff" textAnchor="middle">詳細</text>
        </Panel>
      );
    case "image":
      return (
        <Panel tone="accent">
          <rect x={32} y={32} width={176} height={96} rx={6} fill="#e0f2fe" />
          <circle cx={90} cy={64} r={16} fill="#fde68a" />
          <path d="M40 118 L80 88 L110 108 L150 78 L200 118 Z" fill="#34d399" />
          <path d="M40 118 L200 118" stroke="#059669" strokeWidth={0.5} />
          <text x={40} y={144} fontSize={9} fill="var(--mockup-accent)">露出・色補正 完了</text>
        </Panel>
      );
    case "domain":
      return (
        <Panel tone="accent">
          <rect x={28} y={32} width={84} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={36} y={50} fontSize={10} fill="#0f172a" fontFamily="monospace">nova.dev</text>
          <rect x={116} y={32} width={96} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={124} y={50} fontSize={10} fill="#0f172a" fontFamily="monospace">finch.app</text>
          <rect x={28} y={68} width={96} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={36} y={86} fontSize={10} fill="#0f172a" fontFamily="monospace">palm.studio</text>
          <rect x={128} y={68} width={84} height={28} rx={6} fill="#fff" stroke="var(--mockup-border)" />
          <text x={136} y={86} fontSize={10} fill="#0f172a" fontFamily="monospace">tide.ai</text>
          <g fontSize={8} fontFamily="monospace">
            <text x={94} y={50} textAnchor="end" fill="#16a34a">取得可</text>
            <text x={196} y={50} textAnchor="end" fill="#16a34a">取得可</text>
            <text x={112} y={86} textAnchor="end" fill="#ef4444">済み</text>
            <text x={196} y={86} textAnchor="end" fill="#16a34a">取得可</text>
          </g>
          <text x={28} y={130} fontSize={9} fill="#475569">候補と取得可否が一目でわかる</text>
        </Panel>
      );
    case "file":
      return (
        <Panel tone="accent">
          <g fontSize={9} fill="#334155">
            <rect x={24} y={30} width={12} height={12} rx={2} fill="var(--mockup-accent)" opacity={0.6} />
            <text x={42} y={40}>01_提案/</text>
            <rect x={38} y={50} width={10} height={10} rx={2} fill="var(--mockup-accent)" opacity={0.3} />
            <text x={54} y={58}>A社/</text>
            <rect x={38} y={68} width={10} height={10} rx={2} fill="var(--mockup-accent)" opacity={0.3} />
            <text x={54} y={76}>B社/</text>
            <rect x={24} y={86} width={12} height={12} rx={2} fill="var(--mockup-accent)" opacity={0.6} />
            <text x={42} y={96}>02_実装/</text>
            <rect x={24} y={106} width={12} height={12} rx={2} fill="var(--mockup-accent)" opacity={0.6} />
            <text x={42} y={116}>03_アーカイブ/</text>
          </g>
        </Panel>
      );
    case "csv":
      return (
        <Panel tone="accent">
          <AccentBar x={26} y={32} width={100} />
          <text x={26} y={52} fontSize={9} fill="#475569">行数: 5,204 / 欠損 12%</text>
          <g>
            <rect x={26} y={62} width={60} height={30} rx={4} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={56} y={80} fontSize={10} fill="var(--mockup-accent)" textAnchor="middle">¥2.4M</text>
            <rect x={92} y={62} width={60} height={30} rx={4} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={122} y={80} fontSize={10} fill="var(--mockup-accent)" textAnchor="middle">+18%</text>
            <rect x={158} y={62} width={60} height={30} rx={4} fill="var(--mockup-fill)" stroke="var(--mockup-border)" />
            <text x={188} y={80} fontSize={10} fill="var(--mockup-accent)" textAnchor="middle">Top:D</text>
          </g>
          <g stroke="var(--mockup-accent)" strokeWidth={2} fill="none">
            <polyline points="30,126 60,114 90,118 120,106 150,112 180,102 210,108" />
          </g>
          <text x={26} y={144} fontSize={8} fill="#94a3b8">主要指標の要約とトレンドを自動抽出</text>
        </Panel>
      );
    case "vendor":
      return (
        <Panel tone="accent">
          <text x={26} y={42} fontSize={9} fill="#475569">Acme SaaS ¥84,000</text>
          <rect x={130} y={35} width={80} height={8} rx={4} fill="var(--mockup-accent)" opacity={0.35} />
          <rect x={130} y={35} width={60} height={8} rx={4} fill="var(--mockup-accent)" />
          <text x={26} y={62} fontSize={9} fill="#475569">同系ツール ¥28,000</text>
          <rect x={130} y={55} width={80} height={8} rx={4} fill="var(--mockup-accent)" opacity={0.35} />
          <rect x={130} y={55} width={24} height={8} rx={4} fill="var(--mockup-accent)" />
          <text x={26} y={82} fontSize={9} fill="#ef4444">重複 ¥24,000</text>
          <text x={26} y={102} fontSize={9} fill="#f59e0b">未使用 ¥18,000</text>
          <AccentBar x={26} y={118} width={100} />
          <text x={26} y={138} fontSize={9} fill="var(--mockup-accent)">月 ¥42,000 節約余地</text>
        </Panel>
      );
    case "article":
      return (
        <Panel tone="accent">
          <AccentBar x={26} y={28} width={80} />
          <Bar x={26} y={44} width={200} />
          <Bar x={26} y={58} width={190} />
          <Bar x={26} y={72} width={200} />
          <Bar x={26} y={86} width={170} />
          <Bar x={26} y={100} width={200} />
          <Bar x={26} y={114} width={150} />
          <text x={26} y={140} fontSize={9} fill="var(--mockup-accent)">本文のみ抽出 / 広告・関連除去</text>
        </Panel>
      );
    case "lead":
      return (
        <Panel tone="accent">
          <AccentBar x={26} y={28} width={100} />
          <g fontSize={9} fill="#475569">
            <text x={26} y={50}>事業: 中小向け会計SaaS</text>
            <text x={26} y={66}>直近: 2026年Q1に資金調達</text>
            <text x={26} y={82}>課題: 経理自動化の強化</text>
            <text x={26} y={98}>窓口: プロダクト責任者</text>
          </g>
          <rect x={26} y={110} width={186} height={22} rx={4} fill="var(--mockup-fill)" />
          <text x={34} y={124} fontSize={9} fill="var(--mockup-accent)">次の一手: 事例PDFを同送</text>
        </Panel>
      );
    default:
      return <Panel tone="accent" />;
  }
}
