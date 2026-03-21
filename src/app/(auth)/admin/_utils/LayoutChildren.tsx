import type { ReactNode } from "react";
import Sidebar, { type SidebarItem } from "@/src/components/layouts/Sidebar";
import TopBar from "@/src/components/layouts/TopBar";

const adminNavItems: SidebarItem[] = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Students", href: "/admin/students", icon: "users" },
  { label: "Courses", href: "/admin/courses", icon: "bookOpenCheck" },
  { label: "Payments", href: "/admin/payments", icon: "creditCard" },
  { label: "Messages", href: "/admin/messages", icon: "messageSquareText" },
  { label: "Settings", href: "/admin/settings", icon: "settings" },
];

type LayoutChildrenProps = {
  children: ReactNode;
};

export default function LayoutChildren({ children }: LayoutChildrenProps) {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col lg:flex">
          <Sidebar
            title="MasterBrain"
            subtitle="Admin Panel"
            items={adminNavItems}
            defaultHref="/admin"
          />
        </aside>

        <section className="flex min-h-screen flex-1 flex-col">
          <div>
            <TopBar
              name="Admin User"
              roleLabel="Admin Workspace"
              profileImage="/siteicon.png"
            />
          </div>

          <div className="flex-1 p-4 md:p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
