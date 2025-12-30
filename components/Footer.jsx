// app/components/Footer.jsx
import React from "react";
import Link from "next/link";
import { BRAND } from "@/seo.config";




export default function Footer() {

    const mail = BRAND.email;


    return (
        <>
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container">
                    <div className="row">
                        {/* Contact */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>ข้อมูลติดต่อ</h2>
                                <p>
                                    <i className="fa fa-map-marker-alt"></i>
                                    518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000
                                </p>
                                <p>
                                    <i className="fa fa-phone-alt"></i>
                                    <a href="tel:0842899794">084-289-9794</a>
                                </p>
                                <p>
                                    <i className="fa fa-envelope"></i>
                                    <a href={`mailto:${mail}`}>{mail}</a>
                                </p>

                                <div className="footer-social">
                                    <a
                                        href="https://x.com"
                                        aria-label="Twitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        aria-label="Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        aria-label="YouTube"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        aria-label="Instagram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>บริการ</h2>
                                <Link href="/service">รับสร้างบ้าน</Link>
                                <Link href="/service">ต่อเติม / ปรับปรุงบ้าน</Link>
                                <Link href="/service">ออกแบบบ้าน</Link>
                                <Link href="/service">ออกแบบตกแต่งภายใน</Link>
                                <Link href="/service">ควบคุมคุณภาพงาน (QC)</Link>
                            </div>
                        </div>

                        {/* Useful Pages */}
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>หน้าเพจที่เป็นประโยชน์</h2>
                                <Link href="/about">เกี่ยวกับเรา</Link>
                                <Link href="/contact">ติดต่อเรา</Link>
                                <Link href="/team">ทีมงาน</Link>
                                <Link href="/projects">ผลงาน / โครงการ</Link>
                                <Link href="/faqs">คำถามที่พบบ่อย</Link>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-6 col-lg-3">
                            <div className="newsletter">
                                <h2>จดหมายข่าว</h2>
                                <p>
                                    สมัครรับข่าวสารและบทความความรู้เรื่องการสร้างบ้าน เช่น ขั้นตอนการขออนุญาต
                                    การเตรียมเอกสารสินเชื่อ และเคล็ดลับเลือกวัสดุให้คุ้มค่า
                                </p>

                                <div className="form">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="กรอกอีเมลของคุณ"
                                        aria-label="Email"
                                    />
                                    <button className="btn" type="button">
                                        สมัครรับข่าวสาร
                                    </button>
                                </div>

                                <small className="d-block mt-2">
                                    * เราใช้ข้อมูลเพื่อส่งข่าวสารเท่านั้น และคุณสามารถยกเลิกได้ทุกเมื่อ
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer menu */}
                <div className="container footer-menu">
                    <div className="f-menu">
                        <Link href="/terms">เงื่อนไขการใช้</Link>
                        <Link href="/privacy-policy">นโยบายความเป็นส่วนตัว</Link>
                        <Link href="/cookie-policy">นโยบายคุกกี้</Link>
                        <Link href="/help">ศูนย์ช่วยเหลือ</Link>
                        <Link href="/faqs">คำถามที่พบบ่อย</Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                &copy; <Link href="/">บริษัท พีจีโฮม จำกัด</Link> สงวนลิขสิทธิ์
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                ออกแบบและพัฒนาโดย <Link href="/">บริษัท พีจีโฮม จำกัด</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
