import type { AppProps } from 'next/app';
import { apiPlugin, storyblokInit } from '@storyblok/js';

// eslint-disable-next-line import/order
import { AppProviders } from '@/providers/AppProviders';

import '@/styles/normalize.css';

import { StoryblokClient } from '@/lib/storyblok/storyblok.types';

const sb: any = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  bridge: process.env.NODE_ENV !== 'production',
  use: [apiPlugin] as any,
  apiOptions: {
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  },
});

export const storyblokApi: StoryblokClient = sb.storyblokApi;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
