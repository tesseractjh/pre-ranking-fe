import API from '@api/index';
import useMutation from '@hooks/useMutation';
import { useQueryClient } from '@tanstack/react-query';

function useDeleteNotification() {
  const queryClient = useQueryClient();

  return useMutation(API.notification.deleteNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries(['notification']);
    }
  });
}

export default useDeleteNotification;
