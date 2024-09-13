'use server';

import { lucia, validateRequest } from '@/lib/lucia';
import { ILoginData } from '@/types/common.types';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { db } from '@/lib/db/db';
import { eq } from 'drizzle-orm';

export const signIn = async (values: ILoginData) => {
  try {
    const existingUser = await db.query.users.findFirst({
      where: (table) => eq(table.username, values.username),
    });

    if (!existingUser) {
      return {
        error: 'User not found',
      };
    }

    if (!existingUser.password) {
      return {
        error: 'User not found',
      };
    }

    const isValidPassword = await bcrypt.compare(
      values.password,
      existingUser.password
    );

    if (!isValidPassword) {
      return {
        error: 'Incorrect username or password',
      };
    }

    const session = await lucia.createSession(existingUser.id, {
      expiresIn: 60 * 60 * 24 * 30,
    });

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      message: 'Logged in successfully',
    };
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};

export const signOut = async () => {
  try {
    const { session } = await validateRequest();

    if (!session) {
      return {
        error: 'Unauthorized',
      };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};
