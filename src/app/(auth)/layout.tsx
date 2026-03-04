
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="w-full">{children}</section>
    </main>
  );
}
