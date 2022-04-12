import '../styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../src/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
