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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Payment chart data representing different payment categories
const chartData = [
  { category: "tuition", amount: 3800, fill: "var(--color-tuition)" },
  { category: "housing", amount: 1500, fill: "var(--color-housing)" },
  { category: "books", amount: 500, fill: "var(--color-books)" },
  { category: "activities", amount: 450, fill: "var(--color-activities)" },
  { category: "other", amount: 300, fill: "var(--color-other)" },
]

// Chart configuration with colors that match our theme
const chartConfig = {
  amount: {
    label: "Amount",
  },
  tuition: {
    label: "Tuition Fees",
    color: "hsl(225, 91%, 63%)", // primary blue color
  },
  housing: {
    label: "Housing",
    color: "hsl(250, 91%, 73%)",
  },
  books: {
    label: "Books & Supplies",
    color: "hsl(200, 91%, 63%)",
  },
  activities: {
    label: "Activities & Sports",
    color: "hsl(175, 91%, 63%)",
  },
  other: {
    label: "Other Fees",
    color: "hsl(150, 91%, 63%)",
  },
} satisfies ChartConfig

export function PaymentChart() {
  // Calculate total payments
  const totalPayments = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  // Format as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Payment Distribution</CardTitle>
        <CardDescription>Academic Year 2023-2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel formatter={(value) => formatCurrency(value)} />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-black text-3xl font-bold dark:fill-white"
                        >
                          {formatCurrency(totalPayments)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-body-color dark:fill-body-color-dark"
                        >
                          Total Payments
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pt-4">
        <div className="flex items-center gap-2 font-medium leading-none text-black dark:text-white">
          Payments complete for current semester <TrendingUp className="h-4 w-4 text-primary" />
        </div>
        <div className="leading-none text-body-color dark:text-body-color-dark">
          Distribution of all educational expenses
        </div>
      </CardFooter>
    </Card>
  )
} 