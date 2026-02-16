"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/course" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const courses = [
  { name: "React JS", href: "/courses/react" },
  { name: "Next.js", href: "/courses/nextjs" },
  { name: "JavaScript", href: "/courses/javascript" },
  { name: "Node.js", href: "/courses/nodejs" },
  { name: ".NET", href: "/courses/dotnet" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100084987801287", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/master.brain9920/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@masterbrain5989", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/master-brain-6b4667336/", label: "LinkedIn" },
];

const contactItems = [
  {
    icon: Mail,
    value: "support@masterbrain.site",
    href: "mailto:support@masterbrain.site",
  },
  {
    icon: Phone,
    value: "+94 075 831 1995",
    href: "tel:+940758311995",
  },
  {
    icon: MapPin,
    value: "point pedro road,kankesanthurai",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">

      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] w-16" />

      <div className="relative w-full mx-auto p-10">

        <div className="flex flex-col lg:flex-row gap-12 mb-16">

          <div className="flex-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              Master<span className="text-primary">Brain</span>
            </h3>
            <div className="h-1 w-20 rounded-full bg-primary mb-6" />

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
              Advanced IT & Communication education in Tamil medium. Empowering
              learners with industry-ready skills through practical training.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/20 bg-primary/10 flex items-center justify-center text-white transition hover:bg-primary cursor-pointer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>


          <div className="flex-1 flex flex-col sm:flex-row gap-10">
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-10">
            <FooterLinks title="Courses" links={courses} />
          </div>

          <div className="flex-1">
            <FooterHeading title="Contact Us" />
            <ul className="space-y-5">
              {contactItems.map(({ icon: Icon, value, href }, i) => (
                <li key={i} className="flex items-center justify-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {href ? (
                    <a
                      href={href}
                      className="text-gray-400 hover:text-white transition text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © {year} MasterBrain. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm transition relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterHeading({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <h4 className="text-white font-semibold uppercase tracking-wider mb-2">
        {title}
      </h4>
      <div className="h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <FooterHeading title={title} />
      <ul className="grid grid-cols-1 gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
