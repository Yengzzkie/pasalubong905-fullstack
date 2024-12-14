import prisma from "@/db/prismaClient";

export async function getOrders() {
  return await prisma.order.findMany();
}

export async function createOrder(orderData) {
  try {
    const {
      customerName,
      mobile,
      pickupDate,
      downpayment,
      totalBill,
      isPaid,
      item,
      additionalComment,
    } = orderData;

    return await prisma.order.create({
      data: {
        customerName,
        mobile,
        pickupDate,
        downpayment: parseFloat(downpayment),
        totalBill: parseFloat(totalBill),
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
