import Product from "./Product";

export default function Stock({ products }) {
  console.log(products);

  return (
    <>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </>
  );
}
