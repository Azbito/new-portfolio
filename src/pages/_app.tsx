import GlobalStyle from "@/styles/global";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import StyledTsxRegistry from "./registry";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledTsxRegistry>
      <GlobalStyle />
      <ThemeProvider theme={{ undefined }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledTsxRegistry>
  );
}
