import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    if (!email || !password)
      return NextResponse.json({ message: "Bad Credentials" }, { status: 422 });

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser)
      return NextResponse.json(
        { message: "User with this email alredy exists" },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db
      .insert(users)
      .values({
        id: uuidv4(),
        email,
        password: hashedPassword,
      })
      .returning();

    return NextResponse.json(
      { message: "User successfully created", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
