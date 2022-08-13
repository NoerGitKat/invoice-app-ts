import { GetStaticPaths, GetStaticProps } from "next";
import { DetailsContent, DetailsHeader } from "../../components/invoice";
import { invoices } from "../../data";
import { IInvoice } from "../../interfaces";
import styles from "./InvoiceDetails.module.scss";

export interface IInvoiceDetailsProps {
  invoice: IInvoice;
}

export default function InvoiceDetails({ invoice }: IInvoiceDetailsProps) {
  return (
    <main className={styles.main}>
      <DetailsHeader status={invoice.status} />
      <DetailsContent invoice={invoice} />
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
