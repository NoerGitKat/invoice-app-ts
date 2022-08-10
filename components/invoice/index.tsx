import { useRouter } from "next/router";
import { IInvoice } from "../../interfaces";
import InvoiceList from "./List";

export interface IInvoiceContainerProps {
  invoices: IInvoice[];
}

export default function InvoiceContainer({ invoices }: IInvoiceContainerProps) {
  const { push } = useRouter();

  const toCreatePage = () => push("/create");

  return (
    <section>
      <header>
        <article>
          <h2>Invoices</h2>
          <p>
            There are a total of <b>{invoices.length}</b> invoices
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
