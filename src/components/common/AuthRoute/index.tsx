import { useEffect, useState } from 'react';
import useAccessToken from '@hooks/queries/useAccessToken';
import Loading from '../Fallback/Loading';
import PageError from '../Fallback/Error/PageError';

interface Props {
  children: React.ReactNode;
}

function AuthRoute({ children }: Props) {
  const [isInitial, setIsInitial] = useState(true);
  const { isLoading, isError } = useAccessToken({ enabled: isInitial });

  useEffect(() => {
    if (isInitial && !isLoading) {
      setIsInitial(false);
    }
  }, [isLoading, isInitial]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <PageError />;
  }

  return <>{children}</>;
}

export default AuthRoute;
