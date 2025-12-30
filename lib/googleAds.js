// lib/googleAds.js

export function trackGoogleAdsConversion({
  value,
  currency = "THB",
  transaction_id,
} = {}) {
  if (typeof window === "undefined") return;

  const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (!ADS_ID || !LABEL) return;
  if (!window.gtag) return;

  const sendTo = `${ADS_ID}/${LABEL}`;

  const payload = { send_to: sendTo };

  if (typeof value === "number") payload.value = value;
  if (currency) payload.currency = currency;
  if (transaction_id) payload.transaction_id = transaction_id;

  window.gtag("event", "conversion", payload);
}
