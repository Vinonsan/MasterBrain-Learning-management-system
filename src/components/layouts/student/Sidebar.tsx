"use client";

import {
  BookOpen,
  CalendarClock,
  ClipboardList,
  LayoutDashboard,
  PlaySquare,
  UserCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "My Courses", href: "/student/my-courses", icon: BookOpen },
  { label: "Live Classes", href: "/student/live-classes", icon: CalendarClock },
  { label: "Recordings", href: "/student/recordings", icon: PlaySquare },
  { label: "Assignments / Exams", href: "/student/assignments-exams", icon: ClipboardList },
  { label: "Profile", href: "/student/profile", icon: UserCircle2 },
];

const Sidebar = () => {
  const pathname = usePathname();
  const hasExactMatch = navItems.some((item) => pathname === item.href);

  return (
    <aside className="h-full w-full border-r border-black/10 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-3">
        <Image src="/siteicon.png" alt="MasterBrain" width={30} height={30} className="rounded-full" />
        <div>
          <p className="text-xs text-zinc-500">MasterBrain</p>
          <p className="text-sm font-semibold text-dark">Student Menu</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (!hasExactMatch && item.href === "/student");

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition ${
                isActive ? "bg-primary text-white" : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
