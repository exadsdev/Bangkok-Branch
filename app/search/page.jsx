export const metadata = {
  title: "ค้นหา",
  description: "หน้าค้นหา (ตัวอย่าง) สำหรับ SearchAction schema",
  alternates: { canonical: "/search" },
};

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || "").toString();

  return (
    <section className="container py-4 py-md-5">
      <h1 className="h3 fw-bold">ค้นหา</h1>
      <p className="text-muted">
        นี่เป็นหน้าตัวอย่าง เพื่อรองรับ SearchAction ใน schema — คุณสามารถต่อยอดทำระบบค้นหาจริงได้
      </p>

      <form className="d-flex gap-2" action="/search" method="get">
        <input
          className="form-control"
          name="q"
          defaultValue={q}
          placeholder="พิมพ์คำค้น…"
        />
        <button className="btn btn-primary" type="submit">ค้นหา</button>
      </form>

      {q ? (
        <div className="alert alert-info mt-3">
          ผลการค้นหา (ตัวอย่าง): <strong>{q}</strong>
        </div>
      ) : null}
    </section>
  );
}
