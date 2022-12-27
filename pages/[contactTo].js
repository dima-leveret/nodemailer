import Head from "next/head";
import { Contact } from "../components/contactForm";

export default function ContactTo() {
  return (
    <>
      <Head>
        <title>Nodemailer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
