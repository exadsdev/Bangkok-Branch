import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-5">
      <h1 className="h3 fw-bold">ไม่พบหน้านี้</h1>
      <p className="text-muted">ลิงก์อาจถูกย้ายหรือไม่ถูกต้อง</p>
      <Link href="/" className="btn btn-primary">กลับหน้าแรก</Link>
    </section>
  );
}
