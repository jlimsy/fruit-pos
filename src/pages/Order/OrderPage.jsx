import Cart from "../../components/Order/Cart";
import NavBar from "../../components/NavBar";
import Stock from "@/components/Order/Stock";
import { useState, useEffect } from "react";
import { getProducts } from "@/utilities/products-api";
import AuthenticatedLayout from "@/layout/AuthenticatedLayout";

export default function OrderPage({ user, setUser }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        console.log("Products:", products);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <div className="col-span-2">
        <div className="flex gap-4 ">
          <Stock products={products} setCart={setCart} cart={cart} />
        </div>
      </div>
      <div className="cols-span-1">
        <Cart setCart={setCart} cart={cart} />
      </div>
    </div>
  );
}
