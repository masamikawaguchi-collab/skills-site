import Link from "next/link";
import type { OfficialAuthor } from "@/lib/official-authors-data";
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

export function OfficialAuthorPage({ author }: { author: OfficialAuthor }) {
  return (
    <SiteFrame>
      <div className="container page-wrap">
        <div className="detail-breadcrumbs">
          <Link href="/">Skills ライブラリ</Link>
          <span>/</span>
          <span>公式スキル</span>
          <span>/</span>
          <span>{author.name}</span>
        </div>

        <section className="author-hero">
          <div className="author-hero-badge" aria-hidden="true">
            {author.letter}
          </div>

          <div className="author-hero-copy">
            <h1>{author.headline}</h1>
            <p>{author.description}</p>
            {author.note ? <div className="author-note">{author.note}</div> : null}
          </div>

          <div className="author-hero-meta">
            <div className="meta-card">
              <strong>{author.count}</strong>
              <span>公開スキル数</span>
            </div>
            <div className="meta-card">
              <strong>ローカル版</strong>
              <span>代表スキルを日本語で再構成</span>
            </div>
          </div>
        </section>

        <section className="detail-section-block">
          <div className="section-heading-block">
            <h2>{author.name} のスキル一覧</h2>
            <p>元サイトの author ページ構成を参考にしつつ、ローカル版では読みやすさ優先で代表スキルをまとめています。</p>
          </div>

          <div className="skills-grid">
            {author.skills.map((skill) => (
              <a
                key={`${author.slug}-${skill.title}`}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-card"
              >
                <div className="skill-card-body">
                  <div className="skill-card-header">
                    <div className="skill-title">{skill.title}</div>
                    <span className="download-button" aria-hidden="true">
                      <DownloadIcon />
                    </span>
                  </div>
                  <div className="skill-author">提供元: {author.name}</div>
                  <p className="skill-description no-clamp">{skill.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
