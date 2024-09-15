'use client';

import { getApplications } from '@/utils/api/applications';
import { queryKeys } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

const Applications = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getApplications(),
    queryKey: [queryKeys.applications.GET_APPLICATIONS],
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div>
      {data &&
        data?.map((item) => (
          <>
            <p key={item.id}>{item.name}</p>
            <p key={item.id}>{item.message}</p>
          </>
        ))}
    </div>
  );
};

export default Applications;
