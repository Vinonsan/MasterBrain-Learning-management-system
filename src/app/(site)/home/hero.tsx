"use client";
import { useEffect, useState } from "react";
import Badge from "@/src/components/base/Badge"
import Button from "@/src/components/base/Button"
import {
    Sparkles,
    Award,
    Terminal,
    Zap,
} from "lucide-react"

import Image from "next/image"
import { useRouter } from "next/navigation";

const ROTATING_TEXTS = [
    "A/L ICT Students",
    "Aspiring Developers",
    "Next-Gen Engineers",
    "Post-A/L Learners",
    "Tech Enthusiasts",
];

const Hero = () => {
    const features = [
        {
            label: "Curriculum Aligned",
            icon: Award,
        },
        {
            label: "Tech Mastery",
            icon: Terminal,
        },
        {
            label: "Tech Mastery",
            icon: Zap,
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    
    const router = useRouter();
    return (
        <section className="w-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-start justify-start">
                <div className="space-y-4">
                    <Badge variant="primary" className="text-sm font-semibold">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Advanced IT Education Center
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold leading-tight tracking-tight text-dark">
                        The Ultimate IT Roadmap for{" "}
                        <span className="relative inline-block text-primary transition-all duration-500">
                            {ROTATING_TEXTS[index]}
                            <span className="absolute -bottom-2 left-0 right-0 h-3 rounded-full bg-primary opacity-20 -z-10" />
                        </span>

                    </h1>

                    <p className="max-w-2xl text-lg sm:text-xl font-medium text-black/70 leading-relaxed">
                        Specialized ICT coaching for A/L students and professional development courses for aspiring developers. Gain deep knowledge in everything from school IT subjects to advanced frameworks like React, C#, and full-stack web development.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="group rounded-full w-full md:w-auto px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                          Enter Dashboard
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full w-full md:w-auto border-2 border-dark px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-black hover:text-white"
                            onClick={() => router.push("/course-material")}
                        >
                            Explore Resources
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        {features.map(({ label, icon: Icon }, idx) => (
                            <div key={`${label}-${idx}`} className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-1">
                                    <Icon className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-dark">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="relative w-full  rounded-full  flex items-start justify-center overflow-hidden">

                    <div className="absolute w-80 sm:w-95 md:w-115 lg:w-140 aspect-square rounded-full bg-primary/10 blur-3xl animate-pulse" />

                    <div className="relative w-65 sm:w-80 md:w-100 lg:w-125 aspect-square ">
                        <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl animate-[spin_20s_linear_infinite]" />

                        <Image
                            src="/images/hero.png"
                            alt="Advanced IT Learning Platform"
                            fill
                            priority
                            className="relative object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero
