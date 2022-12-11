import { useEffect, useRef } from 'react';

const observerCallback =
  (onIntersect: () => Promise<unknown>): IntersectionObserverCallback =>
  async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await onIntersect();
    }
  };

function useInfiniteScroll<T extends Element>(
  data: unknown,
  onIntersect: () => Promise<unknown>
) {
  const target = useRef<T>(null);

  useEffect(() => {
    if (target.current?.lastElementChild) {
      const observer = new IntersectionObserver(observerCallback(onIntersect), {
        threshold: 0.2
      });
      observer.observe(target.current.lastElementChild);
      return () => observer.disconnect();
    }
  }, [target.current?.lastElementChild, onIntersect, data]);

  return target;
}

export default useInfiniteScroll;
