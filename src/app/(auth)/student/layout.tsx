"use client";

import Sidebar, { type SidebarItem } from "@/src/components/layouts/student/Sidebar";
import TopBar from "@/src/components/layouts/student/TopBar";
import {
  BookOpen,
  CalendarClock,
  ClipboardList,
  LayoutDashboard,
  PlaySquare,
  UserCircle2,
} from "lucide-react";

const studentNavItems: SidebarItem[] = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "My Courses", href: "/student/my-courses", icon: BookOpen, match: "prefix" },
  { label: "Live Classes", href: "/student/live-classes", icon: CalendarClock, match: "prefix" },
  { label: "Recordings", href: "/student/recordings", icon: PlaySquare, match: "prefix" },
  {
    label: "Assignments / Exams",
    href: "/student/assignments-exams",
    icon: ClipboardList,
    match: "prefix",
  },
  { label: "Profile", href: "/student/profile", icon: UserCircle2, match: "prefix" },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col">
      <div className="border-b border-black/5 bg-white">
        <TopBar
          title="Arun Kumar"
          subtitle="Welcome"
          profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-72 border-r border-black/5 md:block">
          <Sidebar items={studentNavItems} defaultActiveHref="/student" />
        </aside>

        <section className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-4 md:p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
