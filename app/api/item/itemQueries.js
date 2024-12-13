import prisma from "@/db/prismaClient";

export async function getItems() {
  return await prisma.item.findMany();
}

export async function createItem(itemData) {
  const { itemName, price } = itemData;

  return await prisma.item.create({
    data: {
      itemName,
      price,
    },
  });
}
