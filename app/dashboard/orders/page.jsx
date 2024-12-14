"use client"
import { useEffect, useState } from "react";
import OrderTable from "../../components/OrderTable";
import axios from "axios";
import Loader from "@/app/components/Loader";

const OrdersPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getOrders() {
      setLoading(true);
      try {
        const response = await axios.get("/api/order");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, []);

  return (
    <div className="flex justify-center items-center w-screen overflow-auto">
      {loading ? <Loader /> : <OrderTable data={data} />}
    </div>
  );
};

export default OrdersPage;
