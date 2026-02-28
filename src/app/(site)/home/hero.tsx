"use client";

import Image from "next/image";
import Button from "@/src/components/base/Button";
import { BookOpen, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden ">
   
      <div className="relative container mx-auto  grid lg:grid-cols-2 gap-16 items-start">

        <div className="space-y-8">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Master IT Skills That{" "}
            <span className="text-primary">Actually Matter</span>
          </h1>

          <p className="text-xl text-black/70 max-w-xl">
            From A/L ICT fundamentals to real-world software development, MasterBrain LMS provides step-by-step training to help students become confident, job-ready developers. Learn A/L ICT, coding, and practical software engineering through expert-guided online IT courses.
          </p>

          <div className="flex gap-4">

            <Button
             size="lg" 
            variant="primary"
            
            >
              Start Learning
              <BookOpen size={18} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Button>

          </div>

        </div>

        <div className="relative flex justify-center items-start ">

          <Image
            src="/images/hero.png"
            alt="Students learning IT"
            width={520}
            height={520}
            priority
            className="relative drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
