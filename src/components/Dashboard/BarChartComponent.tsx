"use client"

import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts"

const data = [
  { name: "Jan", amount: 420 },
  { name: "Feb", amount: 380 },
  { name: "Mar", amount: 650 },
  { name: "Apr", amount: 410 },
  { name: "May", amount: 530 },
  { name: "Jun", amount: 720 },
  { name: "Jul", amount: 780 },
  { name: "Aug", amount: 590 },
  { name: "Sep", amount: 860 },
  { name: "Oct", amount: 640 },
  { name: "Nov", amount: 710 },
  { name: "Dec", amount: 920 },
]

const colors = [
  "hsl(221.2 83.2% 53.3%)",
  "hsl(212 95% 68%)",
  "hsl(216 92% 60%)",
  "hsl(210 98% 78%)",
  "hsl(212 97% 87%)",
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-white dark:bg-[#1D2144] p-3 shadow-md border border-gray-200 dark:border-gray-800">
        <p className="font-medium">{label}</p>
        <p className="text-lg font-bold mt-1">${payload[0].value}</p>
      </div>
    )
  }
  return null
}

export function BarChartComponent() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barGap={8}
          barSize={32}
          onMouseMove={(data) => {
            if (data && data.activeTooltipIndex !== undefined) {
              setActiveIndex(data.activeTooltipIndex)
            }
          }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            style={{ fontSize: '12px' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${value}`}
            dx={-10}
          />
          <Tooltip 
            cursor={false}
            content={<CustomTooltip />}
          />
          <Bar 
            dataKey="amount" 
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === activeIndex ? colors[0] : colors[4]}
                style={{
                  filter: index === activeIndex ? 'brightness(105%)' : 'none',
                  transition: 'fill 0.3s ease, filter 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 