import Applications from '@/components/Applications';
import SignUp from '@/components/SignUp';

import { validateRequest } from '@/lib/lucia';

export default async function Home() {
  const { user, session } = await validateRequest();

  return (
    <div className="wrapper">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Applications />
      <SignUp />
    </div>
  );
}
