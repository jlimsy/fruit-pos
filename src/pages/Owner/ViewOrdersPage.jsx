import { useEffect } from "react";
import { getAllOrders } from "@/utilities/orders-service";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import dayjs from "dayjs";

export default function ViewOrdersPage() {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getAllOrders();
        setAllOrders(orders);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
  }, []);

  console.log(allOrders);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <h1>View All Orders</h1>
      </div>
      <div>
        <Table className="w-full max-w-md whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Fruits</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Deliver</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allOrders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>
                  {dayjs(order.createdAt).format("DD MMM YYYY HH:mm")}
                </TableCell>
                <TableCell>
                  {order.items.map((item) => (
                    <div key={item._id}>
                      <p>
                        {item.fruit.fruit} x {item.quantity}
                      </p>
                    </div>
                  ))}
                </TableCell>
                <TableCell>${Number(order.totalPrice).toFixed(2)}</TableCell>{" "}
                <TableCell>{order.user.name}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
