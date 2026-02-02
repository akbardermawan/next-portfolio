import { NextResponse } from "next/server";
import supabase from "../../../../common/lib/db";

// POST: Login user
export async function POST(req: Request) {
  try {
    // Mengambil data JSON dari body request
    const body = await req.json();
    const { email, password } = body;

    // Validasi data
    if (!email || !password) {
      return NextResponse.json(
        { error: "All product fields are required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    //mengambil data sesion dari login
    const session = data.session;

    if (!session) {
      return NextResponse.json(
        { message: "No session returned" },
        { status: 401 },
      );
    }
    const response = NextResponse.json({ user: data.user }, { status: 200 });

    // SESSION COOKIE → hilang saat browser ditutup
    response.cookies.set("sb-access-token", session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    // OPTIONAL: kalau mau refresh token juga ikut hilang
    response.cookies.set("sb-refresh-token", session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    //mengirimkan cookie ke frontend
    return response;
  } catch (error) {
    console.error("POST register/api/ error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
