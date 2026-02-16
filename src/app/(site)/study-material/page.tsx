import type { Metadata } from "next";
import MainCategoryHero from "./_utils/components/MainCategoryHero";
import CTASection from "@/src/components/layouts/PrimaryCTA";
import Programming from "./_utils/components/Programming";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "Study Materials | MasterBrain",
  description:
    "Access high-quality ICT study materials, notes, past papers, and learning resources from MasterBrain. Designed for A/L students and aspiring IT professionals.",
  alternates: {
    canonical: `${SITE_URL}/study-materials`,
  },
  openGraph: {
    title: "MasterBrain Study Materials – Learn Smarter",
    description:
      "Explore curated ICT study materials, structured notes, and exam-focused resources by MasterBrain.",
    url: `${SITE_URL}/study-materials`,
    siteName: "MasterBrain",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "MasterBrain Study Materials",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterBrain Study Materials",
    description:
      "ICT notes, study guides, and learning resources by MasterBrain.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MasterBrain",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "MasterBrain provides ICT study materials, structured notes, and professional learning resources for students and next-gen engineers.",
    areaServed: "LK",
    availableLanguage: ["English", "Tamil"],
  };

  const studyMaterialsPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MasterBrain Study Materials",
    url: `${SITE_URL}/study-materials`,
    description:
      "A collection of ICT study materials including notes, guides, and exam preparation resources.",
    mainEntity: {
      "@type": "EducationalOrganization",
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
        name: "Study Materials",
        item: `${SITE_URL}/study-materials`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            orgJsonLd,
            studyMaterialsPageJsonLd,
            breadcrumbJsonLd,
          ]),
        }}
      />

      <section className="px-8">
        <MainCategoryHero />
        <Programming />
        <CTASection
          title="Interested in Our Live Classes?"
          description="Want to know more about upcoming live sessions, schedules, or batch availability? Reach out to us and our mentors will help you get started."
          primaryCta={{
            label: "Ask About Live Classes",
            href: "/contact",
          }}
          trustText="Live expert-led sessions · Flexible schedules · Free guidance"
        />

      </section>
    </main>
  );
}
