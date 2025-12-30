// app/services/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>บริการของเรา</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/services">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Services</p>
                        <h2>บริการครบวงจรด้านการสร้างบ้าน</h2>
                    </div>

                    <div className="row">
                        {/* 1 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-1.jpg" alt="รับสร้างบ้าน" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            บริการรับสร้างบ้านแบบครบวงจร ตั้งแต่วางแผน ออกแบบ คำนวณโครงสร้าง ควบคุมงานก่อสร้าง
                                            และตรวจรับก่อนส่งมอบ โดยยึดรายละเอียดตามสัญญาเป็นหลัก
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>รับสร้างบ้าน</h3>
                                    <Link className="btn" href="/contact">
                                        ขอรับคำปรึกษา
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-2.jpg" alt="ต่อเติมและปรับปรุงบ้าน" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            งานต่อเติมและปรับปรุงบ้าน เช่น ต่อเติมครัว โรงจอดรถ ห้องเพิ่มพื้นที่ใช้งาน
                                            โดยคำนึงถึงโครงสร้าง ความปลอดภัย และความเหมาะสมของพื้นที่จริง
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>ต่อเติม / ปรับปรุงบ้าน</h3>
                                    <Link className="btn" href="/contact">
                                        นัดประเมินหน้างาน
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-3.jpg" alt="ออกแบบบ้าน" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            ออกแบบบ้านให้เหมาะกับพื้นที่ ไลฟ์สไตล์ และงบประมาณ พร้อมสรุปรายละเอียดแบบและรายการงานให้ตรวจสอบก่อนเริ่มก่อสร้าง
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>ออกแบบบ้าน</h3>
                                    <Link className="btn" href="/contact">
                                        ขอคำปรึกษาแบบบ้าน
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-4.jpg" alt="ออกแบบตกแต่งภายใน" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            ออกแบบตกแต่งภายในให้เหมาะกับการใช้งานจริง เน้นความเรียบร้อย ฟังก์ชัน และความสวยงามตามความต้องการของลูกค้า
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>ออกแบบตกแต่งภายใน</h3>
                                    <Link className="btn" href="/contact">
                                        ปรึกษาแนวทางตกแต่ง
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-5.jpg" alt="ขออนุญาตและยื่นสินเชื่อ" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            ช่วยประสานงานด้านเอกสารในขั้นตอนสำคัญ เช่น ขออนุญาตก่อสร้าง และการยื่นขอสินเชื่อกับสถาบันการเงิน
                                            เพื่อให้ลูกค้าดำเนินการได้สะดวกมากขึ้น
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>เอกสาร / ขออนุญาต / ยื่นสินเชื่อ</h3>
                                    <Link className="btn" href="/contact">
                                        สอบถามเอกสารที่ต้องใช้
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <Image src="/img/service-6.jpg" alt="ควบคุมคุณภาพงานก่อสร้าง" width={900} height={650} className="img-fluid" />
                                    <div className="service-overlay">
                                        <p>
                                            ควบคุมและตรวจสอบคุณภาพงาน รวมถึงรายการวัสดุก่อสร้างให้ตรงตามสัญญา
                                            เพื่อความมั่นใจของลูกค้าตลอดกระบวนการก่อสร้าง
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>ควบคุมคุณภาพ (QC)</h3>
                                    <Link className="btn" href="/contact">
                                        ขอคำปรึกษา
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faqs">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Frequently Asked Question</p>
                        <h2>คำถามที่พบบ่อย</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion-1">
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            ต้องการเริ่มสร้างบ้าน ต้องทำอย่างไร?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            เริ่มจากแจ้งความต้องการ แบบบ้าน/ขนาดบ้าน และงบประมาณเบื้องต้น จากนั้นทีมงานจะนัดหมายประเมินพื้นที่
                                            และสรุปแนวทาง พร้อมใบเสนอราคาและขั้นตอนดำเนินงานอย่างชัดเจน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            ค่าใช้จ่ายขึ้นอยู่กับอะไรบ้าง?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ค่าใช้จ่ายจะขึ้นอยู่กับขนาดบ้าน แบบบ้าน วัสดุที่เลือก และเงื่อนไขหน้างาน ทีมงานจะแจ้งรายละเอียดและขอบเขตงานให้ตรวจสอบก่อนเริ่มงาน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            พีจีโฮมช่วยเรื่องขออนุญาตและยื่นสินเชื่อได้ไหม?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ช่วยประสานงานในขั้นตอนสำคัญ เช่น ขออนุญาตก่อสร้าง และการยื่นสินเชื่อกับสถาบันการเงิน
                                            (ตามเงื่อนไขและขั้นตอนที่เกี่ยวข้อง)
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            ระยะเวลาก่อสร้างใช้เวลาประมาณเท่าไร?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ระยะเวลาก่อสร้างขึ้นอยู่กับขนาดบ้าน แบบบ้าน และเงื่อนไขหน้างาน ทีมงานจะประเมินและแจ้งแผนงานหลังสรุปรายละเอียดโครงการ
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            ลูกค้าตรวจสอบรายการวัสดุได้หรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ลูกค้าสามารถตรวจสอบรายละเอียดรายการวัสดุและขอบเขตงานได้ เพื่อความชัดเจนและความมั่นใจว่าตรงตามข้อตกลงในสัญญา
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            ให้บริการพื้นที่ไหนบ้าง?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            ให้บริการหลักในพื้นที่ ราชบุรี นครปฐม และสมุทรสงคราม หากเป็นพื้นที่ใกล้เคียงสามารถติดต่อทีมงานเพื่อประเมินความเหมาะสมได้
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            สามารถปรับแบบบ้านให้เข้ากับพื้นที่ได้ไหม?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            สามารถปรับแบบให้เหมาะกับพื้นที่และงบประมาณได้ โดยทีมออกแบบจะสรุปรายละเอียดให้ตรวจสอบก่อนเริ่มงาน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            สามารถนัดประเมินหน้างานได้หรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            สามารถนัดหมายประเมินหน้างาน/พื้นที่ได้ โดยทีมงานจะแนะนำข้อมูลที่ต้องเตรียมเพื่อให้ประเมินได้แม่นยำขึ้น
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            มีการรับประกันงานหรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            มีการรับประกันงานก่อสร้างตามเงื่อนไขที่ระบุในสัญญา เพื่อความมั่นใจของลูกค้า
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            ติดต่อพีจีโฮมได้ช่องทางไหน?
                                        </a>
                                    </div>
                                    <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            สามารถติดต่อผ่านหน้า Contact ของเว็บไซต์ หรือช่องทางที่บริษัทระบุไว้ เพื่อรับคำปรึกษาและนัดหมาย
                                        </div>
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
