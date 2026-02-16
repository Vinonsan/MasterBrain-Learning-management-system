import type { Metadata } from "next";
import CTASection from "@/src/components/layouts/PrimaryCTA";
import Database from "./_utils/components/Database";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "Advanced Study Materials | MasterBrain",
  description:
    "Explore advanced-level ICT study materials, in-depth notes, practical guides, and professional learning resources by MasterBrain. Built for advanced students and future software engineers.",
  alternates: {
    canonical: `${SITE_URL}/study-materials/advanced`,
  },
  openGraph: {
    title: "Advanced ICT Study Materials – MasterBrain",
    description:
      "Deep-dive ICT study materials, advanced programming concepts, and exam-focused resources by MasterBrain.",
    url: `${SITE_URL}/study-materials/advanced`,
    siteName: "MasterBrain",
    images: [
      {
        url: `${SITE_URL}/images/og/advanced-study-materials.png`,
        width: 1200,
        height: 630,
        alt: "MasterBrain Advanced Study Materials",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Study Materials | MasterBrain",
    description:
      "Advanced ICT notes, professional guides, and in-depth learning resources by MasterBrain.",
    images: [`${SITE_URL}/images/og/advanced-study-materials.png`],
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
      "MasterBrain delivers advanced ICT education, in-depth programming materials, and professional-level learning resources for students and next-generation engineers.",
    areaServed: "LK",
    availableLanguage: ["English", "Tamil"],
  };

  const advancedStudyMaterialsPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MasterBrain Advanced Study Materials",
    url: `${SITE_URL}/study-materials/advanced`,
    description:
      "A curated collection of advanced-level ICT study materials, including deep technical notes, practical programming guides, and exam-oriented resources.",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Advanced",
        item: `${SITE_URL}/study-materials/advanced`,
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
            advancedStudyMaterialsPageJsonLd,
            breadcrumbJsonLd,
          ]),
        }}
      />

      <section className="px-8">
      <Database />
        <CTASection
          title="Ready to Go Beyond the Basics?"
          description="Join our advanced live classes to master complex ICT concepts, real-world programming skills, and exam-level problem solving with expert mentors."
          primaryCta={{
            label: "Explore Advanced Live Classes",
            href: "/contact",
          }}
          trustText="Advanced curriculum · Industry-level concepts · Expert mentors"
        />
      </section>
    </main>
  );
}
