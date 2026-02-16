import type { Metadata } from "next";
import Contactinformation from "./_utils/contactinformation";
import ContactForm from "./_utils/contactform";
import ContactMap from "./_utils/ContactMap";

const SITE_URL = "https://masterbrain.site";

export const metadata: Metadata = {
  title: "Contact Us | MasterBrain",
  description:
    "Contact MasterBrain for ICT coaching, exam guidance, and professional IT courses. Get expert advice from our mentors and start your learning journey today.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact MasterBrain – Get Expert Guidance",
    description:
      "Have questions about ICT A/L classes or professional IT courses? Contact MasterBrain for fast support and personalized guidance.",
    url: `${SITE_URL}/contact`,
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
    title: "Contact MasterBrain",
    description:
      "Reach out to MasterBrain for ICT coaching, career guidance, and professional IT training.",
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
      "Specialized ICT coaching for A/L students and professional development courses for next-gen engineers.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94 75 831 1995",
      contactType: "customer support",
      email: "support@masterbrain.site",
      areaServed: "LK",
      availableLanguage: ["English", "Tamil"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Point Pedro Road, Kankesanthurai",
      addressCountry: "Sri Lanka",
    },
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MasterBrain",
    url: `${SITE_URL}/contact`,
    description:
      "Contact page for MasterBrain – ICT education and professional IT training.",
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
        name: "Contact",
        item: `${SITE_URL}/contact`,
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
            contactPageJsonLd,
            breadcrumbJsonLd,
          ]),
        }}
      />

      <section className="px-8">
        <Contactinformation />
        <ContactForm />
        <ContactMap />
      </section>

    </main>
  );
}
