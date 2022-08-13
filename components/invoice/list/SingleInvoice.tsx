import Link from "next/link";
import { EStatus } from "../../../interfaces";

export interface ISingleInvoiceProps {
  id: string;
  clientName: string;
  date: Date;
  total: number;
  status: EStatus;
}

export default function SingleInvoice({
  id,
  clientName,
  date,
  total,
  status,
}: ISingleInvoiceProps) {
  return (
    <Link href={`/invoices/${id}`}>
      <li>
        <h3>{id}</h3>
        <h4>{clientName}</h4>
        <p>{date.toLocaleDateString()}</p>
        <h3>${total}</h3>
        <h3 className={`status status--${status}`}>{status}</h3>
      </li>
    </Link>
  );
}
