"use client";

import { Target, Eye } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/src/components/layouts/SectionHeading";

const missionData = {
  title: "Our Mission",
  icon: Target,
  description:
    "To empower Tamil-speaking students in Sri Lanka with future-ready IT skills through structured education, practical training, and continuous career guidance.",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  points: [
    "Deliver high-quality IT education in Tamil medium",
    "Provide hands-on training through real-world projects",
    "Support long-term career growth in the technology field",
  ],
};


const visionData = {
  title: "Our Vision",
  icon: Eye,
  description:
    "To become Sri Lanka’s most trusted Tamil-medium IT education platform, enabling students to achieve global recognition and sustainable careers in technology.",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  points: [
    "Lead the evolution of IT education in Sri Lanka",
    "Build a strong and inclusive technology community",
    "Encourage innovation, excellence, and lifelong learning",
  ],
};


const InfoCard = ({ data }: { data: typeof missionData }) => {
  const Icon = data.icon;

  return (
    <div className="rounded-3xl  shadow-xl border border-gray-100 px-6 py-4">

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary shadow-md">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">
          {data.title}
        </h3>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {data.description}
      </p>

      <ul className="space-y-3 mb-8">
        {data.points.map((point, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>

      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

const Mission = () => {
  return (
    <section className="py-6 w-full">
        <SectionHeading
          title="Our Mission & Vision"
          subtitle="The foundation of MasterBrain’s commitment to next-gen IT education"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InfoCard data={missionData} />
          <InfoCard data={visionData} />
        </div>

    </section>
  );
}

export default Mission;