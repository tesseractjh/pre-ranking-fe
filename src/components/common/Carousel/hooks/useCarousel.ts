import { useEffect, useState } from 'react';
import type { Item } from '..';

export type Status =
  | 'stop'
  | 'prevReady'
  | 'nextReady'
  | 'prevTransition'
  | 'nextTransition';

function useCarousel(allItems: Item[]) {
  const [order, setOrder] = useState(0);
  const [status, setStatus] = useState<Status>('stop');
  const [items, setItems] = useState<Item[]>([allItems[0]]);

  const handleIndicatorClick = (indicatorOrder: number) => () => {
    if (order === indicatorOrder || status !== 'stop') {
      return;
    }

    setStatus(order > indicatorOrder ? 'prevReady' : 'nextReady');
    setOrder(indicatorOrder);
  };

  useEffect(() => {
    if (status === 'stop') {
      const timerId = setInterval(() => {
        setStatus('nextReady');
        setOrder((prev) => (prev === allItems.length - 1 ? 0 : prev + 1));
      }, 15000);

      return () => clearInterval(timerId);
    }

    if (status === 'prevTransition') {
      const timerId = setTimeout(() => {
        setStatus('stop');
        setItems((prev) => [prev[0]]);
      }, 1000);

      return () => clearTimeout(timerId);
    }

    if (status === 'nextTransition') {
      const timerId = setTimeout(() => {
        setStatus('stop');
        setItems((prev) => [prev[1]]);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [status]);

  useEffect(() => {
    if (status === 'prevReady') {
      setStatus('prevTransition');
      setItems((prev) => [allItems[order], ...prev]);
      return;
    }

    if (status === 'nextReady') {
      setStatus('nextTransition');
      setItems((prev) => [...prev, allItems[order]]);
    }
  }, [status, order]);

  return { order, items, status, handleIndicatorClick };
}

export default useCarousel;
