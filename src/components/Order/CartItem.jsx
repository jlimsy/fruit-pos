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
  const handleRemove = (event) => {
    setCart(cart.filter((cartItem) => cartItem.id !== event.id));
    console.log("Remove");
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardHeader>
          <CardTitle>{item.fruit}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          ${Number(item.price).toFixed(2)}
        </CardContent>
        <CardFooter className="py-0">
          <Button onClick={() => handleRemove(item)}>Remove</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
