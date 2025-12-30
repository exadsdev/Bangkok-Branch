// app/layout.jsx
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import JsonLdWebsiteOrg from "@/components/JsonLdWebsiteOrg";
import { SITE } from "@/seo.config";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | รับสร้างบ้าน ออกแบบ ก่อสร้างครบวงจร`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "พีจีโฮม จำกัด ให้บริการรับสร้างบ้าน ออกแบบบ้าน ควบคุมคุณภาพงานก่อสร้าง ตรวจสอบวัสดุ และดูแลเอกสารประกอบการก่อสร้าง พร้อมให้คำปรึกษาแบบมืออาชีพ",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description:
      "รับสร้างบ้าน ออกแบบบ้าน ก่อสร้างครบวงจร พร้อมควบคุมคุณภาพงานและวัสดุตามมาตรฐาน",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "รับสร้างบ้าน ออกแบบบ้าน ก่อสร้างครบวงจร พร้อมควบคุมคุณภาพงานและวัสดุตามมาตรฐาน",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // google: "xxxx"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={SITE.lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="รับสร้างบ้าน, บริษัทรับสร้างบ้าน, ออกแบบบ้าน, ควบคุมงานก่อสร้าง, ตรวจสอบวัสดุก่อสร้าง, ผู้รับเหมา, สร้างบ้านราชบุรี, พีจีโฮม,PG homeเว็บตรง100% ,PG homeพร้อมบริการ ,PG homeโปรโมชั่นแรงๆ.PG home ,PG homeบริการแบบมืออาชีพ ,PG homeลิขสิทธิ์แท้ 100% ,  "   />
        <meta
          name="description"
          content="พีจีโฮมจำกัด ให้บริการรับสร้างบ้าน ออกแบบบ้าน และก่อสร้างครบวงจร พร้อมควบคุมคุณภาพงานตามมาตรฐานวิศวกรรม ตรวจสอบวัสดุ และให้คำปรึกษาเรื่องเอกสารก่อสร้าง"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        <link href="/lib/flaticon/font/flaticon.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/lib/slick/slick.css" rel="stylesheet" />
        <link href="/lib/slick/slick-theme.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />

        <link href="/css/style.css" rel="stylesheet" />

        {/* ✅ Google Ads Global Site Tag (โหลดครั้งเดียวทั้งเว็บ) */}
        {GOOGLE_ADS_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className="wrapper bg-light">
        <JsonLdWebsiteOrg />

        <Header />
        <Nav />

        <main>{children}</main>

        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="afterInteractive"
        />

        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/counterup/counterup.min.js" strategy="afterInteractive" />
        <Script src="/lib/slick/slick.min.js" strategy="afterInteractive" />

        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
