import prisma from "@/db/prismaClient";

export async function getOrders() {
    return await prisma.order.findMany();
}

export async function createOrder(orderData) {
    const { customerName, mobile, pickupDate, downpayment, item } = orderData;

    return await prisma.order.create({
        customerName,
        mobile,
        pickupDate,
        downpayment, 
        item
    })
}