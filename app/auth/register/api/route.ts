import { NextResponse } from "next/server";
import supabase from "../../../../common/lib/db";

// POST: Tambah user baru
export async function POST(req: Request) {
  try {
    // Mengambil data JSON dari body request
    const body = await req.json();
    const { name, email, password } = body;

    // Validasi data
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All product fields are required" },
        { status: 400 },
      );
    }

    // Cek email sudah ada
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 409 },
      );
    }

    // 1️⃣ Register ke Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name, // metadata
        },
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // 2️⃣ (Optional) Simpan ke table profiles
    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        name,
        email,
      });
    }

    return NextResponse.json({ user: data.user }, { status: 201 });
  } catch (error) {
    console.error("POST register/api/ error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
