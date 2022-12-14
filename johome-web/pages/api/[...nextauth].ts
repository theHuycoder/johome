/* eslint-disable import/no-anonymous-default-export */
import NextAuth, { Awaitable, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const login = (email: string, password: string) =>
 fetch(process.env.NEXTAUTH_API_SERVER + "/api/auth/local", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({
   identifier: email,
   password: password,
  }),
 });

const credentialsAuthorize = async (
 credentials: Record<"email" | "password", string> | undefined
) => {
 if (!credentials) return null;

 try {
  const resp = await login(credentials.email, credentials.password);

  if (resp) {
   const data = await resp.json();
   return data;
  }

  return null;
 } catch (error) {
  console.log(error);
  throw error;
 }
};

export default NextAuth({
 secret: process.env.NEXTAUTH_SECRET,
 providers: [
  CredentialsProvider({
   name: "Sign in with email",
   credentials: {
    email: { label: "email", type: "text", placeholder: "email" },
    password: { label: "Password", type: "password" },
   },
   authorize: credentialsAuthorize,
  }),
 ],
 callbacks: {
  jwt: async ({ token, user: { jwt, user } = { jwt: "", user: null } }) => {
   if (jwt) {
    token.jwt = jwt;
   }

   if (user) {
    token.user = user;
   }
   return token;
  },
  session: async ({ session, token }) => {
   session.jwt = token.jwt;
   session.user = token.user;
   return session;
  },
 },
});
