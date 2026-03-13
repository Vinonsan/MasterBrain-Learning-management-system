"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../../base/Button";
import { Bell } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  profileImage?: string;
  profileImageAlt?: string;
};

const TopBar = ({
  title,
  subtitle = "Welcome",
  profileImage = "/siteicon.png",
  profileImageAlt,
}: Props) => {
  return (
    <header className="flex w-full items-center justify-between border border-black/10 px-4 py-3 shadow-sm md:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/siteicon.png" alt="MasterBrain" width={32} height={32} className="rounded-full" />
        <div>
          <p className="text-xs text-zinc-500">Learning Platform</p>
          <p className="text-sm font-semibold text-dark md:text-base">MasterBrain</p>
        </div>
      </Link>

      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"     
        >
          <Bell className="h-6 w-6" />
        </Button>
        <div className="flex items-center  gap-3 ">

          <Image
            src={profileImage}
            alt={profileImageAlt ?? `${title} profile`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-black/10 object-cover"
          />

          <div>
            <p className="text-xs text-zinc-500">{subtitle}</p>
            <p className="text-sm font-semibold text-dark md:text-base">{title}</p>
          </div>

        </div>
      </div>


    </header>
  );
};

export default TopBar;
