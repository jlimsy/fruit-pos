import DailySalesChart from "./DailySalesChart";
import { useState, useEffect } from "react";
import { getFruitsPerDay } from "@/utilities/orders-service";

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
import ByFruitChart from "./ByFruitChart";

export default function Dashboard() {
  const [dailyFruits, setDailyFruits] = useState([]);

  useEffect(() => {
    const fetchDailyTotalByFruits = async () => {
      try {
        const daily = await getFruitsPerDay();
        setDailyFruits(daily);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDailyTotalByFruits();
  }, []);

  log("Daily Fruits %o", dailyFruits);

  const salesByDay = [];

  dailyFruits.forEach((day) => {
    const overallRevenue = day.fruitSales.reduce((acc, curr) => {
      const revenuePerDay = parseFloat(
        curr.totalPricePerProduct.$numberDecimal
      );
      console.log("Revenue per day %o", revenuePerDay);
      acc += revenuePerDay;
      console.log("acc %o", acc);
      return acc;
    }, 0);

    const overallProducts = day.fruitSales.reduce((acc, curr) => {
      const productsPerDay = curr.totalQuantity;

      acc += productsPerDay;
      console.log("acc %o", acc);
      return acc;
    }, 0);

    salesByDay.push({ date: day._id, overallRevenue, overallProducts });
  });

  log("DailyRevenue %o", salesByDay);

  const overallDailySales = salesByDay.reduce(
    (acc, curr) => {
      acc.overallRevenue += curr.overallRevenue;
      acc.overallProducts += curr.overallProducts;

      return acc;
    },
    { overallRevenue: 0, overallProducts: 0 }
  );

  log("overallRevenue %o", overallDailySales);

  return (
    <div className="grid lg:grid-cols-3 justify-center gap-4 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Overall Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-around gap-4">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl">${overallDailySales.overallRevenue}</h1>
              <span className="text-primary font-bold">total revenue</span>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="text-7xl">{overallDailySales.overallProducts}</h1>
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
          <DailySalesChart salesByDay={salesByDay} />
        </CardContent>
      </Card>

      <Card className="min-w-[400px]">
        <CardHeader>
          <CardTitle>Sales By Fruit</CardTitle>
        </CardHeader>
        <CardContent>
          <ByFruitChart dailyFruits={dailyFruits} />
        </CardContent>
      </Card>
    </div>
  );
}
