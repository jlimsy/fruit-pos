import * as ordersAPI from "./orders-api";

export async function placeOrder(orderData) {
  return await ordersAPI.placeOrder(orderData);
}
