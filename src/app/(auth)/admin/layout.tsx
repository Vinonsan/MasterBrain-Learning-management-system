import type { ReactNode } from "react";
import LayoutChildren from "./_utils/LayoutChildren";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <LayoutChildren>{children}</LayoutChildren>;
}
