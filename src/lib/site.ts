/**
 * Canonical site URL for metadata, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://everestallegiance.org).
 * On Vercel, VERCEL_URL is a fallback until you set a custom domain.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Everest Allegiance",
  tagline: "Climbing together towards a better future",
  description:
    "Everest Allegiance is a youth-led nonprofit in Edmonton, Alberta. We build community through arts, education, empowerment, and youth leadership programs.",
  locale: "en_CA",
  region: "Edmonton, Alberta, Canada",
} as const;
