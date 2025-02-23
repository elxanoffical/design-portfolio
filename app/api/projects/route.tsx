import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Project } from "../../../lib/models/Project";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { title, subtitle, description } = await req.json();

    if (!title || !subtitle || !description) {
      return NextResponse.json(
        { error: "Title and Subtitle are required" },
        { status: 400 }
      );
    }

    const newProject = new Project({ title, subtitle, description });
    await newProject.save();

    return NextResponse.json(
      { message: "Project created successfully", Project: newProject },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET method - Fetch all project
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }); // Son əlavə olunan birinci gəlsin
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Project" },
      { status: 500 }
    );
  }
}
