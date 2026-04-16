import type { Metadata } from "next";
import { DocumentCategoryPage } from "@/components/document-pages";

export const metadata: Metadata = {
  title: "ドキュメントスキル | Skills ライブラリ",
  description:
    "Word、PDF、PowerPoint、EPUB、XLSX などのドキュメント系スキルをまとめたカテゴリページです。",
};

export default function Page() {
  return <DocumentCategoryPage />;
}
