import React, { ReactChild } from "react";
import Head from "next/head";

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Alfie Martin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="naclogo.png" as="image"></link>
        <link rel="preload" href="rdmlogo.gif" as="image"></link>
        <link rel="preload" href="TapFlash logo.png" as="image"></link>
        <link rel="preload" href="neurifylogo.png" as="image"></link>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Template;
