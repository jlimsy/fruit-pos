import DailySalesChart from "./DailySalesChart";
import { useState, useEffect } from "react";
import { getTotalSalesPerDay } from "@/utilities/orders-service";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const [dailyTotal, setDailyTotal] = useState([]);

  useEffect(() => {
    const fetchDailyTotal = async () => {
      try {
        const daily = await getTotalSalesPerDay();
        setDailyTotal(daily);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDailyTotal();
  }, []);

  return (
    <div className="grid justify-center">
      <Card className="max-w-[400px]">
        <CardHeader>
          <CardTitle>Daily Sales</CardTitle>
        </CardHeader>{" "}
        <CardContent>
          <DailySalesChart dailyTotal={dailyTotal} />
        </CardContent>
      </Card>
    </div>
  );
}
