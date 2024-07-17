import { useState, useEffect } from "react";
import { getMyOrders } from "@/utilities/orders-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OrderHistoryPage() {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const myOrders = await getMyOrders();
        console.log("Products:", myOrders);
        setMyOrders(myOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchMyOrders();
  }, []);

  console.log("myOrders:", myOrders);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>My Order History</h1>
      {myOrders.map((order) => (
        <Card key={order._id}>
          <CardHeader>
            <CardTitle>{order.createdAt}</CardTitle>
            <CardDescription>Order #: {order._id}</CardDescription>
          </CardHeader>
          <CardContent>
            {order.items.map((item) => (
              <div key={item._id}>
                <p>{item._id}</p>
                <p>{item.quantity}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <div>
                <p>
                  Status: <span>{order.status}</span>
                </p>
              </div>
              <div>
                {" "}
                <p>Total Price: </p>
                <h1>${Number(order.totalPrice).toFixed(2)}</h1>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
