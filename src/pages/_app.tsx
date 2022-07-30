import Head from 'next/head';
import { FC } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from 'src/app/store';
import '../styles/globals.scss';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

const WrappedCustomApp = wrapper.withRedux(CustomApp);

export default WrappedCustomApp;
