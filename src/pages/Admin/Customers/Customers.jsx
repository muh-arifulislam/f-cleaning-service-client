import React, { useState } from "react";
import CardTableCustomers from "../../../components/Admin/Cards/CardTableCustomers";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      _id: "1",
      name: "John Doe",
      phone: 1234567890,
      email: "john@example.com",
      address: "123 Main Street",
      date: "2023-09-24T12:00:00Z",
    },
    {
      _id: "2",
      name: "Jane Smith",
      phone: 9876543210,
      email: "jane@example.com",
      address: "456 Elm Street",
      date: "2023-09-25T14:30:00Z",
    },
    {
      _id: "3",
      name: "Bob Johnson",
      phone: 5555555555,
      email: "bob@example.com",
      address: "789 Oak Street",
      date: "2023-09-26T10:15:00Z",
    },
    {
      _id: "4",
      name: "Alice Brown",
      phone: 3333333333,
      email: "alice@example.com",
      address: "987 Pine Street",
      date: "2023-09-27T16:45:00Z",
    },
    {
      _id: "5",
      name: "Eva Wilson",
      phone: 7777777777,
      email: "eva@example.com",
      address: "543 Cedar Street",
      date: "2023-09-28T11:30:00Z",
    },
    {
      _id: "6",
      name: "Michael Smith",
      phone: 1111111111,
      email: "michael@example.com",
      address: "654 Birch Street",
      date: "2023-09-29T13:20:00Z",
    },
    {
      _id: "7",
      name: "Sarah Davis",
      phone: 9999999999,
      email: "sarah@example.com",
      address: "234 Willow Street",
      date: "2023-09-30T09:00:00Z",
    },
    {
      _id: "8",
      name: "David Lee",
      phone: 4444444444,
      email: "david@example.com",
      address: "876 Maple Street",
      date: "2023-10-01T15:10:00Z",
    },
    {
      _id: "9",
      name: "Olivia White",
      phone: 8888888888,
      email: "olivia@example.com",
      address: "345 Redwood Street",
      date: "2023-10-02T08:45:00Z",
    },
    {
      _id: "10",
      name: "Daniel Martin",
      phone: 2222222222,
      email: "daniel@example.com",
      address: "765 Sequoia Street",
      date: "2023-10-03T17:00:00Z",
    },
  ]);

  return (
    <>
      <CardTableCustomers customers={customers} setCustomers={setCustomers} />
    </>
  );
};

export default Customers;
