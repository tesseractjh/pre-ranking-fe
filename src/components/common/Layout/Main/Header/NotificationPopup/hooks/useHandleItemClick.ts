import useDeleteNotification from '@hooks/mutations/useDeleteNotification';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useHandleItemClick() {
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteNotification();

  const handleClick = useCallback(
    (params: MutationParams, link: string) => async () => {
      await mutateAsync(params);
      navigate(link);
    },
    []
  );

  return handleClick;
}

export default useHandleItemClick;
