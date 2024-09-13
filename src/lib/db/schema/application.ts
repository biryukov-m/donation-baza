import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

const applications = pgTable('applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }),
  phone: varchar('phone', { length: 256 }),
  message: varchar('message', { length: 256 }),
});

export default applications;
