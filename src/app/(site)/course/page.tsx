import type { Metadata } from "next";
import Course from "./_utils/components/Course";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "IT & ICT Courses | MasterBrain Sri Lanka",
  description:
    "Explore ICT A/L classes, software engineering courses, and professional IT training at MasterBrain. Learn from industry experts and build a successful tech career.",
  alternates: {
    canonical: `${SITE_URL}/courses`,
  },
  openGraph: {
    title: "IT & ICT Courses at MasterBrain",
    description:
      "Master ICT A/L subjects and professional IT skills with structured courses, expert mentors, and real-world projects.",
    url: `${SITE_URL}/courses`,
    siteName: "MasterBrain",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "MasterBrain IT Courses",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterBrain IT & ICT Courses",
    description:
      "Join MasterBrain to learn ICT A/L, software engineering, and professional IT skills.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function Page() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MasterBrain",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "MasterBrain provides ICT A/L coaching and professional IT courses for future software engineers.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94 75 831 1995",
      contactType: "admissions",
      email: "support@masterbrain.site",
      areaServed: "LK",
      availableLanguage: ["English", "Tamil"],
    },
  };

  const coursesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MasterBrain Courses",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "ICT A/L Classes",
        description:
          "Comprehensive ICT A/L syllabus coverage with theory, practicals, and exam-focused guidance.",
        provider: {
          "@type": "EducationalOrganization",
          name: "MasterBrain",
          url: SITE_URL,
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "Software Engineering Course",
        description:
          "Learn modern software development with JavaScript, React, Next.js, and real-world projects.",
        provider: {
          "@type": "EducationalOrganization",
          name: "MasterBrain",
          url: SITE_URL,
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "Professional IT Training",
        description:
          "Industry-ready IT courses covering web development, tools, and career guidance.",
        provider: {
          "@type": "EducationalOrganization",
          name: "MasterBrain",
          url: SITE_URL,
        },
      },
    ],
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
        name: "Courses",
        item: `${SITE_URL}/courses`,
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
            organizationJsonLd,
            coursesJsonLd,
            breadcrumbJsonLd,
          ]),
        }}
      />

      <section className="px-8">
<Course />
      </section>
    </main>
  );
}
