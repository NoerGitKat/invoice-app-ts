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
  products: IProduct[];
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

export interface IProduct {
  name: string;
  quantity: number;
  price: number;
}

export enum EPaymentTerm {
  upfront = "Upfront",
  "30 days" = "30 days",
  "60 days" = "60 days",
}

export interface IInvoiceFormData {
  "user-address": string | undefined;
  "user-city": string | undefined;
  "user-postal-code": string | undefined;
  "user-country": string | undefined;
  "client-address": string | undefined;
  "client-name": string | undefined;
  "client-city": string | undefined;
  "client-postal-code": string | undefined;
  "client-country": string | undefined;
  "client-email": string | undefined;
  "invoice-date": Date | undefined;
  "payment-terms": EPaymentTerm | undefined;
  "project-desc": string | undefined;
  products: IProduct[];
}
