import supabase from "@/common/lib/db";
import { NextResponse } from "next/server";

//get  user by Id
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params; // ✅ WAJIB await 
  try {
    const { data: project, error: findError } = await supabase
      .from("project")
      .select("id")
      .eq("id", id)
      .single();

    if (findError || !project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params; // ✅ WAJIB await

  try {
    const { data: project, error: findError } = await supabase
      .from("project")
      .select("id")
      .eq("id", id)
      .single();

    if (findError || !project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    const { error: deleteError } = await supabase
      .from("project")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete project", error },
      { status: 500 },
    );
  }
}
