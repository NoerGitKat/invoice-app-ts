import { useRouter } from "next/router";
import { IInvoice } from "../../interfaces";
import styles from "./InvoiceContainer.module.scss";
import InvoiceList from "./list/List";

export interface IInvoiceContainerProps {
  invoices: IInvoice[];
}

export default function InvoiceContainer({ invoices }: IInvoiceContainerProps) {
  const { push } = useRouter();

  const toCreatePage = () => push("/create");

  return (
    <section className={styles.container}>
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
    </section>
  );
}
