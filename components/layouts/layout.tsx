import { ReactNode } from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>TheProgrammer - Screening</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Pragrammer build with Next JS and Tailwind css" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <Header />
      <main className="bg-background">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
