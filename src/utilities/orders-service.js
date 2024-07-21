import * as ordersAPI from "./orders-api";

export async function placeOrder(orderData) {
  const updatedOrder = await ordersAPI.placeOrder(orderData);
  return updatedOrder;
}

export async function getAllOrders() {
  const orders = await ordersAPI.getAllOrders();
  return orders;
}

export async function getFruitsPerDay() {
  const dailyFruits = await ordersAPI.getFruitsPerDay();
  return dailyFruits;
}
