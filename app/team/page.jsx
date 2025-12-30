// app/team/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>ทีมงานของเรา</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/team">Our Team</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Team</p>
                        <h2>พบกับทีมวิศวกรและทีมช่างผู้เชี่ยวชาญ</h2>
                    </div>

                    <div className="row">
                        {/* 1 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-1.jpg" alt="ผู้บริหารและผู้ก่อตั้ง" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมผู้บริหาร</h2>
                                    <p>ผู้ก่อตั้ง / บริหารโครงการ</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-2.jpg" alt="วิศวกรโยธา" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมวิศวกรโยธา</h2>
                                    <p>คุมงานโครงสร้าง / มาตรฐานวิศวกรรม</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-3.jpg" alt="ทีมออกแบบ" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมออกแบบ</h2>
                                    <p>สถาปัตย์ / ฟังก์ชันใช้งาน / ปรับแบบตามงบ</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-4.jpg" alt="ทีมช่างและควบคุมคุณภาพ" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมช่าง / QC</h2>
                                    <p>งานละเอียด ตรวจรับก่อนส่งมอบ</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-1.jpg" alt="ทีมประสานงานและเอกสาร" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมประสานงาน</h2>
                                    <p>ดูแลลูกค้า / ประสานงานเอกสาร</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-2.jpg" alt="ทีมโครงสร้าง" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมโครงสร้าง</h2>
                                    <p>ตรวจแบบ / คุมคุณภาพงานก่อสร้าง</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-3.jpg" alt="ทีมออกแบบตกแต่งภายใน" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมตกแต่งภายใน</h2>
                                    <p>จัดวางฟังก์ชัน / เลือกวัสดุ / งานสวยจบ</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <Image src="/img/team-4.jpg" alt="ทีมงานระบบและส่งมอบ" width={600} height={600} className="img-fluid" />
                                </div>
                                <div className="team-text">
                                    <h2>ทีมส่งมอบงาน</h2>
                                    <p>ตรวจเก็บงาน / ส่งมอบ / ดูแลหลังงาน</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-fb" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
