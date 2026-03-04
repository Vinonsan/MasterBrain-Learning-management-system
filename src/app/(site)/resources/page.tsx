import type { Metadata } from "next";
import ResourceBase from "./_utils/components/ResourceBase";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "Learning Resources | MasterBrain",
  description:
    "Explore MasterBrain learning resources including ICT A/L study guides, past papers, and software engineering materials.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: "MasterBrain Learning Resources",
    description:
      "Access curated resources for ICT exams and modern software engineering learning paths.",
    url: `${SITE_URL}/resources`,
    siteName: "MasterBrain",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "MasterBrain Learning Resources",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterBrain Resources",
    description:
      "Study smarter with MasterBrain resource packs, guides, and practical coding materials.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function Page() {
  const resourcesPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MasterBrain Learning Resources",
    url: `${SITE_URL}/resources`,
    description:
      "A curated collection of educational resources for ICT students and future software engineers.",
    isPartOf: {
      "@type": "WebSite",
      name: "MasterBrain",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${SITE_URL}/resources`,
      },
    ],
  };

  return (
    <main className="px-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([resourcesPageJsonLd, breadcrumbJsonLd]),
        }}
      />

      <ResourceBase />
    </main>
  );
}
