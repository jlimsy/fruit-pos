import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export async function placeOrder(orderData) {
  const res = await sendRequest(BASE_URL, "POST", orderData);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to place order");
  }
}

export async function getMyOrders() {
  const res = await sendRequest(BASE_URL, "GET");

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve orders");
  }
}
