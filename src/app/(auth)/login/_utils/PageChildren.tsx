"use client";

import Button from "@/src/components/base/Button";
import Input from "@/src/components/base/Input";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FormEvent, useState } from "react";

const PageChildren = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = searchParams.get("from");
  const courseId = searchParams.get("courseId");
  const registerHref =
    from === "enroll" ? `/register?from=enroll${courseId ? `&courseId=${courseId}` : ""}` : "/register";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    if (from === "enroll") {
      router.push(`/course-registration${courseId ? `?courseId=${courseId}` : ""}`);
      return;
    }
    router.push("/student");
  };

  return (
    <div className="mx-auto flex w-md flex-col items-start justify-center rounded-2xl border border-black/10 p-5 ">
      <div className="flex w-full flex-col items-center justify-center space-y-1 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full ">
          <Image src="/siteicon.png" alt="Logo" width={56} height={56} className="object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-dark">Login</h2>
        <p className="text-sm text-gray-500">Welcome back! Please login to your account</p>
      </div>

      <form className="mt-6 w-full space-y-4" onSubmit={handleSubmit}>
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={email}
          onChange={(value) => setEmail(String(value))}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(value) => setPassword(String(value))}
          required
        />

        <div className="flex justify-end">
          <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" size="md" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="flex w-full items-center justify-center">
        <p className="mt-5 text-sm text-zinc-600">
          New here?{" "}
          <Link href={registerHref} className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageChildren;

