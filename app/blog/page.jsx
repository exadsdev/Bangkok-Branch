// app/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/seo.config";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "บทความ (Blog)",
  description: "รวมบทความความรู้ เพื่อช่วยให้ Google เข้าใจบริการและเนื้อหาของเว็บไซต์",
  alternates: { canonical: "/blog" },
};

const DATA_FILE = path.join(process.cwd(), "data", "blog.json");

async function readAll() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export default async function BlogIndexPage() {
  const posts = await readAll();

  const breadcrumb = [
    { name: "หน้าแรก", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: absoluteUrl(`/blog/${p.slug}`),
      name: p.title,
    })),
  };

  // ✅ บล็อกแนะนำ 3 บล็อก (คุณใส่รูปเอง)
  const featured = [
    {
      slug: "block-1",
      title: "บล็อก 1: ขั้นตอนสร้างบ้านแบบ Turn Key เริ่มยังไงให้ไม่พลาด",
      excerpt:
        "สรุปขั้นตอนตั้งแต่คุยความต้องการ ออกแบบ ประเมินงบ คุมงานหน้างาน จนถึงตรวจรับ-ส่งมอบ เพื่อให้คุณวางแผนได้อย่างมั่นใจ",
      date: "อัปเดต: ล่าสุด",
      image: "/img/1.webp",
      tags: ["Turn Key", "ขั้นตอนสร้างบ้าน", "วางแผนงบ"],
    },
    {
      slug: "block-2",
      title: "บล็อก 2: เช็กลิสต์วัสดุและสเปคงานก่อสร้าง ควรถามอะไรบ้างก่อนเซ็นสัญญา",
      excerpt:
        "รวมคำถามสำคัญที่ช่วยให้คุณตรวจสอบวัสดุ/สเปคได้ชัดเจน ลดความเสี่ยงเรื่องลดสเปค และทำให้การคุมงบเป็นระบบมากขึ้น",
      date: "อัปเดต: ล่าสุด",
      image: "/img/2.webp",
      tags: ["วัสดุก่อสร้าง", "สเปคงาน", "ตรวจสอบสัญญา"],
    },
    {
      slug: "block-3",
      title: "บล็อก 3: ระบบ QC หน้างานสำคัญอย่างไร ทำไมช่วยให้บ้านแข็งแรงและงานจบเรียบร้อย",
      excerpt:
        "อธิบายจุดตรวจสำคัญของงานโครงสร้าง งานสถาปัตย์ และงานระบบ พร้อมแนวทางติดตามงานให้โปร่งใส ตรวจรับงานได้ง่าย",
      date: "อัปเดต: ล่าสุด",
      image: "/img/3.webp",
      tags: ["QC", "มาตรฐานงานก่อสร้าง", "ตรวจรับงาน"],
    },
  ];

  // ✅ JSON-LD สำหรับ Featured (ช่วย SEO เพิ่ม)
  const featuredItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "บทความแนะนำ",
    itemListElement: featured.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: absoluteUrl(`/blog/${p.slug}`),
      name: p.title,
    })),
  };

  return (
    <section className="container py-4 py-md-5">
      <BreadcrumbJsonLd items={breadcrumb} />
      <JsonLd id="jsonld-blog-itemlist" data={itemList} />
      <JsonLd id="jsonld-blog-featured-itemlist" data={featuredItemList} />

      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-3">
        <div>
          <h1 className="h3 fw-bold mb-2">บทความ</h1>
          <p className="text-muted mb-0">
            ทำบทความเชิงความรู้ (ไม่ขายตรง) ช่วยเพิ่มโอกาส Rank และช่วยให้ Google เข้าใจเจตนาคำค้นได้ดีขึ้น
          </p>
        </div>
        <div className="small text-muted">
          โฟกัส: คุณภาพเนื้อหา • โครงสร้าง H1/H2 • FAQ • Schema
        </div>
      </div>

      {/* ✅ 3 บล็อกแนะนำ (มีรูปภาพ) */}
      <div className="row g-3 g-md-4 mb-4">
        {featured.map((p) => (
          <div className="col-12 col-md-4" key={p.slug}>
            <div className="card h-100 shadow-sm border-0">
              <div className="ratio ratio-16x9 bg-light rounded-top overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={675}
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                  priority={p.slug === "block-1"}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <div className="small text-muted mb-2">{p.date}</div>
                <h2 className="h6 fw-bold mb-2">{p.title}</h2>
                <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                  {p.excerpt}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="badge text-bg-light border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ รายการบทความทั้งหมดจาก blog.json */}
      <div className="list-group">
        {posts.length === 0 ? (
          <div className="list-group-item">
            <div className="fw-bold">ยังไม่มีบทความในระบบ</div>
            <div className="small text-muted">
              เพิ่มบทความในไฟล์ data/blog.json แล้วรีเฟรชหน้าอีกครั้ง
            </div>
          </div>
        ) : (
          posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div>
                  <div className="fw-bold">{p.title}</div>
                  <div className="small text-muted">{p.excerpt}</div>
                </div>
                <div className="small text-muted text-nowrap">{p.date}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
