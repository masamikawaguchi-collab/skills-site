"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLinks, topNavigationLinks } from "@/lib/agent-skills-data";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

type SiteFrameProps = {
  children: React.ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-cluster">
            <Link href="/" className="brand-link">
              <Image
                src="/skills-library-logo.png"
                alt="Skills ライブラリ"
                width={36}
                height={36}
              />
              <span className="brand-name">Skills ライブラリ</span>
            </Link>

            <nav className="desktop-nav" aria-label="Primary">
              {topNavigationLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={link.active ? "nav-link is-active" : "nav-link"}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={link.active ? "nav-link is-active" : "nav-link"}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>
          </div>

          <div className="topbar-actions">
            <a href="https://mcpservers.org/ja/submit" className="submit-button mobile-only">
              提出
            </a>

            <div className="desktop-actions">
              <a href="https://mcpservers.org/ja/advertise" className="topbar-text-link">
                広告
              </a>
              <a href="https://mcpservers.org/ja/submit" className="submit-button">
                提出
              </a>
            </div>

            <button
              type="button"
              className="menu-button mobile-only"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div id="mobile-menu" className="mobile-menu">
            <div className="container mobile-menu-inner">
              {topNavigationLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={link.active ? "mobile-nav-link is-active" : "mobile-nav-link"}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={link.active ? "mobile-nav-link is-active" : "mobile-nav-link"}
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a href="https://mcpservers.org/ja/advertise" className="mobile-nav-link">
                広告
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main className="main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <nav className="footer-links" aria-label="Footer">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <a href="mailto:hello@mcpservers.org">📧 hello@mcpservers.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
