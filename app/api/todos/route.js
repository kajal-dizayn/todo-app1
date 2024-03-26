import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Todo from "../../../models/Todo";

export async function POST(req) {
  const { title, description } = await req.json();

  await connectMongoDB();

  const newUser = new Todo({
    title,
    description,
  });

  // Save the new user to the database
  await newUser.save();
  return NextResponse.json(
    {
      message: "Todo created successfully",
    },
    {
      status: 201,
    }
  );
}

export async function GET() {
  await connectMongoDB();
  const todos = await Todo.find({});
  return NextResponse.json(todos);
}

export async function DELETE(req) {
  const { id } = await req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json(
    {
      message: "Todo deleted successfully",
    },
    {
      status: 200,
    }
  );
}
