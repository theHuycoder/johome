import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useLazyQuery, gql } from "@apollo/client";

export default function Home() {
 const router = useRouter();
 const [getMe] = useLazyQuery(gql`
  query Me {
   me {
    id
    email
   }
  }
 `);

 const onSubmit = async (e) => {
  e.preventDefault();

  signIn("credentials", {
   email: e.target.email.value,
   password: e.target.password.value,
   redirect: false,
   json: true,
  }).then((payload) => {
   console.log(payload);
  });
 };

 return (
  <form onSubmit={onSubmit}>
		{/* Hello */}
   <input id="email" name="email" type="text" />
   <input id="password" name="password" type="password" />
   <button>Sign In</button>
   <button
    type="button"
    onClick={() =>
     getMe({
      onCompleted: (data) => {
       console.log(data);
      },
     })
    }
   >
    get me
   </button>
  </form>
 );
}
