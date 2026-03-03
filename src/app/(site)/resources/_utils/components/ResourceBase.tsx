import Link from "next/link";
import SectionHeading from "@/src/components/layouts/SectionHeading";
import { resourceItems } from "../resources.data";

const ResourceBase = () => {
  return (
    <section className="py-4">

    
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

            </Link>
          ))}

        </div>

    </section>
  );
}

export default ResourceBase;
