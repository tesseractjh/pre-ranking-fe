import API from '@api/index';
import useMutation from '@hooks/useMutation';
import { useQueryClient } from '@tanstack/react-query';

function useDeleteAllNotifications() {
  const queryClient = useQueryClient();

  return useMutation(API.notification.deleteAllNotifications, {
    onSuccess: () => {
      queryClient.resetQueries(['notification']);
    }
  });
}

export default useDeleteAllNotifications;
