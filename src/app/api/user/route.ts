import { prisma } from "@/global/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  try {
    const result = await prisma.user.create({
      data,
    });
    const response = {
      status: 200,
      message: " User Created Successfully",
      data: result,
    };
    return new NextResponse(JSON.stringify(response));
  } catch (error: any) {
    return new NextResponse("Failed to create users", {
      status: 500,
    });
  }
}
