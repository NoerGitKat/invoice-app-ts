import { IInvoice } from "../../../interfaces";
import styles from "./DetailsContent.module.scss";

export interface IDetailsContentProps {
  invoice: IInvoice;
}

export default function DetailsContent({ invoice }: IDetailsContentProps) {
  return (
    <section className={styles.section}>
      <article className={styles.details}>
        <aside>
          <h4>{invoice.id}</h4>
          <p>{invoice.description}</p>
        </aside>
        <aside>
          <h4>Sender Address</h4>
          <p>{invoice.senderAddress.street}</p>
          <p>{invoice.senderAddress.city}</p>
          <p>{invoice.senderAddress.postalCode}</p>
          <p>{invoice.senderAddress.country}</p>
        </aside>
      </article>

      <article className={styles.details}>
        <aside className={styles.details__aside}>
          <div>
            <h4>Invoice Date</h4>
            <p>{invoice.createdAt}</p>
          </div>
          <div>
            <h4>Payment Due</h4>
            <p>{invoice.paymentDue}</p>
          </div>
        </aside>

        <aside>
          <h4>Bill to</h4>
          <p>{invoice.clientName}</p>
          <>
            <p>{invoice.clientAddress.street}</p>
            <p>{invoice.clientAddress.city}</p>
            <p>{invoice.clientAddress.postalCode}</p>
            <p>{invoice.clientAddress.country}</p>
          </>
        </aside>

        <aside>
          <h4>Send to</h4>
          <p>{invoice.clientEmail}</p>
        </aside>
      </article>

      <article className={styles.details}>
        <h4>Grand Total</h4>
        <p>${invoice.total}</p>
      </article>
    </section>
  );
}
