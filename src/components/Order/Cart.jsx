import { Button } from "../ui/button";
import CartItem from "./CartItem";

export default function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
      <div className="p-2 px-8 flex justify-between text-xl font-bold">
        <div>Total</div>
        <div>${Number(totalPrice).toFixed(2)}</div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}
