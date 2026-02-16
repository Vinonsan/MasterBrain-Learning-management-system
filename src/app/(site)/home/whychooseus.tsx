import { Globe, Code2, Users, Briefcase, Layers, CalendarClock } from "lucide-react";
import SectionHeading from "@/src/components/layouts/SectionHeading";


const features = [
  {
    title: "Expert Tamil Medium Instruction",
    description:
      "Master complex coding and ICT concepts in your native language. We eliminate the language barrier, making advanced software engineering accessible to everyone.",
    icon: Globe,
  },
  {
    title: "A/L ICT to Industry Pipeline",
    description:
      "Our curriculum doesn't just stop at school exams. We transition students from the A/L syllabus directly into professional stacks like React, Next.js, and .NET.",
    icon: Layers,
  },
  {
    title: "Project-Based Learning",
    description:
      "Stop just watching tutorials. Build production-ready applications through hands-on labs that simulate real-world software company environments.",
    icon: Code2,
  },
  {
    title: "Mentorship from IT Pros",
    description:
      "Learn from Senior Software Engineers who bring industry standards into the classroom, teaching you clean code, architecture, and professional ethics.",
    icon: Users,
  },
  {
    title: "Career & Interview Coaching",
    description:
      "Get job-ready with specialized support for IT CV writing, GitHub portfolio building, and technical interview preparation for global tech roles.",
    icon: Briefcase,
  },
  {
    title: "Flexible Learning Paths",
    description:
      "Whether you are a full-time school student or a working professional, our weekend and evening schedules ensure you never miss a lesson.",
    icon: CalendarClock, 
  },
];


function WhyChooseUs() {
    return (
        <section className="py-16">
            <SectionHeading
                title="Expert IT Training in Tamil"
                subtitle="Bridge the gap between your A/L syllabus and a tech career. Master high-demand skills like React and .NET with our industry-aligned curriculum."
                align="center"
            />

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="group relative rounded-2xl p-px bg-linear-to-br from-primary/20 via-transparent to-indigo-500/20 hover:from-primary/40 hover:to-indigo-500/40 transition-all duration-300"
                        >
                            <div className="relative bg-white rounded-2xl p-6 h-full shadow-md hover:shadow-2xl transition-all duration-300">

                                <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                    <Icon size={22} />
                                </div>

                                <div className="pt-8">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h2>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <span className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/40" />
                            </div>
                        </div>

                    );
                })}
            </div>
        </section>
    );
}

export default WhyChooseUs;
