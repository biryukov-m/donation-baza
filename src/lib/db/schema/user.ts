import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: varchar('username', { length: 256 }).notNull().unique(),
  password: varchar('password', { length: 256 }),
});

export default users;
