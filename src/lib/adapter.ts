import { sessionTable, users } from './db/schema';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db/db';

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);
