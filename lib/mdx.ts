import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author?: string;
};

export type Post = PostMeta & { content: string };

function blogDir(locale: Locale): string {
  return path.join(CONTENT_DIR, locale, "blog");
}

async function readDirSafe(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir);
  } catch {
    return [];
  }
}

/** Bir dosyayı oku; locale'de yoksa varsayılan locale'e düş */
async function readPostFile(locale: Locale, slug: string): Promise<Post | null> {
  const candidates = [path.join(blogDir(locale), `${slug}.mdx`)];
  if (locale !== defaultLocale) {
    candidates.push(path.join(blogDir(defaultLocale), `${slug}.mdx`));
  }
  for (const file of candidates) {
    try {
      const raw = await fs.readFile(file, "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? "2026-01-01"),
        author: data.author ? String(data.author) : undefined,
        content,
      };
    } catch {
      continue;
    }
  }
  return null;
}

/** Bir locale için tüm yazıların meta listesi (tarihe göre yeni→eski) */
export async function getAllPosts(locale: Locale): Promise<PostMeta[]> {
  // Varsayılan locale dizinindeki slug'lar kaynaktır; çeviri yoksa TR'ye düşülür
  const files = await readDirSafe(blogDir(defaultLocale));
  const slugs = files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  const posts = await Promise.all(slugs.map((slug) => readPostFile(locale, slug)));
  return posts
    .filter((p): p is Post => p !== null)
    .map((p): PostMeta => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      author: p.author,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(locale: Locale, slug: string): Promise<Post | null> {
  return readPostFile(locale, slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await readDirSafe(blogDir(defaultLocale));
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}
