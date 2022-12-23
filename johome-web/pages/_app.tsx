import type { AppProps } from "next/app";
import Head from "next/head";
/* Importing the ApolloProvider and the client from the apollo folder. */
import { ApolloProvider } from "@apollo/client";
import { client } from "@/shared/apollo";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/shared/context";

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
     <ThemeProvider>
      <Component {...pageProps} />
     </ThemeProvider>
    </ApolloProvider>
   </SessionProvider>
  </>
 );
}
