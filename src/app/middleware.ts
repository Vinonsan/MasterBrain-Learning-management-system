import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/course",
  "/courses",
  "/resources",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const isAllowed = SITE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (!isAllowed) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
