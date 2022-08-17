import { IInvoice } from "../../../interfaces";
import styles from "./DetailsItems.module.scss";

export interface IDetailsItemsProps {
  invoice: Pick<IInvoice, "products">;
}

export default function DetailsItems({ invoice }: IDetailsItemsProps) {
  const columns = ["Product", "Quantity", "Price", "Total"];
  return (
    <section className={styles.section}>
      <article className={styles.details}>
        {columns.map((column) => (
          <aside key={column}>
            <h4>{column}</h4>
          </aside>
        ))}
      </article>
      {invoice.products.map((product) => (
        <article key={product.name} className={styles.details}>
          <aside>
            <p>{product.name}</p>
          </aside>
          <aside>
            <p>${product.quantity}</p>
          </aside>
          <aside>
            <p>${product.price}</p>
          </aside>
          <aside>
            <p>${product.quantity * product.price}</p>
          </aside>
        </article>
      ))}
    </section>
  );
}
