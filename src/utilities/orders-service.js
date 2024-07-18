import * as ordersAPI from "./orders-api";

export async function placeOrder(orderData) {
  const updatedOrder = await ordersAPI.placeOrder(orderData);
  return updatedOrder;
}

export async function getAllOrders() {
  const updatedOrder = await ordersAPI.getAllOrders();
  return updatedOrder;
}
