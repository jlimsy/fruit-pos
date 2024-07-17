import sendRequest from "./send-request";

import debug from "debug";
const log = debug("utilities:products-api");

const BASE_URL = "/api/products";

export async function getProducts() {
  const res = await sendRequest(BASE_URL, "GET");
  log("res %o", res);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve products");
  }
}

export async function updateInventory(productData) {
  const res = await sendRequest(BASE_URL, "POST", productData);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid inventory update");
  }
}
