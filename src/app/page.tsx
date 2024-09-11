import SignUp from '@/components/SignUp';
import { validateRequest } from '@/lib/lucia';

export default async function Home() {
  const { user, session } = await validateRequest();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignUp />
    </div>
  );
}
