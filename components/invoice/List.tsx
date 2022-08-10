import { IInvoice } from "../../interfaces";
import SingleInvoice from "./SingleInvoice";

export interface IInvoiceListProps {
  invoices: IInvoice[];
}

export default function InvoiceList({ invoices }: IInvoiceListProps) {
  return (
    <section>
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
