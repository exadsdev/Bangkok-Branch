/** @type {import('next').NextConfig} */
function normalizeBaseUrl(url) {
  return String(url).trim().replace(/\/+$/, "");
}

function resolveContactHostname() {
  const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL;
  if (contactUrl && String(contactUrl).trim() !== "") {
    return new URL(normalizeBaseUrl(contactUrl)).hostname;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl || String(siteUrl).trim() === "") {
    throw new Error(
      "Missing NEXT_PUBLIC_SITE_URL (required to derive contact hostname for next/image remotePatterns)"
    );
  }
  const hostname = new URL(normalizeBaseUrl(siteUrl)).hostname;
  return `contact.${hostname}`;
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: resolveContactHostname(),
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
