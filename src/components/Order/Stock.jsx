import Product from "./Product";

export default function Stock({ products, cart, setCart }) {
  console.log(products);

  return (
    <>
      {products.map((item) => (
        <Product key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </>
  );
}
