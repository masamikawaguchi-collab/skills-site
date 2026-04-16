"use client";

import Link from "next/link";
import {
  categorySections,
  heroVideoUrl,
  officialAuthors,
} from "@/lib/agent-skills-data";
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

export function AgentSkillsPage() {
  return (
    <SiteFrame>
        <div className="container page-wrap">
          <section className="hero-section">
            <div className="hero-copy">
              <h1>Skills ライブラリ</h1>
              <p>
                Claude Code、Codexなどのコーディングエージェント向けの再利用可能なスキルを発見。
                各スキルは、AIエージェントに専門タスクの実行や複雑なワークフローの自動化を教える
                指示とコードのパッケージです。
              </p>
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
            <h2>公式スキル</h2>
            <div className="authors-row">
              {officialAuthors.map((author) => (
                <a key={author.name} href={author.href} className="author-card">
                  <div className="author-avatar" aria-hidden="true">
                    <span>{author.letter}</span>
                  </div>
                  <h3>{author.name}</h3>
                  <p>{author.count}個のスキル</p>
                </a>
              ))}
            </div>
          </section>

          {categorySections.map((section) => (
            <section key={section.slug} className="category-section">
              {section.href.startsWith("/") ? (
                <Link href={section.href} className="section-link">
                  <h2>
                    {section.title}
                    <span className="count-pill">{section.count}</span>
                    <span className="section-arrow">→</span>
                  </h2>
                </Link>
              ) : (
                <a href={section.href} className="section-link">
                  <h2>
                    {section.title}
                    <span className="count-pill">{section.count}</span>
                    <span className="section-arrow">→</span>
                  </h2>
                </a>
              )}

              <div className="skills-grid">
                {section.skills.map((skill) => (
                  skill.href.startsWith("/") ? (
                    <Link
                      key={`${section.slug}-${skill.title}`}
                      href={skill.href}
                      className="skill-card"
                    >
                      <div className="skill-card-body">
                        <div className="skill-card-header">
                          <div className="skill-title">{skill.title}</div>
                          <span className="download-button" aria-hidden="true">
                            <DownloadIcon />
                          </span>
                        </div>

                        <div className="skill-author">提供元: {skill.author}</div>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={`${section.slug}-${skill.title}`}
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

                        <div className="skill-author">提供元: {skill.author}</div>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </section>
          ))}
        </div>
    </SiteFrame>
  );
}
