import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string): Promise<number> => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
          variation: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      if (!item.variation) {
        console.warn(`Missing variation for order item ${item.id}`);
        return orderSum;
      }
      return orderSum + item.variation.price;
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
