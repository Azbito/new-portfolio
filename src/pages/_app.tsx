import GlobalStyle from "@/styles/global";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
