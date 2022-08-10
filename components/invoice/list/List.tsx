import { IInvoice } from "../../../interfaces";
import SingleInvoice from "./SingleInvoice";
import styles from "./List.module.scss";

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
            name={invoice.name}
            date={invoice.date}
            total={invoice.total}
            status={invoice.status}
          />
        ))}
      </ul>
    </section>
  );
}
