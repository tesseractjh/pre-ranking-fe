import API from '@api/index';
import useQuery from '@hooks/useQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useHandleSignup() {
  const [params, setParams] = useState<Params | null>(null);
  const navigate = useNavigate();

  useQuery(['signup'], () => API.user.signup(params ?? {}), {
    enabled: !!params,
    onSuccess: () => {
      navigate('/', { replace: true });
    }
  });

  return (params: Params) => {
    setParams(params);
  };
}

export default useHandleSignup;
