import { IntroLanding } from "@/views";
import { Suspense } from "react";

export default function Home() {
 return (
  <>
   <Suspense>
    <IntroLanding />
   </Suspense>
  </>
 );
}
