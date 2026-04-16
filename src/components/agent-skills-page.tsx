"use client";

import Link from "next/link";
import {
  categorySections,
  heroVideoUrl,
  officialAuthors,
} from "@/lib/agent-skills-data";
import { SiteFrame } from "@/components/site-frame";
import { BrandMark, CategoryIcon, SparkIcon } from "@/components/visuals";

export function AgentSkillsPage() {
  return (
    <SiteFrame>
      <div className="container page-wrap">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <SparkIcon />
              <span>Skills ライブラリ</span>
            </div>
            <h1>AIエージェントに、仕事のやり方を渡す。</h1>
            <p className="hero-lead">
              『スキル』は、Claude Code や Codex のような AI エージェントに
              「この作業はこう進めて」と教えるための、手順書とサンプルコードの詰め合わせです。
              PDF を整える、ブラウザを操作する、データを要約する──やりたいことに合う既製スキルを選んで組み込むだけで、
              エージェントが毎回同じ品質で作業を繰り返せるようになります。
            </p>
            <div className="hero-tips">
              <div className="hero-tip">
                <span className="hero-tip-label">ステップ 1</span>
                <p>カテゴリか公式提供元から、やりたい作業に近いスキルを選ぶ</p>
              </div>
              <div className="hero-tip">
                <span className="hero-tip-label">ステップ 2</span>
                <p>「Claude に適用する」で導入コマンドをコピーし、手元のエージェントに追加する</p>
              </div>
              <div className="hero-tip">
                <span className="hero-tip-label">ステップ 3</span>
                <p>いつもの依頼文を投げるだけで、手順に沿って自動で進む</p>
              </div>
            </div>
            <a
              href="https://www.anthropic.com/news/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              Skills の詳細を見る →
            </a>
          </div>

          <div className="hero-video-shell">
            <iframe
              src={heroVideoUrl}
              title="Skills ライブラリ紹介"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="hero-video"
            />
          </div>
        </section>

        <section className="authors-section">
          <div className="section-heading-block">
            <h2>よく使われる公式提供元</h2>
            <p>普段のツールとセットで使われやすい、実用性の高い提供元だけを載せています。</p>
          </div>
          <div className="authors-row">
            {officialAuthors.map((author) => (
              <Link key={author.brandKey} href={author.href} className="author-card">
                <div className="author-avatar" aria-hidden="true">
                  <BrandMark brandKey={author.brandKey} size={28} />
                </div>
                <h3>{author.name}</h3>
                <p className="author-tagline">{author.tagline}</p>
                <span className="author-count">{author.count}個のスキル</span>
              </Link>
            ))}
          </div>
        </section>

        {categorySections.map((section) => (
          <section
            key={section.slug}
            className="category-section"
            style={
              {
                "--category-accent": section.accent,
                "--category-accent-soft": section.accentSoft,
              } as React.CSSProperties
            }
          >
            <Link href={section.href} className="section-link">
              <span className="section-link-icon" aria-hidden="true">
                <CategoryIcon slug={section.slug} color={section.accent} size={22} />
              </span>
              <h2>
                {section.title}
                <span className="count-pill">{section.count}</span>
                <span className="section-arrow">→</span>
              </h2>
            </Link>

            <div className="skills-grid">
              {section.skills.map((skill) => (
                <Link
                  key={`${section.slug}-${skill.title}`}
                  href={skill.href}
                  className="skill-card"
                >
                  <div className="skill-card-body">
                    <span className="skill-card-icon" aria-hidden="true">
                      <CategoryIcon slug={section.slug} color={section.accent} size={18} />
                    </span>
                    <div className="skill-title">{skill.title}</div>
                    <div className="skill-author">提供元: {skill.author}</div>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteFrame>
  );
}
