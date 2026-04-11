// proxy.ts

// NextResponse ka use hota hai response bhejne ke liye (redirect, next, etc.)
import { NextResponse } from "next/server";

// NextRequest ka type hai jo request object ko define karta hai
import type { NextRequest } from "next/server";

// Ye ek middleware/proxy function hai jo har request pe run hota hai
export function proxy(req: NextRequest) {

  // Cookies se "jwt_token" nikal rahe hain (user login hai ya nahi check karne ke liye)
  const token = req.cookies.get("jwt_token")?.value;

  // Current URL ka path nikal rahe hain (jaise /cart, /wishlist)
  const pathname = req.nextUrl.pathname;

  // Ye protected routes hain jaha bina login ke access nahi dena
  const protectedRoutes = ["/cart", "/wishlist"];

  // Check kar rahe hain ki current route protected hai ya nahi
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route) // agar path /cart ya /wishlist se start hota hai
  );

  // Agar token nahi hai (user login nahi hai) AND route protected hai
  if (!token && isProtected) {

    // To user ko /login page pe redirect kar do
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Agar sab sahi hai (login hai ya route protected nahi hai)
  // To request ko aage jane do
  return NextResponse.next();
}

// Config batata hai ki middleware kin routes pe apply hoga
export const config = {
  matcher: [
    // "/admin/:path*",  // ye bhi protect kar sakte ho (nested routes ke liye)
    "/cart",           // sirf /cart route pe middleware chalega
    "/wishlist",       // sirf /wishlist route pe middleware chalega
  ],
};