import SectionHeading from "@/src/components/layouts/SectionHeading";

const resourceItems = [
  {
    title: "A/L ICT Past Papers",
    description:
      "Download curated past papers with marking schemes to prepare for exams with confidence.",
    tag: "Exam Prep",
  },
  {
    title: "Web Development Roadmaps",
    description:
      "Follow structured learning paths for HTML, CSS, JavaScript, React, and Next.js.",
    tag: "Career",
  },
  {
    title: "Project Starter Kits",
    description:
      "Get starter templates and practice tasks to build portfolio-ready applications.",
    tag: "Practical",
  },
];

export default function ResourceBase() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Learning Resources"
        subtitle="Free and premium materials to speed up your exam and software engineering journey."
        align="center"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resourceItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {item.tag}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
