import { useState, useEffect } from "react";
import { getMyOrders } from "@/utilities/orders-api";

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

  return <div>OrderHistory</div>;
}
