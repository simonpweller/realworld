import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Head from "next/head";
import { makeServer } from "../server";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" });
  }

  const fetcher = async (input: RequestInfo, init: RequestInit) => {
    const res = await fetch(input, init);
    return res.json();
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
        <link
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://demo.productionready.io/main.css"
        />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
