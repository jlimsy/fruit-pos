import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartItem({ item, cart, setCart }) {
  const handleAdd = (event) => {
    setCart((prevItems) => {
      console.log("prevItems, prevItems", prevItems);
      return prevItems.map((item) =>
        item.id === event.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleMinus = (event) => {
    setCart((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === event.id ? { ...item, quantity: item.quantity - 1 } : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  const handleRemove = (event) => {
    setCart(cart.filter((cartItem) => cartItem.id !== event.id));
    console.log("Remove");
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardHeader className="text-left">
          <CardTitle>{item.fruit}</CardTitle>
          <div className="flex">
            <CardDescription>
              <span className="mr-2">Quantity: {item.quantity}</span>
              <Button className="h-3 p-3 mr-1" onClick={() => handleAdd(item)}>
                +
              </Button>
              <Button className="h-3 p-3" onClick={() => handleMinus(item)}>
                -
              </Button>
            </CardDescription>{" "}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          ${Number(item.price * item.quantity).toFixed(2)}
        </CardContent>
        <CardFooter className="py-0">
          <Button onClick={() => handleRemove(item)}>Remove</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
