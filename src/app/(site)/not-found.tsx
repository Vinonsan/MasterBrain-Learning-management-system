"use client";
import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-black via-red-950 to-black px-6">
      
      <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-red-700/30 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-120 w-120 rounded-full bg-red-700/30 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-red-500/20 bg-black/60 p-8 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(220,38,38,0.25)]">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <AlertTriangle size={32} />
        </div>

        <h1 className="mt-6 bg-linear-to-r from-red-500 to-red-300 bg-clip-text text-7xl font-extrabold text-transparent">
          404
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Page not found
        </p>

        <p className="mt-1 text-sm text-gray-400">
          The page you’re trying to access doesn’t exist or was moved.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:scale-105"
        >
          <Home size={18} />
          <span>Back to Home</span>
         
        </Link>
      </div>
    </div>
  );
}

export default NotFound;