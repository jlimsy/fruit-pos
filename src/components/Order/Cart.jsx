import { Button } from "../ui/button";
import CartItem from "./CartItem";
import * as ordersService from "@/utilities/orders-service";

export default function Cart({ user, cart, setCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const transformedCartData = cart.map((item) => {
      return {
        fruit: item._id,
        quantity: item.quantity,
      };
    });

    console.log("transformedCartData", transformedCartData);

    const orderData = {
      items: transformedCartData,
      totalPrice: totalPrice,
    };

    console.log("orderData", orderData);

    await ordersService.placeOrder(orderData);
  };

  return (
    <div className="flex flex-col gap-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
      <div className="p-2 px-8 flex justify-between text-xl font-bold">
        <div>Total</div>
        <div>${Number(totalPrice).toFixed(2)}</div>
      </div>
      <Button onClick={() => handleOrder(cart)}>Checkout</Button>
    </div>
  );
}
