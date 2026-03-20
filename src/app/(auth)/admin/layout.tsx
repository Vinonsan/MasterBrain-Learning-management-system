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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-slate-950 text-white lg:flex">
          <Sidebar
            title="MasterBrain"
            subtitle="Admin Panel"
            items={adminNavItems}
            defaultHref="/admin"
            className="border-r-0 bg-slate-950 text-white shadow-none"
            titleClassName="text-red-300"
            subtitleClassName="text-white"
            activeItemClassName="bg-red-600 text-white shadow-lg shadow-red-950/30"
            inactiveItemClassName="text-slate-300 hover:bg-white/5 hover:text-white"
          />
        </aside>

        <section className="flex min-h-screen flex-1 flex-col">
          <div className="border-b border-slate-200 bg-white/90 backdrop-blur">
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
