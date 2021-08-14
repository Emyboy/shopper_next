import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/global.css";

const Theme = {
  theme_color: "#460f6b",
  theme_color2: "#f09d50",
  theme_color_dark: "#330b4e",
  bg_color: "#edeaef",
  accent_color: "#c7b3d3",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
