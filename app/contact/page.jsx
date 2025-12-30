// app/contact/page.jsx
import React from "react";
import Link from "next/link";
import { BRAND } from "@/seo.config";

export default function Contact() {
    const mail = BRAND.email;

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>ติดต่อเรา</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact wow fadeInUp">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Get In Touch</p>
                        <h2>ปรึกษา/ประเมินราคาได้ฟรี</h2>
                    </div>

                    <div className="row">
                        {/* Contact Info */}
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="flaticon-address"></i>
                                    <div className="contact-text">
                                        <h2>ที่ตั้งสำนักงาน</h2>
                                        <p>518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <i className="flaticon-call"></i>
                                    <div className="contact-text">
                                        <h2>โทรศัพท์</h2>
                                        <p>
                                            <a href="tel:0842899794">084-289-9794</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <i className="flaticon-send-mail"></i>
                                    <div className="contact-text">
                                        <h2>อีเมล</h2>
                                        <p>
                                            <a href={`mailto:${mail}`}>{mail}</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <i className="flaticon-building"></i>
                                    <div className="contact-text">
                                        <h2>พื้นที่ให้บริการ</h2>
                                        <p>ราชบุรี • นครปฐม • สมุทรสงคราม (และพื้นที่ใกล้เคียง)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-6">
                            <div className="contact-form">
                                <div id="success"></div>

                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="ชื่อ-นามสกุล"
                                            required="required"
                                            data-validation-required-message="กรุณากรอกชื่อของคุณ"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            placeholder="เบอร์โทรศัพท์"
                                            required="required"
                                            data-validation-required-message="กรุณากรอกเบอร์โทรศัพท์"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="อีเมล (ถ้ามี)"
                                            data-validation-required-message="กรุณากรอกอีเมล"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="หัวข้อที่ต้องการติดต่อ (เช่น ขอประเมินราคา / ขอปรึกษาแบบบ้าน)"
                                            required="required"
                                            data-validation-required-message="กรุณากรอกหัวข้อ"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="รายละเอียด (เช่น พื้นที่ก่อสร้าง, ขนาดบ้าน, งบประมาณโดยประมาณ, พื้นที่จังหวัด/อำเภอ)"
                                            required="required"
                                            data-validation-required-message="กรุณากรอกรายละเอียด"
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">
                                            ส่งข้อมูลให้ทีมงานติดต่อกลับ
                                        </button>
                                    </div>

                                    <small className="d-block mt-2">
                                        * ทีมงานจะติดต่อกลับโดยเร็ว เพื่อขอรายละเอียดเพิ่มเติมและนัดหมายประเมินหน้างาน (ถ้าจำเป็น)
                                    </small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
