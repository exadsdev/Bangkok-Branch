import JsonLd from "./JsonLd";
import { SITE, LOGO_URL } from "@/seo.config";

/**
 * VideoObject JSON-LD (สำคัญมากสำหรับ Google Video / Rich Results)
 * ควรส่ง:
 * - name, description, uploadDate (YYYY-MM-DD), duration (ISO8601 เช่น PT5M30S)
 * - thumbnailUrl (เต็ม URL), embedUrl (เต็ม URL), contentUrl (เต็ม URL)
 */
export default function JsonLdVideo({ id = "jsonld-video", video }) {
  if (!video) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.excerpt || video.title,
    thumbnailUrl: video.thumbnailUrl ? [video.thumbnailUrl] : undefined,
    uploadDate: video.date,
    duration: video.duration,
    embedUrl: video.embedUrl,
    contentUrl: video.contentUrl || video.embedUrl,
    inLanguage: "th-TH",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: new URL(LOGO_URL, SITE.url).toString(),
      },
    },
    potentialAction: {
      "@type": "WatchAction",
      target: [video.embedUrl],
    },
  };

  return <JsonLd id={id} data={data} />;
}
