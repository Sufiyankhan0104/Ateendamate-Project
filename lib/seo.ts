import { Metadata } from "next";
import { BRAND_CONFIG } from "./constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description = BRAND_CONFIG.description,
  image = BRAND_CONFIG.ogImage,
  url,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${BRAND_CONFIG.name}`
    : `${BRAND_CONFIG.name} – ${BRAND_CONFIG.tagline}`;

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
      siteName: BRAND_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: BRAND_CONFIG.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.description,
    url: BRAND_CONFIG.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: BRAND_CONFIG.name,
      url: BRAND_CONFIG.url,
    },
  };
}