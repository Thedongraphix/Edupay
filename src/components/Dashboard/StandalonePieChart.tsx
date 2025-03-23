"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts"

const data = [
  { name: "Core Tuition", value: 1200, fill: "hsl(221.2 83.2% 53.3%)" },
  { name: "Technology Fee", value: 250, fill: "hsl(212 95% 68%)" },
  { name: "Library Fee", value: 120, fill: "hsl(216 92% 60%)" },
  { name: "Registration Fee", value: 90, fill: "hsl(210 98% 78%)" },
  { name: "Student Services", value: 60, fill: "hsl(212 97% 87%)" },
]

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill="currentColor" className="text-base font-medium">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="currentColor" className="text-2xl font-bold">
        ${value}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill="currentColor" className="text-xs opacity-70">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 14}
        fill={fill}
      />
    </g>
  )
}

export function StandalonePieChart() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="h-[300px] w-full max-w-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {data.map((entry, index) => (
          <div 
            key={`legend-${index}`} 
            className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-sm font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 