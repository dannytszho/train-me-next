import Link from 'next/link';
import React from 'react';

const Nav = () => (
  <header className="flex justify-between p-5 max-w-7xl mx-auto">
    <div className="flex items-center space-x-5 m-2">
      <Link href="/">Train Me</Link>
      <div className="hidden md:inline-flex item-center space-x-5">
        <h3>About</h3>
        <Link href="/aware">
          <h3 className="text-white cursor-pointer bg-blue-400 px-4 py-1 rounded-full">
            Awareness
          </h3>
        </Link>
        <Link href="/stopwatch">
          <h3 className="text-white cursor-pointer bg-blue-400 px-4 py-1 rounded-full">
            Stopwatch
          </h3>
        </Link>
      </div>
    </div>
    <div className="flex items-center space-x-5">
      <h3>Sign In</h3>
      <h3 className="border px-4 py-1 cursor-pointer rounded-full border-blue-400">
        Get Started
      </h3>
    </div>
  </header>
);
export default Nav;
