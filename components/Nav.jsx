// components/Nav.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/seo.config";

export default function Nav() {
  const mail = BRAND.email;

  return (
    <div>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                <Link href="/" className="text-decoration-none">
                <Image src="/logo.png" alt="พีจีโฮม จำกัด" width={50} height={50} />
             
                </Link>
                 <h3>พีจีโฮม จำกัด</h3>    
              </div>
            </div>

            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-calendar"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-call"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>084-2899794</p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-send-mail"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>{mail}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            {/* ลิงก์ # (ไม่ใช่หน้าในเว็บ) ใช้ <a> ได้ปกติ */}
            <a href="#" className="navbar-brand">
              เมนู
            </a>

            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link href="/" className="nav-item nav-link active">
                  หน้าแรก
                </Link>

                <Link href="/about" className="nav-item nav-link">
                  เกี่ยวกับเรา
                </Link>

                <Link href="/service" className="nav-item nav-link">
                  บริการ
                </Link>

                <Link href="/team" className="nav-item nav-link">
                  ทีมงาน
                </Link>

                <Link href="/portfolio" className="nav-item nav-link">
                  โครงการ
                </Link>

                <div className="nav-item dropdown">
                  {/* href="" เปลี่ยนเป็น # เพื่อไม่ให้ reload/เพี้ยน */}
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                    Pages
                  </a>

                  <div className="dropdown-menu">
                    <Link href="/blog" className="dropdown-item">
                      บล็อก
                    </Link>

                    <Link href="/single" className="dropdown-item">
                      หน้าเดี่ยว
                    </Link>
                  </div>
                </div>

                <Link href="/contact" className="nav-item nav-link">
                  ติดต่อ
                </Link>
              </div>

              <div className="ml-auto">
                <Link href="/" className="btn">
                  ขอใบเสนอราคา
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
