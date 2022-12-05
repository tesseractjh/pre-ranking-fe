import { useEffect, useState } from 'react';

function useNavBar(ref: React.RefObject<HTMLUListElement>) {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(
        ([{ borderBoxSize, contentBoxSize }]) => {
          const [{ inlineSize: borderSize }] = borderBoxSize;
          const [{ inlineSize: contentSize }] = contentBoxSize;
          setHasScroll(borderSize !== contentSize);
        }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return hasScroll;
}

export default useNavBar;
