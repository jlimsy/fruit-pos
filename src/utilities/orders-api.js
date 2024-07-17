const BASE_URL = "/api/orders";

export async function placeOrder(orderData) {
  console.log(orderData, "orderData order-api");
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to place order");
  }
}
