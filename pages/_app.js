import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import '../styles/stylesheet.css'

const theme = extendTheme({
  fonts: {
    body: "Genius, sans-serif",
    heading: "Genius, sans-serif",
    mono: "Genius, sans-serif",
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
