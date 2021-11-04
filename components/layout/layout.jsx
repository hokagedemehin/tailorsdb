import React from "react";
import { BackToTop } from "material-ui-back-to-top";
import Head from "next/head";
import NavHeader from "../home/header/navheader.components";
import FooterNav from "../home/footer/navfooter.component";

const Layout = ({ children, name, desc }) => {
  return (
    <div>
      <Head>
        <title>Tailors DB - {name}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/logo/tailorlogo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <NavHeader />
      <main className="min-h-screen">{children}</main>
      <FooterNav />
      <BackToTop size="small" />
    </div>
  );
};

export default Layout;
