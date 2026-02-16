"use client";

import  { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/src/components/base/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/course" },
   { label: "Study materials", href: "/study-material" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex w-full items-center justify-between px-8 py-2 backdrop-blur-md border-b border-black/5 bg-white/80">
 
        <Link href="/" className="text-xl font-bold">
          <Image src="/logo.png" alt="MasterBrain Logo" width={120} height={32} />
        </Link>

  
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="primary" className="rounded-full px-6">
             Register Now
          </Button>
        </div>

        <Button
        size="xs"
        variant="transparent"
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-lg font-bold text-white"
              >
                Master<span className="text-primary">Brain</span>
              </Link>
              <Button onClick={() => setOpen(false)} size="xs" variant="rounded">
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>

            <ul className="flex flex-col gap-6 text-base font-medium text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block ${
                      isActive(link.href)
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button variant="primary" className="w-full rounded-full">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
