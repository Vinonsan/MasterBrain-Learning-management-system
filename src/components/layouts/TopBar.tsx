import Button from "@/src/components/base/Button";
import { Bell, LogOut } from "lucide-react";
import Image from "next/image";

type TopBarProps = {
  name: string;
  profileImage?: string;
  roleLabel?: string;
  logoutHref?: string;
};

export default function TopBar({
  name,
  profileImage = "/siteicon.png",
  roleLabel = "Welcome",
  logoutHref = "/student/login",
}: TopBarProps) {
  return (
    <header className="flex w-full items-center justify-between border border-black/10 px-4 py-3 shadow-sm md:px-6">
      <div className="flex items-center gap-3">
        <Image
          src={profileImage}
          alt={`${name} profile`}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full border border-black/10 object-cover"
        />
        <div>
          <p className="text-xs text-zinc-500">{roleLabel}</p>
          <p className="text-sm font-semibold text-dark md:text-base">{name}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg border border-black/10 p-2 transition hover:bg-gray-100"
        >
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <Button
          href={logoutHref}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-lg"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}
