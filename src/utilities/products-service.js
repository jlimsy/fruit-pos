import * as productsAPI from "./products-api";

export async function updateInventory(formData) {
  await productsAPI.updateInventory(formData);
}
