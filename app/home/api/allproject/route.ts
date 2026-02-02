import supabase from "@/common/lib/db";
import { NextResponse } from "next/server";

// GET: all projects
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("project")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ projects: data }, { status: 200 });
  } catch (error) {
    console.error("GET /api/project error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
