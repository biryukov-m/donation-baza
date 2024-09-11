import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db/db';
import { sessionTable, users } from './db/schema';

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);
