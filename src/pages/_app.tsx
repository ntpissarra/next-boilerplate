import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global.styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/public/vercel.svg" />
        <link rel="apple-touch-icon" href="/public/vercel.svg" />

        <meta name="description" content="next boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
