import { useEffect, useState } from 'react';

interface DeferredProps {
  delay: number;
  children: React.ReactNode;
}

function Deferred({ delay, children }: DeferredProps) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeferred(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
}

export default Deferred;
