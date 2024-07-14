import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Product({ item, cart, setCart }) {
  const handleCart = (event) => {
    setCart((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === event.id);

      if (itemExists) {
        return prevItems.map((item) =>
          item.id === event.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...event, quantity: 1 }];
      }
    });

    console.log("Add to cart", cart);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.fruit}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          ${Number(item.price).toFixed(2)}
          <span className="text-xs">per piece</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <Button onClick={() => handleCart(item)}>Add to Cart</Button>
          <p className="text-xs mt-2"> {item.stock} in stock</p>
        </div>
      </CardFooter>
    </Card>
  );
}
