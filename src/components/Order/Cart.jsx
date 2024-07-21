import { Button } from "../ui/button";
import CartItem from "./CartItem";
import { placeOrder } from "@/utilities/orders-service";
import { useToast } from "@/components/ui/use-toast";
import dayjs from "dayjs";

export default function Cart({ user, cart, setCart }) {
  const { toast } = useToast();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckOut = async () => {
    const transformedCartData = cart.map((item) => {
      return {
        fruit: item._id,
        quantity: item.quantity,
      };
    });

    const orderData = {
      items: transformedCartData,
      totalPrice: totalPrice,
    };

    await placeOrder(orderData);

    console.log("orderData", orderData);

    setCart([]);

    toast({
      title: "Order Successfully Placed",
      description: dayjs(new Date().toISOString()).format("DD-MMM-YYYY HH:mm"),
    });
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-center">Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
      <div className="p-2 px-8 flex justify-between text-xl font-bold">
        <div>Total</div>
        <div>${Number(totalPrice).toFixed(2)}</div>
      </div>
      <Button onClick={() => handleCheckOut(cart)}>Checkout</Button>
    </div>
  );
}
