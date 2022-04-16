import Link from 'next/link';
import React from 'react';
import { SignedOut, UserButton } from '@clerk/nextjs';
// import { UserButton } from '@clerk/clerk-react';
import useTheme from '../hooks/useTheme';

const Nav = () => {
  const [setTheme, colorTheme] = useTheme();

  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5 m-4">
        <Link href="/">Train Me</Link>
        <div className="hidden md:inline-flex item-center space-x-5">
          <Link href="/about">
            <h3 className="cursor-pointer p-1">About</h3>
          </Link>
          <Link href="/aware">
            <h3 className="text-white cursor-pointer bg-blue-400 px-4 py-1 rounded-full drop-shadow-lg">
              Awareness
            </h3>
          </Link>
          <Link href="/stopwatch">
            <h3 className="text-white cursor-pointer bg-blue-400 px-4 py-1 rounded-full drop-shadow-lg">
              Stopwatch
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <SignedOut>
          <Link href="/sign-in">
            <h3>Sign in</h3>
          </Link>
        </SignedOut>
        <h3 className="border px-4 py-1 cursor-pointer rounded-full border-blue-400">
          Get Started
        </h3>
        <button
          className="w-6 h-6 rounded-full bg-black text-black dark:bg-white drop-shadow-xl"
          type="button"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === 'light' ? '' : ''}
        </button>
        <UserButton />
      </div>
    </header>
  );
};
export default Nav;
