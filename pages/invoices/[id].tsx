import { useRouter } from "next/router";

export default function InvoiceDetails() {
  const { query } = useRouter();

  return (
    <main>
      <h2>Invoice Details {query.id}</h2>
    </main>
  );
}
