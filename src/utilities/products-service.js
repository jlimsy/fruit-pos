import * as productsAPI from "./products-api";

export async function getProducts() {
  return await productsAPI.getProducts();
}

export async function updateInventory(formData) {
  return await productsAPI.updateInventory(formData);
}
