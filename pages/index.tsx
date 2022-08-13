import type { NextPage } from "next";
import { useRouter } from "next/router";
import { InvoiceList } from "../components/invoice";
import { invoices } from "../data";

const Home: NextPage = () => {
  const { push } = useRouter();

  const toCreatePage = () => push("/create");

  return (
    <main>
      <header>
        <article>
          <h2>Invoices</h2>
          <p>
            There are a total of <b>{invoices.length}</b> invoice{invoices.length !== 1 && "s"}
          </p>
        </article>

        <button className="btn" onClick={toCreatePage}>
          Create New Invoice
        </button>
      </header>
      <InvoiceList invoices={invoices} />
    </main>
  );
};

export default Home;
