import { NextResponse } from 'next/server';
import { db } from '@/lib/db/db';

export async function GET() {
  try {
    const applications = await db.query.applications.findMany();
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
