// app/single/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Single() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>บทความความรู้: ขั้นตอนสร้างบ้านกับพีจีโฮม</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/single">Single Page</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single">
                <div className="container">
                    <div className="row">
                        {/* Content */}
                        <div className="col-lg-8">
                            <div className="single-content wow fadeInUp">
                                <Image
                                    src="/img/single.jpg"
                                    alt="ขั้นตอนการสร้างบ้านกับพีจีโฮม"
                                    width={1200}
                                    height={700}
                                    className="img-fluid"
                                />

                                <h2>สร้างบ้านกับพีจีโฮม เริ่มอย่างไร? (อธิบายแบบเข้าใจง่าย)</h2>

                                <p>
                                    การสร้างบ้านเป็นการลงทุนครั้งใหญ่ของครอบครัว “พีจีโฮม” จึงวางระบบทำงานแบบเป็นขั้นตอน
                                    พร้อมทีมวิศวกรและทีม QC ช่วยตรวจสอบคุณภาพงานก่อสร้าง วัสดุ และรายละเอียดหน้างานให้เป็นไปตามแบบ
                                    และตรงตามสัญญา เพื่อให้ลูกค้ามั่นใจตั้งแต่เริ่มจนส่งมอบ
                                </p>

                                <p>
                                    เราให้บริการแบบครบวงจร (One Stop Service / Turn Key) ตั้งแต่การพูดคุยความต้องการเบื้องต้น
                                    การออกแบบบ้าน การคำนวณโครงสร้าง การเตรียมเอกสาร ไปจนถึงการก่อสร้างและตรวจรับก่อนส่งมอบ
                                    โดยมีทีมงานคอยประสานงานและอัปเดตความคืบหน้าอย่างต่อเนื่อง
                                </p>

                                <h3>1) ปรึกษาและประเมินงบประมาณเบื้องต้น</h3>
                                <p>
                                    เริ่มจากแจ้งพื้นที่ก่อสร้าง จังหวัด/อำเภอ ขนาดพื้นที่ใช้สอย รูปแบบบ้านที่ต้องการ และงบประมาณที่ตั้งไว้
                                    ทีมงานจะช่วยประเมินแนวทางให้เหมาะสม พร้อมแนะนำตัวเลือกที่คุ้มค่าในงบของคุณ
                                </p>

                                <h3>2) ออกแบบบ้านและสรุปรายการงาน</h3>
                                <p>
                                    เมื่อสรุปความต้องการแล้ว ทีมออกแบบจะจัดทำแบบบ้านและปรับแก้ให้เหมาะกับพื้นที่และการใช้งานจริง
                                    พร้อมสรุปรายการงาน/รายละเอียดสำคัญ เพื่อให้ลูกค้าเห็นภาพชัดเจนก่อนเริ่มก่อสร้าง
                                </p>

                                <h3>3) คุมคุณภาพวัสดุและมาตรฐานงานก่อสร้าง</h3>
                                <p>
                                    หน้างานจะมีการตรวจเช็คตามจุดสำคัญ (QC) ทั้งงานโครงสร้าง งานสถาปัตย์ และงานระบบต่าง ๆ
                                    เพื่อให้งานได้มาตรฐาน แข็งแรง และเรียบร้อย โดยเน้น “คุณภาพมากกว่ากำไร” ตามแนวทางของบริษัท
                                </p>

                                <h3>4) บริการเอกสารช่วยให้ลูกค้าสะดวก</h3>
                                <p>
                                    เพื่อให้ลูกค้าสบายใจและประหยัดเวลา เราช่วยประสานงานเอกสารที่จำเป็นตามความเหมาะสม เช่น
                                    ขออนุญาตก่อสร้าง ประสานงานสินเชื่อธนาคาร การขอมิเตอร์น้ำ-ไฟ และการขอบ้านเลขที่
                                    (รายละเอียดขึ้นอยู่กับพื้นที่และหน่วยงานที่เกี่ยวข้อง)
                                </p>

                                <h3>5) ตรวจรับก่อนส่งมอบ และดูแลหลังการส่งมอบ</h3>
                                <p>
                                    ก่อนส่งมอบจะมีการตรวจเก็บงานให้ครบถ้วนตามรายการ ตรวจความเรียบร้อยของระบบใช้งานภายในบ้าน
                                    และอธิบายการดูแลรักษาเบื้องต้น พร้อมให้ช่องทางติดต่อสำหรับการดูแลหลังการส่งมอบ
                                </p>
                            </div>

                            <div className="single-tags wow fadeInUp">
                                <a href="#">รับสร้างบ้านราชบุรี</a>
                                <a href="#">รับสร้างบ้านนครปฐม</a>
                                <a href="#">รับสร้างบ้านสมุทรสงคราม</a>
                                <a href="#">สร้างบ้านแบบ Turn Key</a>
                                <a href="#">ทีมวิศวกรคุมงาน</a>
                                <a href="#">QC ตรวจงานก่อสร้าง</a>
                                <a href="#">วัสดุได้มาตรฐาน</a>
                            </div>

                            <div className="single-bio wow fadeInUp">
                                <div className="single-bio-img">
                                    <Image src="/img/user.jpg" alt="พีจีโฮม" width={160} height={160} className="img-fluid" />
                                </div>
                                <div className="single-bio-text">
                                    <h3>ทีมงานพีจีโฮม</h3>
                                    <p>
                                        เรามุ่งเน้นงานคุณภาพ คุมมาตรฐานงานก่อสร้างอย่างเป็นระบบ พร้อมทีมประสานงานคอยดูแลให้ลูกค้าสะดวก
                                        ตั้งแต่เริ่มวางแผนจนถึงส่งมอบบ้าน
                                    </p>
                                </div>
                            </div>

                            <div className="single-related wow fadeInUp">
                                <h2>บทความที่เกี่ยวข้อง</h2>
                                <div className="owl-carousel related-slider">
                                    <div className="post-item">
                                        <div className="post-img">
                                            <Image src="/img/post-1.jpg" alt="เช็กลิสต์ก่อนสร้างบ้าน" width={600} height={400} className="img-fluid" />
                                        </div>
                                        <div className="post-text">
                                            <Link href="/single">เช็กลิสต์ก่อนเริ่มสร้างบ้าน: ต้องเตรียมอะไรบ้าง</Link>
                                            <div className="post-meta">
                                                <p>
                                                    By <Link href="/team">PGHOME</Link>
                                                </p>
                                                <p>
                                                    In <Link href="/projects">Construction</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-item">
                                        <div className="post-img">
                                            <Image src="/img/post-2.jpg" alt="วิธีเลือกแบบบ้าน" width={600} height={400} className="img-fluid" />
                                        </div>
                                        <div className="post-text">
                                            <Link href="/single">วิธีเลือกแบบบ้านให้เหมาะกับพื้นที่และงบประมาณ</Link>
                                            <div className="post-meta">
                                                <p>
                                                    By <Link href="/team">PGHOME</Link>
                                                </p>
                                                <p>
                                                    In <Link href="/projects">Design</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-item">
                                        <div className="post-img">
                                            <Image src="/img/post-3.jpg" alt="ระบบ QC หน้างาน" width={600} height={400} className="img-fluid" />
                                        </div>
                                        <div className="post-text">
                                            <Link href="/single">ระบบ QC หน้างานสำคัญอย่างไรต่อคุณภาพบ้าน</Link>
                                            <div className="post-meta">
                                                <p>
                                                    By <Link href="/team">PGHOME</Link>
                                                </p>
                                                <p>
                                                    In <Link href="/projects">QC</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-item">
                                        <div className="post-img">
                                            <Image src="/img/post-4.jpg" alt="เอกสารขออนุญาตก่อสร้าง" width={600} height={400} className="img-fluid" />
                                        </div>
                                        <div className="post-text">
                                            <Link href="/single">เอกสารขออนุญาตก่อสร้างและขั้นตอนที่ควรรู้</Link>
                                            <div className="post-meta">
                                                <p>
                                                    By <Link href="/team">PGHOME</Link>
                                                </p>
                                                <p>
                                                    In <Link href="/contact">Guide</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-comment wow fadeInUp">
                                <h2>ความคิดเห็น</h2>
                                <ul className="comment-list">
                                    <li className="comment-item">
                                        <div className="comment-body">
                                            <div className="comment-img">
                                                <Image src="/img/user.jpg" alt="ผู้ใช้งาน" width={90} height={90} className="img-fluid" />
                                            </div>
                                            <div className="comment-text">
                                                <h3>
                                                    <a href="#">ลูกค้าจริง</a>
                                                </h3>
                                                <span>อัปเดตล่าสุด: ตามหน้าเว็บ</span>
                                                <p>
                                                    ทีมงานให้คำแนะนำละเอียด เข้าใจง่าย ประสานงานดี และแจ้งความคืบหน้าหน้างานตลอด ทำให้มั่นใจมากขึ้น
                                                </p>
                                                <a className="btn" href="#">
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="comment-form wow fadeInUp">
                                <h2>ฝากข้อความ/สอบถามเพิ่มเติม</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">ชื่อ *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">อีเมล *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website">เว็บไซต์ (ถ้ามี)</label>
                                        <input type="url" className="form-control" id="website" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">ข้อความ *</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="ส่งข้อความ" className="btn" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget wow fadeInUp">
                                    <div className="search-widget">
                                        <form>
                                            <input className="form-control" type="text" placeholder="ค้นหาบทความ/คำค้น" />
                                            <button className="btn" type="button" aria-label="Search">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="sidebar-widget wow fadeInUp">
                                    <h2 className="widget-title">บทความล่าสุด</h2>
                                    <div className="recent-post">
                                        <div className="post-item">
                                            <div className="post-img">
                                                <Image src="/img/post-1.jpg" alt="บทความล่าสุด" width={180} height={120} className="img-fluid" />
                                            </div>
                                            <div className="post-text">
                                                <Link href="/single">เช็กลิสต์ก่อนเริ่มสร้างบ้าน</Link>
                                                <div className="post-meta">
                                                    <p>
                                                        By <Link href="/team">PGHOME</Link>
                                                    </p>
                                                    <p>
                                                        In <Link href="/projects">Guide</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="post-item">
                                            <div className="post-img">
                                                <Image src="/img/post-2.jpg" alt="บทความล่าสุด" width={180} height={120} className="img-fluid" />
                                            </div>
                                            <div className="post-text">
                                                <Link href="/single">วิธีเลือกแบบบ้านให้คุ้มค่า</Link>
                                                <div className="post-meta">
                                                    <p>
                                                        By <Link href="/team">PGHOME</Link>
                                                    </p>
                                                    <p>
                                                        In <Link href="/projects">Design</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="post-item">
                                            <div className="post-img">
                                                <Image src="/img/post-3.jpg" alt="บทความล่าสุด" width={180} height={120} className="img-fluid" />
                                            </div>
                                            <div className="post-text">
                                                <Link href="/single">QC หน้างานสำคัญอย่างไร</Link>
                                                <div className="post-meta">
                                                    <p>
                                                        By <Link href="/team">PGHOME</Link>
                                                    </p>
                                                    <p>
                                                        In <Link href="/projects">QC</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-widget wow fadeInUp">
                                    <div className="image-widget">
                                        <a href="#">
                                            <Image src="/img/blog-1.jpg" alt="รูปประกอบ" width={800} height={520} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>

                                <div className="sidebar-widget wow fadeInUp">
                                    <h2 className="widget-title">หมวดหมู่ยอดนิยม</h2>
                                    <div className="category-widget">
                                        <ul>
                                            <li>
                                                <a href="#">ขั้นตอนสร้างบ้าน</a>
                                                <span>(10)</span>
                                            </li>
                                            <li>
                                                <a href="#">แบบบ้าน/ดีไซน์</a>
                                                <span>(8)</span>
                                            </li>
                                            <li>
                                                <a href="#">งบประมาณ/ประเมินราคา</a>
                                                <span>(6)</span>
                                            </li>
                                            <li>
                                                <a href="#">เอกสาร/ขออนุญาต</a>
                                                <span>(5)</span>
                                            </li>
                                            <li>
                                                <a href="#">QC/มาตรฐานงานก่อสร้าง</a>
                                                <span>(7)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-widget wow fadeInUp">
                                    <h2 className="widget-title">แท็กยอดนิยม</h2>
                                    <div className="tag-widget">
                                        <a href="#">รับสร้างบ้านราชบุรี</a>
                                        <a href="#">รับสร้างบ้านนครปฐม</a>
                                        <a href="#">รับสร้างบ้านสมุทรสงคราม</a>
                                        <a href="#">Turn Key</a>
                                        <a href="#">ทีมวิศวกร</a>
                                        <a href="#">QC หน้างาน</a>
                                        <a href="#">วัสดุมาตรฐาน</a>
                                    </div>
                                </div>

                                <div className="sidebar-widget wow fadeInUp">
                                    <h2 className="widget-title">เกี่ยวกับพีจีโฮม</h2>
                                    <div className="text-widget">
                                        <p>
                                            พีจีโฮมให้บริการรับสร้างบ้านแบบครบวงจร เน้นงานคุณภาพ ควบคุมมาตรฐานงานก่อสร้าง
                                            และช่วยประสานงานเอกสารที่จำเป็น เพื่อให้ลูกค้าสะดวกและสบายใจตลอดการสร้างบ้าน
                                        </p>
                                        <Link href="/contact" className="btn">
                                            ปรึกษา/ประเมินราคา
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
