export enum EStatus {
  Paid = "paid",
  Pending = "pending",
  Draft = "draft",
}

export interface IInvoice {
  createdAt: string;
  id: string;
  clientName: string;
  clientEmail: string;
  date: Date;
  total: number;
  status: EStatus;
  paymentDue: string;
  description?: string;
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
  clientAddress: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  senderAddress: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
}
