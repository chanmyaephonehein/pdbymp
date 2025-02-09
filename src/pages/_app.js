import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <tite>AI-Solution</tite>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
