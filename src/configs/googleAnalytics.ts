import ReactGA from 'react-ga4';

if (import.meta.env.VITE_GA_ID) {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
  ReactGA.send('pageview');
}
