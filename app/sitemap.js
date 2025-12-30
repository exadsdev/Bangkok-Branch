import { promises as fs } from "fs";
import path from "path";
import { SITE } from "@/seo.config";

const DATA_DIR = path.join(process.cwd(), "data");
const BLOG_FILE = path.join(DATA_DIR, "blog.json");
const VIDEOS_FILE = path.join(DATA_DIR, "videos.json");

async function readJsonSafe(file) {
  try {
    const raw = await fs.readFile(file, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();

  const posts = await readJsonSafe(BLOG_FILE);
  const videos = await readJsonSafe(VIDEOS_FILE);

  const staticUrls = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/videos`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogUrls = posts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const videoUrls = videos.map((v) => ({
    url: `${SITE.url}/videos/${v.slug}`,
    lastModified: new Date(v.date || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls, ...videoUrls];
}
