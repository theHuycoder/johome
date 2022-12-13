import React, { PropsWithChildren } from "react";
import Head from "next/head";

type BaseLayoutProps = {
 title: string;
};

const BaseLayout = ({
 children,
 title,
}: Partial<PropsWithChildren<BaseLayoutProps>>) => {
 return (
  <div>
   <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
   </Head>
   <div>{children}</div>
  </div>
 );
};

export default BaseLayout;
