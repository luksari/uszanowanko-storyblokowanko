import type { AppProps } from 'next/app'
import {AppProviders} from "@/providers/AppProviders";
import '@/styles/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>);
}

export default MyApp
