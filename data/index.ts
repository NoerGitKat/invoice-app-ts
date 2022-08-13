import { EStatus } from "../interfaces";

// Mock data
export const invoices = [
  {
    createdAt: "yesterday",
    id: "DE21BS",
    clientNamme: "Avatar Aang",
    date: new Date(),
    total: 500,
    status: EStatus.Paid,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    clientAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
    senderAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
  },
  {
    id: "F52AC2",
    clientNamme: "NoerGitKat",
    date: new Date(),
    total: 869,
    status: EStatus.Pending,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    clientAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
    senderAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
  },
  {
    id: "53SFV5",
    clientNamme: "Mapi",
    date: new Date(),
    total: 200,
    status: EStatus.Draft,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    clientAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
    senderAddress: {
      street: "street",
      city: "city",
      postalCode: "postalCode",
      country: "country",
    },
  },
];
