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

    return NextResponse.json(
      {
        user: data.user,
        session: data.session,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("POST register/api/ error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
