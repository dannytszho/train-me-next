import '../styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';

const publicPages: any = [];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  return (
    <div className="dark:bg-black dark:text-white transition duration-700">
      <ClerkProvider>
        {isPublicPage ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <>
            <SignedIn>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </div>
  );
};
export default MyApp;
