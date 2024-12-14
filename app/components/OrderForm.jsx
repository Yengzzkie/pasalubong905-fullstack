"use client";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    pickupDate: "",
    downpayment: 0,
    balance: 0,
    totalBill: 0,
    isPaid: false,
    additionalComment: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const balance = formData.isPaid ? 0 : formData.totalBill - formData.downpayment;
  
    const pickupDateObj = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
    const formattedPickupDate = pickupDateObj.toLocaleDateString("en-US", { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
    
    const formattedPickupTime = pickupDateObj.toLocaleTimeString("en-US", { 
      hour: "2-digit", 
      minute: "2-digit", 
      hour12: true 
    });
  
    const response = await axios.post("/api/order", {
      ...formData,
      totalBill: formData.isPaid ? 0 : formData.totalBill, 
      downpayment: formData.isPaid ? 0 : formData.downpayment, 
      balance: balance.toFixed(2),
      pickupDate: formattedPickupDate,
      pickupTime: formattedPickupTime,
    });
  
    if (response.status === 201) {
      setLoading(false);
      alert("Order submitted successfully!");
      setFormData({
        customerName: "",
        mobile: "",
        pickupDate: "",
        pickupTime: "",
        downpayment: 0,
        balance: 0,
        totalBill: 0,
        isPaid: false,
        additionalComment: "",
      });
    } else {
      alert("Failed to submit the order.");
    }
  };
  
  return (
    <div className="max-w-xl mx-auto bg-[var(--primary-light)] p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-[var(--primary-content)] mb-4">
        Place an Order
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[var(--primary-content)]">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Mobile <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">
            Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Pickup Time <span className="text-red-500">*</span></label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">
            Total Bill <span className="text-red-500">*</span>
          </label>
          <input
            disabled={formData.isPaid}
            type="number"
            name="totalBill"
            value={formData.isPaid ? "" : formData.totalBill}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">
            Downpayment
          </label>
          <input
            disabled={formData.isPaid}
            type="number"
            name="downpayment"
            value={formData.isPaid ? "" : formData.downpayment}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Balance</label>
          <input
            disabled
            type="number"
            name="balance"
            value={formData.isPaid ? "" : (formData.totalBill - formData.downpayment).toFixed(2)}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isPaid"
            checked={formData.isPaid}
            onChange={handleChange}
            className="text-primary focus:ring-primary"
          />
          <label className="text-[var(--primary-content)]">Fully Paid</label>
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">
            Orders
          </label>
          <textarea
            name="additionalComment"
            value={formData.additionalComment}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex justify-center w-full bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-[var(--secondary-content)] py-2 rounded-md hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-secondary-light"
        >
          {loading ? <Loader /> : "Submit Order"}
        </button>
      </form>
    </div>
  );
}
