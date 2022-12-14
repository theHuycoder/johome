import {
 ApolloClient,
 createHttpLink,
 InMemoryCache,
 from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ErrorCodes } from "./errors";

import { getSession } from "next-auth/react";
import { onError } from "@apollo/client/link/error";
import Router from "next/router";

const httpLink = createHttpLink({
 uri: process.env.NEXT_PUBLIC_ROOT_API_GRAPHQL,
 credentials: "include",
});

console.log("env", process.env.NEXT_PUBLIC_ROOT_API_GRAPHQL);

const errorLink = onError(({ graphQLErrors, networkError }) => {
 if (graphQLErrors) {
  for (const error of graphQLErrors) {
   if (error.extensions.code === ErrorCodes.FORBIDDEN) {
    Router.push("/auth/login");
   }
  }
 }
 if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext(async (_, { headers }) => {
 const session = await getSession();

 console.log(session);

 return {
  headers: {
   ...headers,
   authorization: session?.jwt ? `Bearer ${session.jwt}` : "",
  },
 };
});

const client = new ApolloClient({
 link: from([errorLink, authLink, httpLink]),
 cache: new InMemoryCache(),
});

export default client;
