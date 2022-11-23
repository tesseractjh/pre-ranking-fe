import { useEffect, useState } from 'react';

function useHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = ({ currentTarget }: Event) => {
    if (!currentTarget || !(currentTarget instanceof Window)) {
      return;
    }
    setIsScrolled(currentTarget.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
}

export default useHeader;
