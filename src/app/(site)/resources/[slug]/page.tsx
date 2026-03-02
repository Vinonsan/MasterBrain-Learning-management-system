import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resourceItems } from "../_utils/resources.data";
import Button from "@/src/components/base/Button";
import { FaArrowLeft } from "react-icons/fa";
import ExamPapersExplorer from "../_utils/components/ExamPapersExplorer";
import ALNotesExplorer from "../_utils/components/ALNotesExplorer";

const SITE_URL = "https://masterbrain.site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceItems.find((item) => item.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found | MasterBrain",
      description: "The selected resource could not be found.",
    };
  }

  const url = `${SITE_URL}/resources/${resource.slug}`;

  return {
    title: `${resource.title} | MasterBrain Resources`,
    description: resource.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${resource.title} | MasterBrain`,
      description: resource.description,
      url,
      siteName: "MasterBrain",
      images: [
        {
          url: `${SITE_URL}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${resource.title} | MasterBrain`,
      description: resource.description,
      images: [`${SITE_URL}/images/logo.png`],
    },
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = resourceItems.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: resource.title,
        item: `${SITE_URL}/resources/${resource.slug}`,
      },
    ],
  };

  const isExamPaperPage = resource.slug === "al-ict-past-papers";
  const isAlNotesPage = resource.slug === "al-ict-notes";

  return (
    <main className="px-8 py-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd]) }}
      />

      <div>
        <Button href="/resources" variant="outline" className="mb-6" size="sm">
          <FaArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-lg shadow-gray-100 backdrop-blur-xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {resource.tag}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            {resource.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {resource.description}
          </p>
        </div>

        {isExamPaperPage ? (
          <ExamPapersExplorer />
        ) : isAlNotesPage ? (
          <ALNotesExplorer />
        ) : (
          <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">{resource.content}</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Request Full Access
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
