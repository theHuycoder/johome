import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useLazyQuery, gql } from "@apollo/client";
import { PriceCard } from "@/shared/components";
import { Card } from "@mui/material";
import { IntroLanding } from "@/views";
import { Navbar } from "@/shared/layouts";

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
  <>
   <IntroLanding />
  </>
 );
}
