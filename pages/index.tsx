import React from 'react';
import Link from 'next/link';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => (
  <div>
    <h1>Home</h1>
    <Link href="/aware">
      <a>Awareness</a>
    </Link>
    <br />
    
    <Link href="/stopwatch">
      <a>Stopwatch</a>
    </Link>
  </div>
);

export default Home;
