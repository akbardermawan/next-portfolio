import { NextResponse } from "next/server";
import supabase from "../../../../common/lib/db";

// POST: create project
export async function POST(req: Request) {
  try {
    // Mengambil data JSON dari body request
    const body = await req.json();
    const { name, image, tecnology, description, url_github, url_project } =
      body;

    // Validasi data
    if (!name || !image || !tecnology || !description) {
      return NextResponse.json(
        { error: "All product fields are required" },
        { status: 400 },
      );
    }
    // Insert ke tabel "project"
    const { data, error } = await supabase
      .from("project")
      .insert([
        {
          name,
          image,
          tecnology,
          description,
          url_github,
          url_project,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ project: data }, { status: 201 });
  } catch (error) {
    console.error("POST register/api/ error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}


