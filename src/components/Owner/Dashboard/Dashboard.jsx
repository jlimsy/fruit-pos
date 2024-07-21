import DailySalesChart from "./DailySalesChart";
import { useState, useEffect } from "react";
import { getTotalSalesPerDay } from "@/utilities/orders-service";

import debug from "debug";

const log = debug("components:Dashboard");
localStorage.debug = "components:Dashboard";

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

  log("Daily Total %o", dailyTotal);

  const overallSales = dailyTotal.reduce(
    (acc, curr) => {
      const revenuePerDay = parseFloat(curr.totalPricePerDay.$numberDecimal);

      console.log(curr.totalPricePerDay.$numberDecimal);
      const quantityPerDay = curr.quantityProductsPerDay;

      acc.overallRevenue += revenuePerDay;
      acc.overallProducts += quantityPerDay;

      return acc;
    },
    {
      overallRevenue: 0,
      overallProducts: 0,
    }
  );

  log("Overall Sales %o", overallSales);

  return (
    <div className="grid lg:grid-cols-3 justify-center gap-4 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Overall Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-around gap-4">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl">${overallSales.overallRevenue}</h1>
              <span className="text-primary font-bold">total revenue</span>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl">{overallSales.overallProducts}</h1>
              <span className="text-primary font-bold">total fruits sold</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="min-w-[400px]">
        <CardHeader>
          <CardTitle>Daily Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <DailySalesChart dailyTotal={dailyTotal} />
        </CardContent>
      </Card>
    </div>
  );
}
