"use client"

import React from "react"
import { 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid,
  Legend,
  TooltipProps
} from "recharts"
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent"

// Data for stablecoin payments over time
const chartData = [
  {
    name: "Jan",
    USDC: 4200,
    USDT: 3150,
    DAI: 800,
    BUSD: 350,
  },
  {
    name: "Feb",
    USDC: 4800,
    USDT: 3400,
    DAI: 920,
    BUSD: 380,
  },
  {
    name: "Mar",
    USDC: 5600,
    USDT: 3700,
    DAI: 1050,
    BUSD: 450,
  },
  {
    name: "Apr",
    USDC: 6200,
    USDT: 4100,
    DAI: 1200,
    BUSD: 520,
  },
  {
    name: "May",
    USDC: 7800,
    USDT: 4300,
    DAI: 1350,
    BUSD: 580,
  },
  {
    name: "Jun",
    USDC: 8500,
    USDT: 4800,
    DAI: 1500,
    BUSD: 650,
  },
]

interface PayloadItem {
  name: string;
  value: number;
  color: string;
}

// Custom tooltip to show currency formatting
const CustomTooltip = ({ 
  active, 
  payload, 
  label 
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <p className="mb-2 font-medium text-gray-900 dark:text-gray-100">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center py-1">
            <div 
              className="mr-2 h-3 w-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm flex justify-between w-full">
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              <span className="ml-2 text-gray-900 dark:text-gray-100">
                ${entry.value.toLocaleString()}
              </span>
            </p>
          </div>
        ))}
        <p className="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Stablecoin payments for {label}
        </p>
      </div>
    )
  }
  return null
}

export function ModernTuitionChart() {
  return (
    <div className="mb-5 text-center">
      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        Stablecoin Payment Volume
      </h3>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Distribution of payments by stablecoin type over time
      </p>
      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.15} />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#4B5563', opacity: 0.3 }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#4B5563', opacity: 0.3 }} 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={(props) => <CustomTooltip {...props} />} />
            <Legend 
              wrapperStyle={{ paddingTop: 15 }}
              formatter={(value) => <span className="text-gray-900 dark:text-white font-medium">{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="USDC"
              stroke="#2775CA"
              strokeWidth={3}
              dot={{ stroke: '#2775CA', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 8, fill: '#2775CA', opacity: 0.8 }}
            />
            <Line
              type="monotone"
              dataKey="USDT"
              stroke="#26A17B"
              strokeWidth={3}
              dot={{ stroke: '#26A17B', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 8, fill: '#26A17B', opacity: 0.8 }}
            />
            <Line
              type="monotone"
              dataKey="DAI"
              stroke="#F5AC37"
              strokeWidth={3}
              dot={{ stroke: '#F5AC37', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 8, fill: '#F5AC37', opacity: 0.8 }}
            />
            <Line
              type="monotone"
              dataKey="BUSD"
              stroke="#F0B90B"
              strokeWidth={3}
              dot={{ stroke: '#F0B90B', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 8, fill: '#F0B90B', opacity: 0.8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 