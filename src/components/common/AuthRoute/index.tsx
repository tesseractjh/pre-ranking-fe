import useAccessToken from '@hooks/queries/useAccessToken';

interface Props {
  children: React.ReactNode;
}

function AuthRoute({ children }: Props) {
  useAccessToken({ enabled: true });

  return <>{children}</>;
}

export default AuthRoute;
