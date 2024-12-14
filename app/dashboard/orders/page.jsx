"use client"
import { useEffect, useState } from "react";
import OrderTable from "../../components/OrderTable";
import axios from "axios";

const OrdersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await axios.get("http://localhost:3000/api/order");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    getOrders();
  }, []);

  return (
    <div className="w-screen overflow-auto">
      <OrderTable data={data} />
    </div>
  );
};

export default OrdersPage;
