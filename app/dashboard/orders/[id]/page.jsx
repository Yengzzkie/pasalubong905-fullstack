"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import { Button } from "@material-tailwind/react";

const OrderDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getOrder() {
      setLoading(true);
      try {
        const response = await axios.get(`/api/order/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getOrder();
    }
  }, [id]); 

  if (loading) {
    return <Loader />
  }

  if (!data) {
    return <div>No order found</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {id}</p>
      <p>Customer Name: {data.customerName}</p>
      <p>Total Bill: ${data.totalBill}</p>

      <Link href="/dashboard/orders"><Button className="p-2 bg-[var(--primary-content)] hover:bg-[var(--primary-dark)] hover:text-[var(--primary-content)] rounded-md m-3">Return</Button></Link>
    </div>
  );
};

export default OrderDetails;
