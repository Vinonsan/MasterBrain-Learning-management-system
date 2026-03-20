import {ReactNode} from "react"
export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main>
      <section className="w-full">{children}</section>
    </main>
  );
}
