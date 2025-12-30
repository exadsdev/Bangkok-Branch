import Script from "next/script";

/**
 * ใช้สำหรับฝัง JSON-LD (Structured Data) แบบปลอดภัย
 * - ใส่เป็น object แล้วระบบจะ stringify ให้
 */
export default function JsonLd({ id, data }) {
  if (!data) return null;
  const json = typeof data === "string" ? data : JSON.stringify(data);
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
