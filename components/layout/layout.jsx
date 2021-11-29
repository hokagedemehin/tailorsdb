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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={desc} />
        <link rel="icon" href="/logo/tailorlogo6.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&family=Arvo:wght@400;700&family=Catamaran:wght@400;500;600;700;800;900&family=Josefin+Sans:wght@400;500;600;700&family=Merriweather+Sans:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700;900&family=Stardos+Stencil:wght@400;700&display=swap"
        />
        <meta
          name="google-site-verification"
          content="shrWGcYhhJuGhM5foR7h_xJ8sMkmcNotSWcNhIHuNfk"
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
