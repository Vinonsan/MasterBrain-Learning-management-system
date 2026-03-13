"use client";

import Button from "@/src/components/base/Button";
import { Bell, LogOut, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  match?: "exact" | "prefix";
};

type Props = {
  items: SidebarItem[];
  defaultActiveHref?: string;
};

const Sidebar = ({ items, defaultActiveHref }: Props) => {
  const pathname = usePathname();
  const hasExactMatch = items.some((item) => pathname === item.href);

  const isItemActive = (item: SidebarItem) => {
    if (pathname === item.href) {
      return true;
    }

    if (item.match === "prefix" && pathname.startsWith(`${item.href}/`)) {
      return true;
    }

    return !hasExactMatch && item.href === defaultActiveHref;
  };

  return (
    <aside className="flex h-full w-full flex-col border-r border-black/10 bg-white p-4 shadow-sm">
     

      <nav className="flex-1 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = isItemActive(item);

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

      <div className="mt-4 border-t border-black/10 pt-4">
        <div className="space-y-2">
        
          <Button
            href="/login"
            variant="outline"
            size="sm"
            className="flex w-full items-center justify-start rounded-lg"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
