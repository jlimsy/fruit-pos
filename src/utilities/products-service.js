import * as productsAPI from "./products-api";

export async function getProducts() {
  return await productsAPI.getProducts();
}

export async function updateInventory(formData) {
  await productsAPI.updateInventory(formData);
}
