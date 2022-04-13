import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => (
  <div>
    <Head>
      <title>Train Me</title>
    </Head>
    <div className="h-screen">
      <h1>Home</h1>
      <Link href="/aware">
        <a>Awareness</a>
      </Link>
      <br />
      <Link href="/stopwatch">
        <a>Stopwatch</a>
      </Link>
    </div>
  </div>
);

export default Home;
