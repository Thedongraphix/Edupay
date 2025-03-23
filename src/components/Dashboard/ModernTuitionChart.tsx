"use client"

import * as React from "react"
import { 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts"

// Data for the tuition breakdown over time
const chartData = [
  {
    month: "Jan",
    coreTuition: 950,
    technologyFee: 125,
    libraryFee: 50,
    registrationFee: 38,
    studentServices: 30,
  },
  {
    month: "Feb",
    coreTuition: 970,
    technologyFee: 130,
    libraryFee: 55,
    registrationFee: 40,
    studentServices: 32,
  },
  {
    month: "Mar",
    coreTuition: 1050,
    technologyFee: 145,
    libraryFee: 70,
    registrationFee: 48,
    studentServices: 36,
  },
  {
    month: "Apr",
    coreTuition: 1100,
    technologyFee: 170,
    libraryFee: 85,
    registrationFee: 58,
    studentServices: 42,
  },
  {
    month: "May",
    coreTuition: 1200,
    technologyFee: 250,
    libraryFee: 120,
    registrationFee: 90,
    studentServices: 60,
  },
  {
    month: "Jun",
    coreTuition: 1300,
    technologyFee: 280,
    libraryFee: 140,
    registrationFee: 100,
    studentServices: 70,
  },
]

// Custom tooltip to show values in currency format
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-md dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-2 font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-sm">
              <span className="font-medium">{entry.name}: </span>
              <span>${entry.value}</span>
            </p>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function ModernTuitionChart() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">Tuition Analysis</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Monthly breakdown of tuition components</p>
      </div>
      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
            <XAxis 
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={8} />
            <Line
              type="monotone"
              dataKey="coreTuition"
              stroke="hsl(221.2 83.2% 53.3%)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Core Tuition"
            />
            <Line
              type="monotone"
              dataKey="technologyFee"
              stroke="hsl(212 95% 68%)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Technology Fee"
            />
            <Line
              type="monotone"
              dataKey="libraryFee"
              stroke="hsl(216 92% 60%)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Library Fee"
            />
            <Line
              type="monotone"
              dataKey="registrationFee"
              stroke="hsl(210 98% 78%)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Registration Fee"
            />
            <Line
              type="monotone"
              dataKey="studentServices"
              stroke="hsl(212 97% 87%)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Student Services"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 