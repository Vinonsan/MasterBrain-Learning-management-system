"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BookOpenCheck,
  CalendarClock,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  MessageSquareText,
  PlaySquare,
  Settings,
  UserCircle2,
  Users,
} from "lucide-react";

const sidebarIcons = {
  bookOpen: BookOpen,
  bookOpenCheck: BookOpenCheck,
  calendarClock: CalendarClock,
  clipboardList: ClipboardList,
  creditCard: CreditCard,
  dashboard: LayoutDashboard,
  messageSquareText: MessageSquareText,
  playSquare: PlaySquare,
  settings: Settings,
  userCircle2: UserCircle2,
  users: Users,
} as const;

type SidebarIconName = keyof typeof sidebarIcons;

export type SidebarItem = {
  label: string;
  href: string;
  icon?: SidebarIconName;
};

type SidebarProps = {
  title: string;
  subtitle: string;
  logoSrc?: string;
  items?: SidebarItem[];
  defaultHref?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  iconClassName?: string;
  linkClassName?: string;
  activeItemClassName?: string;
  inactiveItemClassName?: string;
};

export default function Sidebar({
  title,
  subtitle,
  logoSrc = "/siteicon.png",
  items = [],
  defaultHref,
  className = "",
  titleClassName = "text-zinc-500",
  subtitleClassName = "text-zinc-900",
  iconClassName = "",
  linkClassName = "",
  activeItemClassName = "bg-primary text-white",
  inactiveItemClassName = "text-zinc-700 hover:bg-zinc-100",
}: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (pathname === href) return true;

    if (href !== defaultHref && pathname.startsWith(`${href}/`)) {
      return true;
    }

    const hasExactMatch = items.some((item) => pathname === item.href);
    const hasNestedMatch = items.some(
      (item) => item.href !== defaultHref && pathname.startsWith(`${item.href}/`),
    );

    if (!hasExactMatch && !hasNestedMatch && defaultHref) {
      return href === defaultHref;
    }

    return false;
  };

  return (
    <aside
      className={`h-full w-full border-r border-black/10 bg-white p-4 shadow-sm ${className}`.trim()}
    >
      <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-3">
        <Image
          src={logoSrc}
          alt={title}
          width={30}
          height={30}
          className="rounded-full"
        />

        <div>
          <p className={`text-xs ${titleClassName}`}>{title}</p>
          <p className={`text-sm font-semibold ${subtitleClassName}`}>{subtitle}</p>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon ? sidebarIcons[item.icon] : undefined;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition ${
                active ? activeItemClassName : inactiveItemClassName
              } ${linkClassName}`.trim()}
            >
              {Icon ? <Icon size={18} className={iconClassName} /> : null}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
