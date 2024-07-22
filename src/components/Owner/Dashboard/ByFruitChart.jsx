import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getProducts } from "@/utilities/products-service";
import dayjs from "dayjs";

import debug from "debug";
import { useEffect, useState } from "react";

const log = debug("components:ByFruitChart");
localStorage.debug = "components:ByFruitChart";

export default function ByFruitChart({ dailyFruits }) {
  const [fruitNames, setFruitNames] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        log("products %o", products);
        const fruitNames = products.map((fruit) => fruit.fruit);
        setFruitNames(fruitNames);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  log("dailyFruits %o", dailyFruits);

  const chartData = dailyFruits.map((day) => {
    const fruitSales = day.fruitSales?.reduce((acc, curr) => {
      acc[curr.productName] = curr.totalQuantity;

      return acc;
    }, {});

    return {
      day: dayjs(day._id).format("MMM-DD"),
      ...fruitSales,
    };
  });

  log("chartData %o", chartData);
  log("fruitNames %o", fruitNames);

  const chartConfig = fruitNames.reduce((acc, curr, idx) => {
    acc[curr] = {
      label: curr,
      color: `hsl(var(--chart-${idx + 1}))`,
    };

    return acc;
  }, {});

  log("chartConfig %o", chartConfig);

  return (
    <div>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />
          {fruitNames.map((fruit, idx) => (
            <Bar
              key={fruit}
              stackId="a"
              dataKey={fruit}
              fill={`hsl(var(--chart-${idx + 1}))`}
            />
          ))}
        </BarChart>
      </ChartContainer>
    </div>
  );
}
