import { NextRequest, NextResponse } from "next/server";

//menjaga akses frontend atau page admin agar yang akses harus login dahulu
export function authPageMiddleware(req: NextRequest) {
  const token = req.cookies.get("sb-access-token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
