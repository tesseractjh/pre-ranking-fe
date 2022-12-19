import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

function useGoogleAnalytics() {
  const { pathname, search } = useLocation();
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial(true);
  }, []);

  useEffect(() => {
    if (initial) {
      ReactGA.send({
        hitType: 'pageview',
        path: pathname,
        location: pathname,
        title: pathname
      });
    }
  }, [initial, pathname, search]);
}

export default useGoogleAnalytics;
