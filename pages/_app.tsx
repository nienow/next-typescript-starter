import type {AppProps} from 'next/app';
import {DebugProvider} from '../providers/DebugProvider';
import {GlobalStyle} from '../providers/GlobalStyle';
import MultiThemeProvider from "../providers/MultiThemeProvider";
import {DialogProvider} from "../providers/DialogProvider";

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <DebugProvider>
      <MultiThemeProvider>
        <DialogProvider>
          <GlobalStyle></GlobalStyle>
          <Component {...pageProps} />
        </DialogProvider>
      </MultiThemeProvider>
    </DebugProvider>
  );
}

export default NextWeb3App;
