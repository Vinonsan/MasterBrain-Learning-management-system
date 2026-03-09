import Sidebar from "@/src/components/layouts/student/Sidebar";
import TopBar from "@/src/components/layouts/student/TopBar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col">

      <div className="border-b border-black/5 bg-white">
        <TopBar
          name="Arun Kumar"
          profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
        />
      </div>

      <div className="flex flex-1 overflow-hidden">

        <aside className="hidden w-72 border-r border-black/5  md:block">
          <Sidebar />
        </aside>

        <section className="flex-1 overflow-y-auto ">
          <div className="space-y-6 p-4 md:p-6">
            {children}
          </div>
        </section>

      </div>
    </main>
  );
}