"use client";
import { Rocket, Award, TrendingUp, BookOpen } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/src/components/layouts/SectionHeading";

const storyTimeline = [
  {
    year: "2023",
    title: "The Visionary Launch",
    description: "In November 2023, MasterBrain was established with a focus on specialized mobile development. We began our journey with an intensive Mobile App Development session for a dedicated group of 5 students, laying the foundation for excellence.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    icon: Rocket,
    color: "from-red-500 to-red-700",
  },
  {
    year: "2024",
    title: "Specializing in Mobile Innovation",
    description: "Following our initial success, 2024 marked the launch of 'Mobile App Batch 1'. We focused on mastering industry-standard frameworks like Flutter and React Native to empower local developers in Sri Lanka's growing tech ecosystem.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    icon: BookOpen,
    color: "from-red-600 to-red-800",
  },
  {
    year: "2025",
    title: "Expanding the Tech Stack",
    description: "A year of rapid growth! We scaled our offerings to include React JS and Spring Boot Backend Development. With over 40+ active students in 'Mobile App Batch 2', we bridged the gap between frontend design and enterprise-level backend architecture.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    icon: TrendingUp,
    color: "from-red-700 to-red-900",
  },
  {
    year: "2026",
    title: "Full-Stack Leadership in Sri Lanka",
    description: "Today, we are the leading destination for A-Level ICT and professional IT training. Our 2026 roadmap introduces comprehensive bootcamps in Next.js, .NET, Node.js, JavaScript, and C#, shaping the next generation of full-stack engineers in Sri Lanka.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    icon: Award,
    color: "from-red-800 to-red-950",
  },
];

const Story = () => {
  return (
    <section className="relative py-12 overflow-hidden ">

      <div className="relative container ">
        <SectionHeading
          title="Empowering Sri Lanka’s Next Generation of Tech Leaders"
          subtitle="The Master Brain journey: Bridging the gap between academic theory and industry-standard expertise since our inception."
          align="center"
        />
        <div className="mt-10 space-y-12 lg:space-y-16">
          {storyTimeline.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >

                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative h-100 lg:h-125 rounded-4xl overflow-hidden shadow-2xl group">


                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />

                    <div
                      className="absolute top-6 right-6 z-20 px-6 py-3 rounded-full backdrop-blur-md shadow-xl bg-primary"
                    >
                      <span className="text-white font-bold text-sm">
                        {story.year}
                      </span>
                    </div>

                    <div
                      className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl  z-0 bg-primary/10"
                    />
                    <div
                      className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl  z-0 bg-primary/20"
                    />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative bg-white rounded-4xl py-8 lg:p-10 shadow-xl border-t-6 border-primary hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">



                    <div className="mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg bg-primary"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div
                      className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-semibold text-white bg-primary"

                    >
                      {story.year}
                    </div>

                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4 text-dark"
                    >
                      {story.title}
                    </h3>

                    <p
                      className="text-lg leading-relaxed text-black/80"
                    >
                      {story.description}
                    </p>


                    <div
                      className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-primary/5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Story;
