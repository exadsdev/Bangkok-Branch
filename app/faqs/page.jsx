// app/faqs/page.jsx
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { BRAND } from "@/seo.config";

export const metadata = {
    title: "คำถามที่พบบ่อย (FAQs) | พีจีโฮม จำกัด",
    description:
        "รวมคำถามที่พบบ่อยเกี่ยวกับบริการรับสร้างบ้านของ พีจีโฮม จำกัด ตั้งแต่ขั้นตอนการทำงาน การประเมินราคา วัสดุ สัญญา และการรับประกัน",
    alternates: { canonical: "/faqs" },
};

const FAQS = [
    {
        q: "ถ้าต้องการเริ่มต้นสร้างบ้าน ต้องทำอะไรเป็นอันดับแรก?",
        a: "เริ่มจากเตรียมข้อมูลพื้นฐาน เช่น พื้นที่ก่อสร้าง (จังหวัด/อำเภอ) ขนาดที่ดิน จำนวนชั้น จำนวนห้อง และงบประมาณเป้าหมาย จากนั้นติดต่อทีมงานเพื่อรับคำปรึกษาและประเมินแนวทางแบบบ้าน/สเปคที่เหมาะสม เมื่อได้แนวทางชัดเจนจึงนัดหมายตรวจหน้างาน (หากจำเป็น) และสรุปขอบเขตงานเพื่อจัดทำข้อเสนอและสัญญา",
    },
    {
        q: "การประเมินราคาออนไลน์เชื่อถือได้แค่ไหน?",
        a: "การประเมินผ่านออนไลน์เป็นการประเมินเบื้องต้นจากข้อมูลที่ลูกค้าให้ เพื่อช่วยวางแผนงบประมาณให้เร็วขึ้น ราคาจริงจะยึดตามแบบ สเปควัสดุ ขอบเขตงาน และสภาพหน้างาน โดยจะระบุให้ชัดเจนในเอกสารข้อเสนอและสัญญา",
    },
    {
        q: "ลูกค้าสามารถตรวจสอบรายการวัสดุก่อสร้างได้หรือไม่?",
        a: "ได้ ลูกค้าสามารถตรวจสอบรายละเอียดวัสดุในแต่ละหมวดงาน (โครงสร้าง งานสถาปัตย์ งานระบบ ฯลฯ) เพื่อความสบายใจก่อนเริ่มงานและระหว่างดำเนินงาน โดยยึดตามสเปคและข้อตกลงที่ระบุในสัญญา",
    },
    {
        q: "พีจีโฮมมีบริการอะไรบ้างนอกเหนือจากการก่อสร้าง?",
        a: "บริษัทให้คำปรึกษาและช่วยประสานงานในขั้นตอนที่เกี่ยวข้อง เช่น การเตรียมเอกสารเพื่อยื่นขออนุญาตก่อสร้าง การเตรียมข้อมูลเพื่อยื่นสินเชื่อ และการประสานงานเรื่องมิเตอร์น้ำ-ไฟและบ้านเลขที่ ทั้งนี้รายละเอียดบริการและเงื่อนไขจะอ้างอิงตามข้อตกลงของแต่ละโครงการ",
    },
    {
        q: "ระยะเวลาก่อสร้างใช้เวลาประมาณเท่าไร?",
        a: "ระยะเวลาก่อสร้างขึ้นอยู่กับแบบบ้าน ขนาด พื้นที่หน้างาน สภาพอากาศ และขอบเขตงาน โดยทีมงานจะประเมินกรอบเวลาให้ตามโครงการ และกำหนดแผนงาน/งวดงานให้ชัดเจนก่อนเริ่มก่อสร้าง",
    },
    {
        q: "มีการรับประกันงานก่อสร้างหรือไม่?",
        a: "มี การรับประกันจะยึดตามเงื่อนไขในสัญญาและมาตรฐานงานก่อสร้าง โดยจะแยกประเภทงานที่รับประกันและระยะเวลารับประกันให้ชัดเจนก่อนเริ่มงาน เพื่อให้ลูกค้ามั่นใจหลังส่งมอบ",
    },
    {
        q: "ถ้าระหว่างงานอยากปรับแบบหรือเพิ่มงาน ทำได้ไหม?",
        a: "ทำได้ โดยต้องแจ้งรายละเอียดที่ต้องการปรับเปลี่ยนให้ทีมงานประเมินผลกระทบต่อราคา ระยะเวลา และวัสดุ จากนั้นจะออกเอกสารสรุปการเปลี่ยนแปลง (งานเพิ่ม/งานลด) เพื่อให้ตกลงร่วมกันอย่างชัดเจนก่อนดำเนินการ",
    },
    {
        q: "ติดต่อทีมงานอย่างไรให้ได้คำตอบเร็วที่สุด?",
        a: `แนะนำให้เตรียมข้อมูลพื้นฐาน (พื้นที่ก่อสร้าง งบประมาณ แบบหรือภาพตัวอย่าง) แล้วติดต่อผ่านเบอร์โทร 084-2899794 หรืออีเมล ${BRAND.email} หากต้องการนัดหมายพูดคุย ทีมงานจะช่วยประสานเวลาที่สะดวกให้`,
    },
];

export default function FaqsPage() {
    const breadcrumb = [
        { name: "หน้าแรก", url: "/" },
        { name: "คำถามที่พบบ่อย", url: "/faqs" },
    ];

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((x) => ({
            "@type": "Question",
            name: x.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: x.a,
            },
        })),
    };

    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "คำถามที่พบบ่อย (FAQs) | พีจีโฮม จำกัด",
        url: absoluteUrl("/faqs"),
        inLanguage: "th-TH",
    };

    return (
        <main className="container py-4 py-md-5">
            <BreadcrumbJsonLd items={breadcrumb} />
            <JsonLd id="jsonld-faq-webpage" data={webPage} />
            <JsonLd id="jsonld-faqpage" data={faqJsonLd} />

            <header className="mb-4">
                <h1 className="fw-bold mb-2">คำถามที่พบบ่อย (FAQs)</h1>
                <p className="text-muted mb-0">
                    รวมคำถามที่ลูกค้าถามบ่อยเกี่ยวกับขั้นตอนการสร้างบ้าน การประเมินราคา วัสดุ สัญญา และการรับประกัน
                </p>
            </header>

            <section className="bg-white border rounded p-3 p-md-4 shadow-sm">
                <div className="accordion" id="faq">
                    {FAQS.map((x, idx) => (
                        <div className="accordion-item" key={idx}>
                            <h2 className="accordion-header">
                                <button
                                    className={"accordion-button " + (idx === 0 ? "" : "collapsed")}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq-${idx}`}
                                    aria-expanded={idx === 0 ? "true" : "false"}
                                >
                                    {x.q}
                                </button>
                            </h2>
                            <div
                                id={`faq-${idx}`}
                                className={"accordion-collapse collapse " + (idx === 0 ? "show" : "")}
                                data-bs-parent="#faq"
                            >
                                <div className="accordion-body">{x.a}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="my-4" />

                <div className="d-flex flex-column flex-md-row gap-2">
                    <a className="btn btn-primary" href="/contact">
                        ติดต่อเราเพื่อประเมินงาน
                    </a>
                    <a className="btn btn-outline-secondary" href="/help">
                        ไปที่ศูนย์ช่วยเหลือ
                    </a>
                </div>
            </section>
        </main>
    );
}
