// app/cookie-policy/page.jsx
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { BRAND } from "@/seo.config";

export const metadata = {
    title: "นโยบายคุกกี้ (Cookie Policy) | พีจีโฮม จำกัด",
    description:
        "นโยบายคุกกี้ของ พีจีโฮม จำกัด อธิบายการใช้คุกกี้เพื่อความปลอดภัย การทำงานของเว็บไซต์ และการปรับปรุงประสบการณ์ผู้ใช้",
    alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
    const mail = BRAND.email;

    const breadcrumb = [
        { name: "หน้าแรก", url: "/" },
        { name: "นโยบายคุกกี้", url: "/cookie-policy" },
    ];

    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "นโยบายคุกกี้ (Cookie Policy) | พีจีโฮม จำกัด",
        url: absoluteUrl("/cookie-policy"),
        inLanguage: "th-TH",
    };

    return (
        <main className="container py-4 py-md-5">
            <BreadcrumbJsonLd items={breadcrumb} />
            <JsonLd id="jsonld-cookie-webpage" data={webPage} />

            <header className="mb-4">
                <h1 className="fw-bold mb-2">นโยบายคุกกี้ (Cookie Policy)</h1>
                <p className="text-muted mb-0">
                    หน้านี้อธิบายว่าเว็บไซต์ของ พีจีโฮม จำกัด ใช้คุกกี้และเทคโนโลยีที่คล้ายกันอย่างไร เพื่อให้เว็บไซต์ทำงานได้ดีและปลอดภัย
                </p>
            </header>

            <section className="bg-white border rounded p-3 p-md-4 shadow-sm">
                <h2 className="h5 fw-bold">1) คุกกี้คืออะไร</h2>
                <p>
                    คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่เว็บไซต์บันทึกไว้ในอุปกรณ์ของคุณ เพื่อจดจำการตั้งค่า
                    และช่วยให้การใช้งานเว็บไซต์สะดวกขึ้น รวมถึงช่วยด้านความปลอดภัยของระบบ
                </p>

                <h2 className="h5 fw-bold mt-4">2) เราใช้คุกกี้เพื่ออะไร</h2>
                <ul className="mb-0">
                    <li>
                        <strong>เพื่อการทำงานของเว็บไซต์</strong>: ทำให้หน้าเว็บแสดงผลและทำงานได้ถูกต้อง
                    </li>
                    <li>
                        <strong>เพื่อความปลอดภัย</strong>: ช่วยป้องกันสแปมและกิจกรรมที่ผิดปกติ
                    </li>
                    <li>
                        <strong>เพื่อปรับปรุงประสบการณ์ผู้ใช้</strong>: ดูภาพรวมการใช้งาน เช่น หน้าที่เข้าชมบ่อย เพื่อนำไปพัฒนาเนื้อหาและโครงสร้างเว็บไซต์
                    </li>
                </ul>

                <h2 className="h5 fw-bold mt-4">3) ประเภทของคุกกี้ที่อาจมีบนเว็บไซต์</h2>
                <ul className="mb-0">
                    <li>
                        <strong>คุกกี้ที่จำเป็น (Strictly Necessary)</strong>: จำเป็นต่อการทำงานของเว็บไซต์และความปลอดภัย
                    </li>
                    <li>
                        <strong>คุกกี้เพื่อการวัดผล/สถิติ (Analytics)</strong>: ช่วยให้เข้าใจการใช้งานเว็บไซต์ในภาพรวมเพื่อปรับปรุงบริการ
                    </li>
                </ul>

                <h2 className="h5 fw-bold mt-4">4) การตั้งค่าคุกกี้</h2>
                <p className="mb-0">
                    คุณสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าในเบราว์เซอร์ของคุณ เช่น การลบคุกกี้เดิมหรือบล็อกคุกกี้ใหม่
                    อย่างไรก็ตาม หากปิดคุกกี้บางประเภท เว็บไซต์บางส่วนอาจทำงานได้ไม่สมบูรณ์
                </p>

                <hr className="my-4" />

                <h2 className="h5 fw-bold">ติดต่อเรา</h2>
                <p className="mb-1">
                    <strong>บริษัท พีจีโฮม จำกัด</strong>
                </p>
                <p className="mb-1">ที่อยู่: 518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000</p>
                <p className="mb-1">โทร: 084-2899794</p>
                <p className="mb-0">
                    อีเมล: <a href={`mailto:${mail}`}>{mail}</a>
                </p>
            </section>
        </main>
    );
}
