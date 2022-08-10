export enum EStatus {
  Paid = "paid",
  Pending = "pending",
  Draft = "draft",
}

export interface IInvoice {
  id: string;
  name: string;
  date: Date;
  total: number;
  status: EStatus;
}
