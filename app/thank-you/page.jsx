// app/thank-you/page.jsx
"use client";

import { useEffect } from "react";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

export default function ThankYouPage() {
  useEffect(() => {
    trackGoogleAdsConversion({ value: 1.0, currency: "THB" });
  }, []);

  return (
    <div className="container py-5 text-center">
      <h1>ขอบคุณที่ติดต่อเรา</h1>
      <p>ทีมงาน PG Home จะติดต่อกลับโดยเร็วที่สุด</p>
    </div>
  );
}
