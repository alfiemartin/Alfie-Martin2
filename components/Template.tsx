import React, { ReactChild } from "react";
import Head from "next/head";

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Alfie Martin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Template;
