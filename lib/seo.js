import { SITE } from "@/seo.config";

export function absoluteUrl(path = "/") {
  try {
    return new URL(path, SITE.url).toString();
  } catch {
    return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
  }
}

export function toIsoDate(dateStr) {
  // รับ YYYY-MM-DD หรือ ISO แล้วคืนค่า YYYY-MM-DD
  if (!dateStr) return "";
  return String(dateStr).slice(0, 10);
}

export function ytThumb(youtubeId, quality = "hqdefault") {
  if (!youtubeId) return "";
  return `https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`;
}

export function ytEmbed(youtubeId) {
  if (!youtubeId) return "";
  return `https://www.youtube.com/embed/${youtubeId}`;
}

export function ytWatch(youtubeId) {
  if (!youtubeId) return "";
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
