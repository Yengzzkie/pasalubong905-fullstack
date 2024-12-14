import prisma from "@/db/prismaClient";

// get all orders
export async function getOrders() {
  return await prisma.order.findMany({
    include: {
      item: true
    }
  });
}

// create order
export async function createOrder(orderData) {
  try {
    const {
      customerName,
      mobile,
      pickupDate,
      pickupTime,
      downpayment,
      totalBill,
      balance,
      isPaid,
      item,
      additionalComment,
    } = orderData;

    return await prisma.order.create({
      data: {
        customerName,
        mobile,
        pickupDate,
        pickupTime,
        downpayment: parseFloat(downpayment),
        totalBill: parseFloat(totalBill),
        balance,
        isPaid,
        item,
        additionalComment,
      },
    });
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}
