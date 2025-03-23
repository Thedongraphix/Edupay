"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  Chart,
  ChartTooltip,
} from "@/components/ui/chart"

import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

// Payment chart data representing different tuition payment categories
const chartData = [
  { category: "tuitionCore", amount: 3800, fill: "var(--color-tuition)" },
  { category: "technologyFee", amount: 500, fill: "var(--color-tech)" },
  { category: "libraryFee", amount: 200, fill: "var(--color-library)" },
  { category: "registrationFee", amount: 150, fill: "var(--color-registration)" },
]

// Chart configuration with colors that match our theme
const chartConfig = {
  amount: {
    label: "Amount",
  },
  tuitionCore: {
    label: "Core Tuition",
    color: "hsl(225, 91%, 63%)", // primary blue color
  },
  technologyFee: {
    label: "Technology Fee",
    color: "hsl(250, 91%, 73%)",
  },
  libraryFee: {
    label: "Library Fee",
    color: "hsl(200, 91%, 63%)",
  },
  registrationFee: {
    label: "Registration Fee",
    color: "hsl(175, 91%, 63%)",
  },
} satisfies ChartConfig

// CustomTooltip component for the chart
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-white dark:bg-[#1D2144] p-3 shadow-md border border-gray-100 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300 mb-1">{label}</p>
        <p className="text-lg font-semibold text-primary">
          ${payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// Format number as currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function PaymentChart() {
  // Use useMemo to initialize chart data
  const chartData = React.useMemo(() => [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
  ], []);

  // Calculate total amount
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.uv, 0);
  }, [chartData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Trends</CardTitle>
        <CardDescription>Monthly payment volumes over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Chart className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="uv"
                  name="Transaction Volume"
                  stroke="#8884d8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Chart>
        </div>
      </CardContent>
    </Card>
  )
} 