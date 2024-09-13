import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db/db';
import sessionTable from './db/schema/session';
import users from './db/schema/user';

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);
