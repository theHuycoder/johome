import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

/* Importing the font Mulish from the font source. */
import "@fontsource/mulish/200.css";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";

/* Importing the ApolloProvider and the client from the apollo folder. */
import { ApolloProvider } from "@apollo/client";
import { client } from "@/shared/apollo";
import { SessionProvider } from "next-auth/react";

export default function App({
 Component,
 pageProps: { session, ...pageProps },
}: AppProps) {
 return (
  <>
   <Head>
    <meta
     name="viewport"
     content="minimum-scale=1, initial-scale=1, width=device-width"
    />
   </Head>
   <style jsx global>{`
    html,
    body {
     width: 100%;
     overflow-x: hidden;
    }
   `}</style>
   <SessionProvider session={session}>
    <ApolloProvider client={client}>
     <Component {...pageProps} />
    </ApolloProvider>
   </SessionProvider>
  </>
 );
}
