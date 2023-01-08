import type { AppProps } from "next/app";

//Chakra
import { Chakra } from "Chakra"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default MyApp