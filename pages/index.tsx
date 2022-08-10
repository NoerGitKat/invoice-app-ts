import type { NextPage } from "next";
import InvoiceContainer from "../components/invoice";
import { invoices } from "../components/invoice/data";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <InvoiceContainer invoices={invoices} />
    </main>
  );
};

export default Home;
