import Cart from "../../components/Order/Cart";
import NavBar from "../../components/NavBar";
import Stock from "@/components/Order/Stock";
import { useState, useEffect } from "react";
import { getProducts } from "@/utilities/products-api";

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
    <div>
      <NavBar user={user} setUser={setUser} />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="flex gap-4 ">
            <Stock products={products} setCart={setCart} cart={cart} />
          </div>
        </div>
        <div className="cols-span-1">
          <Cart setCart={setCart} cart={cart} />
        </div>
      </div>
    </div>
  );
}
