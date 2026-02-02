import { NextRequest, NextResponse } from "next/server";
import { authPageMiddleware } from "@/common/middleware/authPage";

//midleware untuk fronted
//otomatis di exsekusi oleh next js dan diterpak middlewarenya
export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // 🔒 FRONTEND
  if (pathname.startsWith("/admin")) {
    return authPageMiddleware(req);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
