import '../styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../src/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="dark:bg-black dark:text-white transition duration-700">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);
export default MyApp;
