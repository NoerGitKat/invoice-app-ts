import { GetStaticPaths, GetStaticProps } from "next";
import { useCallback } from "react";
import { DetailsContent, DetailsHeader } from "../../components/invoice";
import { invoices } from "../../data";
import { IInvoice } from "../../interfaces";
import styles from "./InvoiceDetails.module.scss";

export interface IInvoiceDetailsProps {
  invoice: IInvoice;
}

export default function InvoiceDetails({ invoice }: IInvoiceDetailsProps) {
  const calcGrandTotal = useCallback(
    () => invoice.products.reduce((total, product) => total + product.price * product.quantity, 0),
    [invoice.products],
  );

  return (
    <main className={styles.main}>
      <DetailsHeader status={invoice.status} />
      <DetailsContent invoice={invoice} />
      <article className={styles.total}>
        <h4>Grand Total</h4>
        <p>${calcGrandTotal()}</p>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = invoices.map((invoice) => ({ params: { id: invoice.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const filteredInvoice = params && invoices.find((invoice) => invoice.id === params.id);

  return {
    props: {
      invoice: JSON.parse(JSON.stringify(filteredInvoice)) || {},
    },
  };
};
