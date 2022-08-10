import Link from "next/link";
import { EStatus } from "../../../interfaces";
import styles from "./SingleInvoice.module.scss";

export interface ISingleInvoiceProps {
  id: string;
  name: string;
  date: Date;
  total: number;
  status: EStatus;
}

export default function SingleInvoice({ id, name, date, total, status }: ISingleInvoiceProps) {
  return (
    <Link href={`/invoices/${id}`}>
      <li className={styles.container}>
        <h3>{id}</h3>
        <h4>{name}</h4>
        <p>{date.toLocaleDateString()}</p>
        <h3>${total}</h3>
        <h3 className={`${styles.status} ${styles[`status--${status}`]}`}>{status}</h3>
      </li>
    </Link>
  );
}
