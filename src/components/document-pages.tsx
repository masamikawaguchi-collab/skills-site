import Link from "next/link";
import type { DocumentSkill } from "@/lib/document-skills-data";
import { documentSkills, documentSkillsCategory } from "@/lib/document-skills-data";
import { SiteFrame } from "@/components/site-frame";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="download-icon">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export function DocumentCategoryPage() {
  return (
    <SiteFrame>
      <div className="container page-wrap">
        <div className="detail-breadcrumbs">
          <Link href="/">Skills ライブラリ</Link>
          <span>/</span>
          <span>{documentSkillsCategory.title}</span>
        </div>

        <section className="category-hero">
          <div className="category-hero-copy">
            <h1>{documentSkillsCategory.title}</h1>
            <p>{documentSkillsCategory.description}</p>
          </div>

          <div className="category-hero-meta">
            <div className="meta-card">
              <strong>{documentSkills.length}</strong>
              <span>ローカル移行済みスキル</span>
            </div>
            <div className="meta-card">
              <strong>独自構成</strong>
              <span>元サイトを踏まえて再編集</span>
            </div>
          </div>
        </section>

        <section className="detail-section-block">
          <div className="section-heading-block">
            <h2>スキル一覧</h2>
            <p>ドキュメントカテゴリだけ先にローカル化し、一覧から詳細まで内部遷移できるようにしています。</p>
          </div>

          <div className="skills-grid">
            {documentSkills.map((skill) => (
              <Link key={skill.localHref} href={skill.localHref} className="skill-card">
                <div className="skill-card-body">
                  <div className="skill-card-header">
                    <div className="skill-title">{skill.title}</div>
                    <span className="download-button" aria-hidden="true">
                      <DownloadIcon />
                    </span>
                  </div>
                  <div className="skill-author">提供元: {skill.author}</div>
                  <p className="skill-description no-clamp">{skill.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}

export function DocumentSkillDetailPage({ skill }: { skill: DocumentSkill }) {
  return (
    <SiteFrame>
      <div className="container page-wrap detail-page-wrap">
        <div className="detail-breadcrumbs">
          <Link href="/">Skills ライブラリ</Link>
          <span>/</span>
          <Link href={documentSkillsCategory.localHref}>{documentSkillsCategory.title}</Link>
          <span>/</span>
          <span>{skill.title}</span>
        </div>

        <section className="skill-detail-hero">
          <div className="skill-detail-main">
            <div className="detail-label">Skills ライブラリ</div>
            <h1>{skill.title}</h1>
            <div className="detail-author">作成者: {skill.author}</div>
            <p className="detail-summary">{skill.description}</p>

            <div className="install-card">
              <span className="install-label">導入コマンド</span>
              <code>{skill.installCommand}</code>
            </div>

            <div className="detail-actions">
              <a href={skill.githubUrl} target="_blank" rel="noopener noreferrer" className="outline-action">
                GitHub
              </a>
              <Link href={documentSkillsCategory.localHref} className="outline-action">
                カテゴリへ戻る
              </Link>
            </div>
          </div>

          <aside className="toc-card">
            <span className="toc-title">ページ内目次</span>
            <nav className="toc-links">
              {skill.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
        </section>

        <div className="detail-layout">
          <article className="detail-content">
            {skill.sections.map((section) => (
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
              <p>元サイトの情報構造を参考にしつつ、ローカル向けに日本語で再編集しています。</p>
            </div>
          </aside>
        </div>
      </div>
    </SiteFrame>
  );
}
