// app/projects/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>ผลงานของเรา</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/projects">Our Projects</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Projects</p>
                        <h2>ชมผลงานการสร้างบ้านของพีจีโฮม</h2>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">
                                    ทั้งหมด
                                </li>
                                <li data-filter=".first">ส่งมอบแล้ว</li>
                                <li data-filter=".second">กำลังก่อสร้าง</li>
                                <li data-filter=".third">เตรียมเริ่มงาน</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container">
                        {/* 1 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-1.jpg" alt="บ้านเดี่ยวส่งมอบแล้ว - ราชบุรี" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            โครงการบ้านเดี่ยวส่งมอบแล้ว เน้นงานโครงสร้างแข็งแรง วัสดุได้มาตรฐาน ตรวจเก็บงานก่อนส่งมอบอย่างละเอียด
                                            เพื่อให้ลูกค้ามั่นใจในคุณภาพและความเรียบร้อยของบ้าน
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>บ้านเดี่ยว 2 ชั้น (ส่งมอบแล้ว)</h3>
                                    <Link className="btn" href="/contact">
                                        ขอรายละเอียด
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-2.jpg" alt="บ้านกำลังก่อสร้าง - นครปฐม" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            โครงการกำลังก่อสร้าง พร้อมระบบควบคุมคุณภาพงาน (QC) ตรวจเช็คตามจุดสำคัญ
                                            เพื่อให้งานเป็นไปตามแบบและรายละเอียดที่ตกลงไว้ในสัญญา
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>บ้านชั้นเดียว (กำลังก่อสร้าง)</h3>
                                    <Link className="btn" href="/contact">
                                        สอบถามคืบหน้า/รูปหน้างาน
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-3.jpg" alt="โครงการเตรียมเริ่มงาน - สมุทรสงคราม" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            โครงการเตรียมเริ่มงาน อยู่ในขั้นตอนสรุปแบบและรายการวัสดุ พร้อมวางแผนงานก่อสร้าง
                                            เพื่อให้กระบวนการเริ่มงานชัดเจนและบริหารเวลาได้เหมาะสม
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>บ้านเดี่ยว (เตรียมเริ่มงาน)</h3>
                                    <Link className="btn" href="/contact">
                                        ขอประเมินราคา
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-4.jpg" alt="บ้านส่งมอบแล้ว - งานเก็บรายละเอียด" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            งานส่งมอบพร้อมตรวจรับครบขั้นตอน ตั้งแต่ตรวจแบบก่อนเริ่มงาน ไปจนถึงตรวจเก็บงานก่อนส่งมอบ
                                            เพื่อให้ลูกค้าได้รับบ้านที่แข็งแรง สวยงาม และพร้อมเข้าอยู่
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>บ้านเดี่ยว (ส่งมอบแล้ว)</h3>
                                    <Link className="btn" href="/contact">
                                        ขอรายละเอียดแบบบ้าน
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-5.jpg" alt="โครงการกำลังก่อสร้าง - งานโครงสร้าง" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            โครงการกำลังก่อสร้าง โดยเน้นความปลอดภัยหน้างานและการตรวจเช็คคุณภาพวัสดุ
                                            เพื่อให้งานโครงสร้างได้มาตรฐานและต่อเนื่องตามแผนงาน
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>โครงการกำลังก่อสร้าง</h3>
                                    <Link className="btn" href="/contact">
                                        ขอรูปหน้างานล่าสุด
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                    <Image src="/img/portfolio-6.jpg" alt="โครงการเตรียมเริ่มงาน - ขั้นตอนเอกสาร" width={900} height={650} className="img-fluid" />
                                    <div className="portfolio-overlay">
                                        <p>
                                            โครงการเตรียมเริ่มงาน อยู่ระหว่างเตรียมเอกสารและสรุปแผนงาน เช่น ขออนุญาตก่อสร้าง
                                            และการเตรียมความพร้อมหน้างาน เพื่อให้เริ่มก่อสร้างได้อย่างราบรื่น
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                    <h3>โครงการเตรียมเริ่มงาน</h3>
                                    <Link className="btn" href="/contact">
                                        ปรึกษาเอกสาร/ขั้นตอน
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 load-more">
                            <Link className="btn" href="/contact">
                                ต้องการดูผลงานเพิ่มเติม / ขอใบเสนอราคา
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
