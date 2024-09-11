import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db/db';
import { eq } from 'drizzle-orm';
import { generateIdFromEntropySize } from 'lucia';
import { users } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  try {
    if (!username || !password)
      return NextResponse.json({ message: 'Bad Credentials' }, { status: 422 });

    const existingUser = await db.query.users.findFirst({
      where: eq(users.username, username),
    });

    if (existingUser)
      return NextResponse.json(
        { message: 'User with this email alredy exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 13);

    const user = await db
      .insert(users)
      .values({
        id: generateIdFromEntropySize(10),
        username,
        password: hashedPassword,
      })
      .returning();

    return NextResponse.json(
      { message: 'User successfully created', user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
