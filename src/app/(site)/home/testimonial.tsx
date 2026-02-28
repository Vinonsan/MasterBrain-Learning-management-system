"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/src/components/layouts/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    company: "Tech Solutions Ltd",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=90",
    rating: 5,
    comment:
      "MasterBrain transformed my career! The practical approach and real-world projects helped me land my dream job.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "React Developer",
    company: "Digital Innovations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face&q=90",
    rating: 5,
    comment:
      "Best investment I've made! I learned React and Next.js from scratch and now work on exciting projects.",
  },
  {
    id: 3,
    name: "Suresh Menon",
    role: "Node.js Developer",
    company: "Cloud Systems",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=90",
    rating: 5,
    comment:
      "Well-structured curriculum with industry-relevant projects. Highly recommended!",
  },
  {
    id: 4,
    name: "Suresh Menon",
    role: "Node.js Developer",
    company: "Cloud Systems",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=90",
    rating: 5,
    comment:
      "Well-structured curriculum with industry-relevant projects. Highly recommended!",
  },
];

const Testimonial = () => {
  const shouldLoop = testimonials.length > 4;

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">

        <SectionHeading
          title="What Our Students Say"
          subtitle="Real success stories from learners who transformed their careers"
          align="center"
          variant="gradient"
        />


        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            grabCursor
            loop={shouldLoop}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 25,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper overflow-visible"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="pt-6 px-4">
                <div
                  className="
                    relative rounded-3xl bg-white p-8
                    border border-gray-100
                    shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-2
                  "
                >

                  <div className="absolute top-0 -left-4 w-8 h-8 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                    <Quote size={16} className="text-white" />
                  </div>

                  <div className="flex gap-1 mt-6 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>


                  <p className="text-sm text-gray-700 leading-relaxed mb-6 min-h-24">
                    “{item.comment}”
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        quality={90}
                        priority={item.id === 1}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600">{item.role}</p>
                      <p className="text-xs text-gray-500">{item.company}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
