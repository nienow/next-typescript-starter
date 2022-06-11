import type { AppProps } from 'next/app';
import { DebugProvider } from '../providers/DebugProvider';
import { GlobalStyle } from '../providers/GlobalStyle';

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
      <DebugProvider>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />
      </DebugProvider>
  );
}

export default NextWeb3App;
