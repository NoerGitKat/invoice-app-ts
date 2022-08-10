import type { NextPage } from "next";
import InvoiceContainer from "../components/invoice";
import { invoices } from "../components/invoice/data";

const Home: NextPage = () => {
  return (
    <main>
      <InvoiceContainer invoices={invoices} />
    </main>
  );
};

export default Home;
