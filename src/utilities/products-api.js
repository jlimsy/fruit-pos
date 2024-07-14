const BASE_URL = "/api/products";

export async function updateInventory(productData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid inventory update");
  }
}
