import type {AppProps} from 'next/app';
import {DebugProvider} from '../providers/DebugProvider';
import {GlobalStyle} from '../providers/GlobalStyle';
import MultiThemeProvider from "../providers/MultiThemeProvider";

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <DebugProvider>
      <MultiThemeProvider>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />
      </MultiThemeProvider>
    </DebugProvider>
  );
}

export default NextWeb3App;
