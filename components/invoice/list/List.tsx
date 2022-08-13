import { IInvoice } from "../../../interfaces";
import styles from "./List.module.scss";
import SingleInvoice from "./SingleInvoice";

export interface IInvoiceListProps {
  invoices: IInvoice[];
}

export default function InvoiceList({ invoices }: IInvoiceListProps) {
  return (
    <section className={styles.container}>
      <ul>
        {invoices.map((invoice) => (
          <SingleInvoice
            key={invoice.id}
            id={invoice.id}
            clientName={invoice.clientName}
            date={invoice.date}
            total={invoice.total}
            status={invoice.status}
          />
        ))}
      </ul>
    </section>
  );
}
