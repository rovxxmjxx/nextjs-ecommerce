import '@/css/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
    <NextUIProvider>
      <ThemeProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </NextUIProvider>
  );
}
