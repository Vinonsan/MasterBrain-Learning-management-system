"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Cube3D = ({
  x,
  y,
  size = 40,
  opacity = 0.25,
  delay = "0s",
}: {
  x: number;
  y: number;
  size?: number;
  opacity?: number;
  delay?: string;
}) => {
  const h = size;
  const d = size * 0.6;

  return (
    <svg
      width={h + d}
      height={h + d}
      viewBox={`0 0 ${h + d} ${h + d}`}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute animate-float pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity,
        animationDelay: delay,
      }}
    >
      <polygon
        points={`${d},0 ${h + d},0 ${h},${d} 0,${d}`}
        fill="rgba(255,255,255,0.35)"
      />
      <polygon
        points={`0,${d} ${h},${d} ${h},${h + d} 0,${h}`}
        fill="rgba(255,255,255,0.15)"
      />
      <polygon
        points={`${h},${d} ${h + d},0 ${h + d},${h} ${h},${h + d}`}
        fill="rgba(0,0,0,0.35)"
      />
    </svg>
  );
};

const CubeField = () => {
  const cubes = [
    { x: 8, y: 18, size: 26, delay: "0s" },
    { x: 18, y: 58, size: 36, delay: "1s" },
    { x: 32, y: 28, size: 22, delay: "2s" },
    { x: 48, y: 12, size: 30, delay: "0.5s" },
    { x: 62, y: 50, size: 26, delay: "1.5s" },
    { x: 74, y: 34, size: 40, delay: "2.5s" },
    { x: 86, y: 64, size: 24, delay: "3s" },
  ];

  return (
    <>
      {cubes.map((cube, i) => (
        <Cube3D key={i} {...cube} />
      ))}
    </>
  );
};

interface CTAProps {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  trustText?: string;
}

const CTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  trustText,
}: CTAProps) => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto">
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-linear-to-br from-primary via-black to-primary/90
            px-2 py-12
            shadow-card
          "
        >

          <CubeField />

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/40 blur-3xl" />

          <div className="relative z-10  mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-base md:text-lg text-white/90">
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCta.href}
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-white px-8 py-4
                  text-sm font-semibold text-primary
                  shadow-lg transition-all
                  hover:-translate-y-0.5 hover:shadow-xl
                "
              >
                {primaryCta.label}
                <ArrowRight size={18} />
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/40
                    px-8 py-4 text-sm font-semibold text-white
                    backdrop-blur-md transition-all
                    hover:bg-white/10
                  "
                >
                  {secondaryCta.icon}
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {trustText && (
              <p className="mt-8 text-xs text-white/70">
                {trustText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
