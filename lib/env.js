function normalizeBaseUrl(url) {
  return String(url).trim().replace(/\/+$/, "");
}

export function requireEnv(name) {
  const value = process.env[name];
  if (!value || String(value).trim() === "") {
    throw new Error(`[env] Missing required environment variable: ${name}`);
  }
  return String(value).trim();
}

export function requireHttpUrlEnv(name) {
  const raw = requireEnv(name);
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error(`[env] ${name} must be a valid absolute URL (got: ${raw})`);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`[env] ${name} must start with http:// or https:// (got: ${raw})`);
  }
  return normalizeBaseUrl(parsed.toString());
}

export function requireEmailEnv(name) {
  const raw = requireEnv(name);
  // pragmatic validation (good enough for config)
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw);
  if (!isValid) {
    throw new Error(`[env] ${name} must be a valid email address (got: ${raw})`);
  }
  return raw;
}

export function optionalHttpUrlEnv(name) {
  const raw = process.env[name];
  if (!raw || String(raw).trim() === "") return undefined;

  let parsed;
  try {
    parsed = new URL(String(raw).trim());
  } catch {
    throw new Error(`[env] ${name} must be a valid absolute URL (got: ${raw})`);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`[env] ${name} must start with http:// or https:// (got: ${raw})`);
  }
  return normalizeBaseUrl(parsed.toString());
}

export function deriveContactUrlFromSiteUrl(siteUrl) {
  const hostname = new URL(siteUrl).hostname;
  return `https://contact.${hostname}`;
}
