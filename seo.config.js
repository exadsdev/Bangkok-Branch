import {
  deriveContactUrlFromSiteUrl,
  optionalHttpUrlEnv,
  requireEmailEnv,
  requireHttpUrlEnv,
} from "@/lib/env";

const SITE_URL = requireHttpUrlEnv("NEXT_PUBLIC_SITE_URL");

export const SITE = {
  url: SITE_URL,
  name: process.env.NEXT_PUBLIC_SITE_NAME || new URL(SITE_URL).hostname,
  locale: "th_TH",
  lang: "th",
  themeColor: "#0d6efd",
  ogImage: "/og-default.jpg",
  twitter: "@myaddev",
};

export const BRAND = {
  legalName: process.env.NEXT_PUBLIC_BRAND_LEGAL_NAME || SITE.name,
  email: requireEmailEnv("NEXT_PUBLIC_BRAND_EMAIL"),
  phone: process.env.NEXT_PUBLIC_BRAND_PHONE || "",
  address: process.env.NEXT_PUBLIC_BRAND_ADDRESS || "",
};

export const CONTACT = {
  url:
    optionalHttpUrlEnv("NEXT_PUBLIC_CONTACT_URL") ||
    deriveContactUrlFromSiteUrl(SITE.url),
};

export const LOGO_URL = "/logo.png";
