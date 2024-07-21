import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import debug from "debug";

const log = debug("components:DailySalesChart");
localStorage.debug = "components:DailySalesChart";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  totalDailyPrice: {
    label: "totalDailyPrice",
    color: "hsl(var(--chart-1))",
  },
};

export default function DailySalesChart({ salesByDay }) {
  log("salesByDay %o", salesByDay);

  const chartData = salesByDay.map((item) => ({
    date: item.date,
    totalDailyPrice: item.overallRevenue,
  }));

  log("chartData %o", chartData);

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="max-h-[400px] max-w-[400px]"
      >
        <AreaChart accessibilityLayer data={chartData}>
          <YAxis dataKey="totalDailyPrice" tickLine={false} axisLine={false} />

          <XAxis dataKey="date" tickLine={false} axisLine={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="totalDailyPrice"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-1))"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
