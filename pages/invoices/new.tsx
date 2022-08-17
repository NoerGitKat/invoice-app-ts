import { InvoiceForm } from "../../components/invoice";
import styles from "./NewInvoice.module.scss";

export default function NewInvoice() {
  return (
    <main className={styles.main}>
      <header>
        <article>
          <h2>New Invoice</h2>
        </article>
      </header>
      <InvoiceForm />
      <section className={styles.footer}>
        <aside>
          <button className="btn">Discard</button>
        </aside>
        <aside>
          <button className="btn">Save as Draft</button>
          <button className="btn">Send & Save</button>
        </aside>
      </section>
    </main>
  );
}
