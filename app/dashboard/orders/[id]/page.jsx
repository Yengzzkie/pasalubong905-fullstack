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

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>No order found</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Print content container */}
      <div className="print-content w-full h-full p-4 bg-white text-black font-sans">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold mb-2">Order Details</h1>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="font-semibold">Customer Name:</p>
            <p className="text-right">{data.customerName}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Contact:</p>
            <p className="text-right">{data.mobile}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Total Bill:</p>
            <p className="text-right">${data.totalBill}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Balance:</p>
            <p className="text-right">${data.balance}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Downpayment:</p>
            <p className="text-right">${data.downpayment}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Pick-up Date:</p>
            <p className="text-right">{data.pickupDate}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Pick-up Time:</p>
            <p className="text-right">{data.pickupTime}</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm">Thank you for your order!</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Link href="/dashboard/orders">
          <Button className="p-2 bg-[var(--primary-content)] hover:bg-[var(--primary-dark)] hover:text-[var(--primary-content)] rounded-md m-3">
            Return
          </Button>
        </Link>
        <Button
          onClick={handlePrint}
          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md m-3"
        >
          Print Order
        </Button>
      </div>
    </div>
  );
};

export default OrderDetails;
