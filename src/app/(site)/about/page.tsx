import type { Metadata } from "next";
import Mission from "./_utils/Mission";
import Story from "./_utils/Story";
import Acheivements from "./_utils/Acheivements";
import CTASection from "@/src/components/layouts/PrimaryCTA";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "About Us | MasterBrain",
  description:
    "MasterBrain provides specialized ICT coaching for A/L students and professional development courses for next-gen engineers.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About MasterBrain – The Ultimate IT Roadmap",
    description:
      "Specialized ICT coaching for A/L students and professional development courses covering React, C#, and full-stack development.",
    url: `${SITE_URL}/about`,
    siteName: "MasterBrain",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "MasterBrain",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MasterBrain",
    description:
      "The Ultimate IT Roadmap for Next-Gen Engineers. ICT coaching and professional development courses.",
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
    slogan: "The Ultimate IT Roadmap for Next-Gen Engineers",
    description:
      "Specialized ICT coaching for A/L students and professional development courses for aspiring developers.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94 75 831 1995",
      contactType: "customer support",
      email: "support@masterbrain.site",
      areaServed: "LK",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Point Pedro Road, Kankesanthurai",
      addressCountry: "Sri Lanka",
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
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <main>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgJsonLd, breadcrumbJsonLd]),
        }}
      />

      <section className="px-8">
        <Mission />
        <Story />
        <Acheivements />
        <CTASection
          title="Ready to Start Your Learning Journey?"
          description="Have questions about our curriculum or need personalized guidance? Contact our expert mentors today to find the right path for your career or exams."
          primaryCta={{
            label: "Get in Touch",
            href: "/contact",
          }}
          trustText="Fast response times · Expert academic advice · Free consultations"
        />
      </section>

    </main>
  );
}
