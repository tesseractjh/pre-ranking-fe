import { useEffect } from 'react';

function usePreventScroll(isOpen?: boolean) {
  useEffect(() => {
    const { body } = document;

    if (isOpen === undefined) {
      body.classList.add('prevent-scroll');
      return () => body.classList.remove('prevent-scroll');
    }

    if (isOpen) {
      body.classList.add('prevent-scroll');
    } else {
      body.classList.remove('prevent-scroll');
    }
  }, [isOpen]);
}

export default usePreventScroll;
