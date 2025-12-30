// app/help/page.jsx
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { BRAND } from "@/seo.config";

export const metadata = {
    title: "ศูนย์ช่วยเหลือ (Help Center) | พีจีโฮม จำกัด",
    description:
        "ศูนย์ช่วยเหลือของ พีจีโฮม จำกัด รวมคำแนะนำการเริ่มต้นติดต่อ ขอประเมินราคา เอกสารที่ควรเตรียม และช่องทางรับความช่วยเหลือ",
    alternates: { canonical: "/help" },
};

export default function HelpPage() {
    const mail = BRAND.email;

    const breadcrumb = [
        { name: "หน้าแรก", url: "/" },
        { name: "ศูนย์ช่วยเหลือ", url: "/help" },
    ];

    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "ศูนย์ช่วยเหลือ (Help Center) | พีจีโฮม จำกัด",
        url: absoluteUrl("/help"),
        inLanguage: "th-TH",
    };

    return (
        <main className="container py-4 py-md-5">
            <BreadcrumbJsonLd items={breadcrumb} />
            <JsonLd id="jsonld-help-webpage" data={webPage} />

            <header className="mb-4">
                <h1 className="fw-bold mb-2">ศูนย์ช่วยเหลือ (Help Center)</h1>
                <p className="text-muted mb-0">
                    หน้านี้รวบรวมคำแนะนำที่ใช้จริง เพื่อให้คุณเริ่มต้นวางแผนสร้างบ้านและติดต่อทีมงานได้เร็วขึ้น
                </p>
            </header>

            <section className="row g-3">
                <div className="col-lg-7">
                    <div className="bg-white border rounded p-3 p-md-4 shadow-sm h-100">
                        <h2 className="h5 fw-bold mb-3">เริ่มต้นอย่างไรให้ประเมินงานได้แม่นยำ</h2>

                        <ol className="mb-0">
                            <li className="mb-2">
                                <strong>ระบุพื้นที่ก่อสร้าง</strong> (ตำบล/อำเภอ/จังหวัด) และสภาพพื้นที่โดยรวม
                                เพื่อช่วยประเมินการขนส่งและการทำงานหน้างาน
                            </li>
                            <li className="mb-2">
                                <strong>บอกขนาดบ้านที่ต้องการ</strong> เช่น จำนวนชั้น จำนวนห้องนอน ห้องน้ำ
                                ห้องครัว ที่จอดรถ และพื้นที่ใช้สอยโดยประมาณ (ถ้ามี)
                            </li>
                            <li className="mb-2">
                                <strong>กำหนดงบประมาณเป้าหมาย</strong> หรือช่วงงบที่รับได้
                                เพื่อให้ทีมงานเสนอแนวทางแบบบ้านและสเปควัสดุให้เหมาะกับงบจริง
                            </li>
                            <li className="mb-2">
                                <strong>ส่งรูปแบบบ้านที่ชอบ</strong> หรือแนวสไตล์ที่ต้องการ (โมเดิร์น/มินิมอล/ร่วมสมัย)
                                จะช่วยให้สรุปแนวทางได้เร็วขึ้น
                            </li>
                            <li className="mb-2">
                                <strong>นัดคุยรายละเอียด</strong> เพื่อสรุปขอบเขตงาน
                                จากนั้นทีมงานจึงจัดทำข้อเสนอ และวางแผนการดำเนินงานอย่างเป็นระบบ
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="bg-white border rounded p-3 p-md-4 shadow-sm h-100">
                        <h2 className="h5 fw-bold mb-3">ช่องทางติดต่อ</h2>

                        <p className="mb-2">
                            <strong>บริษัท พีจีโฮม จำกัด</strong>
                        </p>
                        <p className="mb-1">ที่อยู่: 518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000</p>
                        <p className="mb-1">โทร: 084-2899794</p>
                        <p className="mb-3">
                            อีเมล: <a href={`mailto:${mail}`}>{mail}</a>
                        </p>

                        <div className="d-grid gap-2">
                            <Link className="btn btn-primary" href="/contact">
                                ไปที่หน้าติดต่อเรา
                            </Link>
                            <Link className="btn btn-outline-secondary" href="/faqs">
                                ดูคำถามที่พบบ่อย
                            </Link>
                            <Link className="btn btn-outline-secondary" href="/terms">
                                เงื่อนไขการใช้บริการ
                            </Link>
                            <Link className="btn btn-outline-secondary" href="/privacy-policy">
                                นโยบายความเป็นส่วนตัว
                            </Link>
                            <Link className="btn btn-outline-secondary" href="/cookie-policy">
                                นโยบายคุกกี้
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border rounded p-3 p-md-4 shadow-sm mt-3">
                <h2 className="h5 fw-bold mb-3">ข้อมูลที่แนะนำให้เตรียมก่อนติดต่อ (ช่วยให้คุยจบในรอบเดียว)</h2>
                <ul className="mb-0">
                    <li>ตำแหน่งที่ดิน/แผนที่ หรือจุดสังเกตบริเวณที่ดิน</li>
                    <li>ขนาดที่ดิน (กว้าง x ยาว) หรือพื้นที่รวมโดยประมาณ</li>
                    <li>ความต้องการหลัก: จำนวนห้อง ฟังก์ชันพิเศษ (ผู้สูงอายุ/ออฟฟิศ/ห้องพระ ฯลฯ)</li>
                    <li>ภาพตัวอย่างสไตล์บ้านที่ชอบ (2–5 รูป)</li>
                    <li>งบประมาณเป้าหมาย หรือช่วงงบที่ตั้งไว้</li>
                </ul>
            </section>
        </main>
    );
}
