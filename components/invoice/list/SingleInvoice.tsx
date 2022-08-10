import Link from "next/link";
import { EStatus } from "../../../interfaces";

export interface ISingleInvoiceProps {
  id: string;
  name: string;
  date: Date;
  total: number;
  status: EStatus;
}

export default function SingleInvoice({ id, name, date, total, status }: ISingleInvoiceProps) {
  return (
    <Link href={`/invoice/${id}`}>
      <li>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{date.toLocaleDateString()}</h3>
        <h3>${total}</h3>
        <h3>{status}</h3>
      </li>
    </Link>
  );
}
