import { pgTable, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: varchar('id', { length: 256 }).primaryKey(),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 }),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex('users_email_index').on(table.email),
    };
  }
);

export type User = typeof users.$inferSelect;
