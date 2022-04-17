/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';

const publicPages: any = [
  '/',
  '/sign-in/[[...index]]',
  '/sign-up/[[...index]]',
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  const MyComponent = Component as any;
  return (
    <div className="h-screen dark:bg-black dark:text-white transition duration-700">
      <ClerkProvider>
        {isPublicPage ? (
          <Layout>
            <MyComponent {...pageProps} />
          </Layout>
        ) : (
          <>
            <SignedIn>
              <Layout>
                <MyComponent {...pageProps} />
              </Layout>
            </SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </div>
  );
};
export default MyApp;
