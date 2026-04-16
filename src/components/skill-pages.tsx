import Link from "next/link";
import type { Skill } from "@/lib/skills-content";
import type { CategoryMeta } from "@/lib/categories-content";
import { SiteFrame } from "@/components/site-frame";
import { CategoryIcon } from "@/components/visuals";
import { InstallButton } from "@/components/install-button";

const HIDDEN_SECTION_IDS = new Set(["overview", "quick-start", "libraries"]);

type CategoryPageProps = {
  meta: CategoryMeta;
  skills: Skill[];
};

export function CategoryPage({ meta, skills }: CategoryPageProps) {
  return (
    <SiteFrame>
      <div
        className="container page-wrap"
        style={
          {
            "--category-accent": meta.accent,
            "--category-accent-soft": meta.accentSoft,
          } as React.CSSProperties
        }
      >
        <div className="detail-breadcrumbs">
          <Link href="/">Skills ライブラリ</Link>
          <span>/</span>
          <span>{meta.title}</span>
        </div>

        <section className="category-hero">
          <div className="category-hero-copy">
            <span className="category-hero-icon" aria-hidden="true">
              <CategoryIcon slug={meta.slug} color={meta.accent} size={28} />
            </span>
            <h1>{meta.title}</h1>
            <p>{meta.description}</p>
            {meta.note ? <div className="author-note">{meta.note}</div> : null}
          </div>

          <div className="category-hero-meta">
            <div className="meta-card">
              <strong>{skills.length}</strong>
              <span>掲載スキル</span>
            </div>
            <div className="meta-card">
              <strong>日本語版</strong>
              <span>内容を独自に再構成</span>
            </div>
          </div>
        </section>

        <section className="detail-section-block">
          <div className="section-heading-block">
            <h2>スキル一覧</h2>
            <p>カードをクリックすると詳細ページに進み、具体例と導入手順を確認できます。</p>
          </div>

          {skills.length === 0 ? (
            <p>このカテゴリにはまだスキルが登録されていません。</p>
          ) : (
            <div className="skills-grid">
              {skills.map((skill) => (
                <Link key={skill.localHref} href={skill.localHref} className="skill-card">
                  <div className="skill-card-body">
                    <span className="skill-card-icon" aria-hidden="true">
                      <CategoryIcon slug={meta.slug} color={meta.accent} size={18} />
                    </span>
                    <div className="skill-title">{skill.title}</div>
                    <div className="skill-author">提供元: {skill.authorLabel}</div>
                    <p className="skill-description no-clamp">{skill.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </SiteFrame>
  );
}

type SkillDetailPageProps = {
  skill: Skill;
  categoryHref: string;
  accent: string;
  accentSoft: string;
};

export function SkillDetailPage({ skill, categoryHref, accent, accentSoft }: SkillDetailPageProps) {
  const visibleSections = skill.sections.filter(
    (section) => !HIDDEN_SECTION_IDS.has(section.id),
  );

  return (
    <SiteFrame>
      <div
        className="container page-wrap detail-page-wrap"
        style={
          {
            "--category-accent": accent,
            "--category-accent-soft": accentSoft,
            "--mockup-accent": accent,
            "--mockup-accent-soft": accentSoft,
            "--mockup-fill": accentSoft,
            "--mockup-border": accent,
          } as React.CSSProperties
        }
      >
        <div className="detail-breadcrumbs">
          <Link href="/">Skills ライブラリ</Link>
          <span>/</span>
          <Link href={categoryHref}>{skill.categoryTitle}</Link>
          <span>/</span>
          <span>{skill.title}</span>
        </div>

        <section className="skill-detail-hero">
          <div className="skill-detail-main">
            <div className="detail-label">
              <CategoryIcon slug={skill.categorySlug} color={accent} size={16} />
              <span>{skill.categoryTitle}</span>
            </div>
            <h1>{skill.title}</h1>
            <div className="detail-author">作成者: {skill.authorLabel}</div>
            <p className="detail-intro">{skill.intro}</p>
            <p className="detail-summary">{skill.description}</p>
            <InstallButton githubUrl={skill.githubUrl} />
          </div>
        </section>

        <div className="detail-layout">
          <article className="detail-content">
            {visibleSections.map((section) => (
              <section key={section.id} id={section.id} className="detail-section-block">
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.table ? (
                  <div className="table-wrap">
                    <table className="info-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.bullets ? (
                  <ul className="detail-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {section.codeExamples?.map((example) => (
                  <div key={`${section.id}-${example.code}`} className="code-example">
                    {example.title ? <div className="code-title">{example.title}</div> : null}
                    <pre>
                      <code>{example.code}</code>
                    </pre>
                  </div>
                ))}
              </section>
            ))}
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <span className="sidebar-card-title">カテゴリ</span>
              <p>{skill.categoryTitle}</p>
            </div>
            <div className="sidebar-card">
              <span className="sidebar-card-title">このページの方針</span>
              <p>元サイトの情報構造を参考にしつつ、ローカル版は日本語で独自に再編集しています。</p>
            </div>
          </aside>
        </div>
      </div>
    </SiteFrame>
  );
}
