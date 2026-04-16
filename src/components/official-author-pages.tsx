import Link from "next/link";
import type { OfficialAuthor } from "@/lib/official-authors-data";
import { SiteFrame } from "@/components/site-frame";
import { BrandMark } from "@/components/visuals";

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
            <BrandMark brandKey={author.brandKey} size={52} />
          </div>

          <div className="author-hero-copy">
            <h1>{author.headline}</h1>
            <p>{author.description}</p>
            {author.note ? <div className="author-note">{author.note}</div> : null}
          </div>

          <div className="author-hero-meta">
            <div className="meta-card">
              <strong>{author.count}</strong>
              <span>掲載スキル</span>
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
            <p>よく利用される代表スキルのみを掲載しています。</p>
          </div>

          <div className="skills-grid">
            {author.skills.map((skill) => {
              const isLocal = skill.href.startsWith("/");
              const body = (
                <div className="skill-card-body">
                  <span className="skill-card-icon is-brand" aria-hidden="true">
                    <BrandMark brandKey={author.brandKey} size={22} />
                  </span>
                  <div className="skill-title">{skill.title}</div>
                  <div className="skill-author">提供元: {author.name}</div>
                  <p className="skill-description no-clamp">{skill.description}</p>
                </div>
              );

              return isLocal ? (
                <Link
                  key={`${author.slug}-${skill.title}`}
                  href={skill.href}
                  className="skill-card"
                >
                  {body}
                </Link>
              ) : (
                <a
                  key={`${author.slug}-${skill.title}`}
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-card"
                >
                  {body}
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
