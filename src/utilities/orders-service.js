import * as ordersAPI from "./orders-api";

export async function placeOrder(orderData) {
  const updatedOrder = await ordersAPI.placeOrder(orderData);
  return updatedOrder;
}
