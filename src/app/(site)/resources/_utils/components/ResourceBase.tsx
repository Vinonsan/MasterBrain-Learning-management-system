import Link from "next/link";
import SectionHeading from "@/src/components/layouts/SectionHeading";
import { resourceItems } from "../resources.data";
import { FaArrowRight } from "react-icons/fa";

const ResourceBase = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 via-white to-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Learning Resources"
          subtitle="Choose a resource to view details and start learning with structured guidance."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {resourceItems.map((item) => (
            <Link
              key={item.slug}
              href={`/resources/${item.slug}`}
              className="group relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.tag}
              </span>

              <h2 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 transition group-hover:text-primary">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-primary">
                  View Resource
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:translate-x-1">
                  <FaArrowRight className="h-3 w-3" />
                </span>

              </div>

  
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary/10 via-transparent to-primary/10" />
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ResourceBase;
