import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/common/Layout";
import "../styles/Global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Invoicing App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="NoerGitKat" />
        <meta name="keywords" content="Invoicing, SPA" />
        <meta name="description" content="A simple invoicing app." />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
