"use client"
import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    pickupDate: '',
    downpayment: 0,
    balance: 0,
    totalBill: 0,
    isPaid: false,
    additionalComment: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        pickupDate: new Date(formData.pickupDate).toISOString(),
      }),
    });

    if (response.ok) {
      alert('Order submitted successfully!');
      setFormData({
        customerName: '',
        mobile: '',
        pickupDate: '',
        downpayment: 0,
        totalBill: parseFloat(0),
        isPaid: false,
        additionalComment: '',
      });
    } else {
      alert('Failed to submit the order.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-[var(--primary-light)] p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-[var(--primary-content)] mb-4">Place an Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[var(--primary-content)]">Customer Name</label>
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
          <label className="block text-[var(--primary-content)]">Mobile</label>
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
          <label className="block text-[var(--primary-content)]">Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        {/* <div>
          <label className="block text-[var(--primary-content)]">Pickup Time</label>
          <input
            type="time"
            name="pickupDate"
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div> */}

        <div>
          <label className="block text-[var(--primary-content)]">Downpayment</label>
          <input
            type="number"
            name="downpayment"
            value={formData.downpayment}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Balance</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Total Bill</label>
          <input
            type="number"
            name="totalBill"
            value={formData.totalBill}
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
          <label className="text-[var(--primary-content)]">Is Paid</label>
        </div>

        <div>
          <label className="block text-[var(--primary-content)]">Additional Comment</label>
          <textarea
            name="additionalComment"
            value={formData.additionalComment}
            onChange={handleChange}
            className="w-full p-2 border border-[var(--primary-dark)] rounded-md focus:outline-none focus:ring focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-[var(--secondary-content)] py-2 rounded-md hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-secondary-light"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}