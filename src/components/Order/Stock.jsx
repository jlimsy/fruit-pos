import Product from "./Product";

export default function Stock({ products, cart, setCart }) {
  console.log(products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((item) => (
        <Product key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}
