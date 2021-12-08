import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { store } from 'state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
