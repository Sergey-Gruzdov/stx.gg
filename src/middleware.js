import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Allow iframe embedding from specific origins
  res.headers.set("X-Frame-Options", "ALLOW-FROM https://landix.art");
  res.headers.set(
    "Content-Security-Policy",
    "frame-ancestors 'self' https://landix.art"
  );

  return res;
}
