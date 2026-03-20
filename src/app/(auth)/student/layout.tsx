import type { ReactNode } from "react";
import Sidebar, { SidebarItem } from "@/src/components/layouts/Sidebar";
import TopBar from "@/src/components/layouts/TopBar";
import {
  LayoutDashboard,
  BookOpen,
  CalendarClock,
  PlaySquare,
  ClipboardList,
  UserCircle2,
} from "lucide-react";

const studentNavItems: SidebarItem[] = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "My Courses", href: "/student/my-courses", icon: BookOpen },
  { label: "Live Classes", href: "/student/live-classes", icon: CalendarClock },
  { label: "Recordings", href: "/student/recordings", icon: PlaySquare },
  {
    label: "Assignments / Exams",
    href: "/student/assignments-exams",
    icon: ClipboardList,
  },
  { label: "Profile", href: "/student/profile", icon: UserCircle2 },
];

export default function StudentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col">
      <div className="border-b border-black/5 bg-white">
        <TopBar
          name="Arun Kumar"
          roleLabel="Welcome"
          profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-72 md:block">
          <Sidebar
            title="MasterBrain"
            subtitle="Student Menu"
            items={studentNavItems}
            defaultHref="/student"
          />
        </aside>

        <section className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-4 md:p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}