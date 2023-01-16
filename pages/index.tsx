import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => (
  /* Hero section */
  <div>
    <Head>
      <title>Train Me</title>
    </Head>
    <section className="container mx-auto px-6 p-10 bg-red-600">
      <h1>Home</h1>
      <Link href="/aware">
        <a>Awareness</a>
      </Link>
      <br />
      <Link href="/stopwatch">
        <a>Stopwatch</a>
      </Link>
    </section>
  </div>
);

export default Home;
