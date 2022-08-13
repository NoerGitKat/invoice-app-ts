import { EStatus } from "../interfaces";

// Mock data
export const invoices = [
  {
    createdAt: "yesterday",
    id: "DE21BS",
    clientName: "Avatar Aang",
    date: new Date(),
    total: 500,
    status: EStatus.Paid,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    products: [
      {
        name: "Web Development",
        quantity: 4,
        price: 200,
      },
      {
        name: "Consulting",
        quantity: 10,
        price: 100,
      },
    ],
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
    createdAt: "yesterday",
    id: "F52AC2",
    clientName: "NoerGitKat",
    date: new Date(),
    total: 869,
    status: EStatus.Pending,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    products: [
      {
        name: "Web Development",
        quantity: 4,
        price: 200,
      },
      {
        name: "Consulting",
        quantity: 1,
        price: 100,
      },
    ],
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
    createdAt: "yesterday",
    id: "53SFV5",
    clientName: "Mapi",
    date: new Date(),
    total: 200,
    status: EStatus.Draft,
    clientEmail: "anon@gmail.com",
    paymentDue: "paymentDue",
    description: "description",
    products: [
      {
        name: "Web Development",
        quantity: 8,
        price: 200,
      },
      {
        name: "Consulting",
        quantity: 4,
        price: 100,
      },
    ],
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
