import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [invoiceDate, setInvoiceDate] = useState("");

  useEffect(() => {
    const dateString = date.toLocaleDateString();
    setInvoiceDate(dateString);
  }, [date]);

  return (
    <Link href={`/invoices/${id}`}>
      <li>
        <h3>{id}</h3>
        <h4>{clientName}</h4>
        <p>{invoiceDate}</p>
        <h3>${total}</h3>
        <h3 className={`status status--${status}`}>{status}</h3>
      </li>
    </Link>
  );
}
