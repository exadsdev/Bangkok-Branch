import { promises as fs } from "fs";
import path from "path";
import { SITE } from "@/seo.config";
import { absoluteUrl } from "@/lib/seo";

const DATA_FILE = path.join(process.cwd(), "data", "blog.json");

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let posts = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const arr = JSON.parse(raw);
    posts = Array.isArray(arr) ? arr : [];
  } catch {
    posts = [];
  }

  const items = posts
    .slice(0, 50)
    .map((p) => {
      const link = absoluteUrl(`/blog/${p.slug}`);
      return `
        <item>
          <title>${escapeXml(p.title)}</title>
          <link>${escapeXml(link)}</link>
          <guid>${escapeXml(link)}</guid>
          <pubDate>${new Date(p.date || Date.now()).toUTCString()}</pubDate>
          <description>${escapeXml(p.excerpt || "")}</description>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(SITE.name)}</title>
        <link>${escapeXml(SITE.url)}</link>
        <description>${escapeXml("บทความความรู้จาก " + SITE.name)}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
}
