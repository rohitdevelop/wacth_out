// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("jwt_token")?.value;
  const pathname = req.nextUrl.pathname;

const protectedRoutes = ["/dashboard", "/admin", "/cart", "/wishlist"];

const isProtected = protectedRoutes.some((route) =>
  pathname.startsWith(route)
);

if (!token && isProtected) {
  return NextResponse.redirect(new URL("/login", req.url));
}
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart",
    "/wishlist",
  ],
};