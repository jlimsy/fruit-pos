import * as ordersAPI from "./orders-api";

export async function placeOrder(orderData) {
  const updatedOrder = await ordersAPI.placeOrder(orderData);
  return updatedOrder;
}

export async function getAllOrders() {
  const orders = await ordersAPI.getAllOrders();
  return orders;
}

export async function getTotalSalesPerDay() {
  const totalSalesPerDay = await ordersAPI.getTotalSalesPerDay();
  return totalSalesPerDay;
}
