import prisma from "@/db/prismaClient";

export async function getOrderDetails(id) {
    return await prisma.order.findUnique({
        where: {
            id,
        }
    })
}