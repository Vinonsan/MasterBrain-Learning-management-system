
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main >
        <section className="flex w-full items-center justify-center py-6">
          {children}
        </section>
   
    </main>
  );
}
