import API from '@api/index';
import useInfiniteQuery from '@hooks/useInfiniteQuery';

function useNotification(start: number, enabled = true) {
  return useInfiniteQuery(
    ['notification'],
    ({ pageParam = start }) =>
      API.notification.getNotifications({ start: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.notifications[0] &&
        allPages.reduce((acc, page) => acc + page.notifications.length, 0) + 1,
      staleTime: 30 * 1000,
      refetchInterval: 3 * 60 * 1000,
      enabled
    }
  );
}

export default useNotification;
