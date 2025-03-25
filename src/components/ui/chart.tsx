"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<string, any>

type ChartProps = React.HTMLAttributes<HTMLDivElement> & {
  config?: ChartConfig
}

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, children, config, style, ...props }, forwardedRef) => {
    const customStyles = React.useMemo(() => {
      if (!config) return {}

      return Object.entries(config).reduce((acc, [key, value]) => {
        acc[`--${key}`] = value
        return acc
      }, {} as Record<string, string>)
    }, [config])

    return (
      <div
        ref={forwardedRef}
        className={cn("chart-container", className)}
        style={{
          ...style,
          ["--color-primary" as string]: "var(--primary)",
          ["--color-secondary" as string]: "var(--secondary)",
          ["--color-muted" as string]: "var(--muted)",
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Chart.displayName = "Chart"

interface SimpleChartTooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
    [key: string]: any
  }>
  label?: string
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  valueFormatter?: (value: number) => string
  className?: string
}

export function ChartTooltip({
  active,
  payload,
  label,
  className,
  formatter,
  labelFormatter,
  valueFormatter = (value: number) => `${value}`,
}: SimpleChartTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className={cn("rounded-lg border bg-background p-2 shadow-sm", className)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            {labelFormatter ? labelFormatter(label as string) : label}
          </span>
        </div>
        {payload.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span
              className="flex items-center gap-1 text-sm font-medium"
              style={{
                color: item.color,
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />
              {item.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatter
                ? formatter(item.value, item.name, item)
                : valueFormatter(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ChartActiveDotProps {
  cx: number
  cy: number
  r: number
  fill: string
  fillOpacity: number
  stroke: string
  strokeWidth: number
  strokeOpacity: number
}

export function ChartActiveDot({
  cx,
  cy,
  r,
  fill,
  fillOpacity,
  stroke,
  strokeWidth,
  strokeOpacity,
}: ChartActiveDotProps) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r + 4}
        fill={stroke}
        fillOpacity={0.2}
        stroke="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        fillOpacity={fillOpacity}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
      />
    </g>
  )
}

interface ChartActiveShapeProps {
  cx: number
  cy: number
  innerRadius: number
  outerRadius: number
  startAngle: number
  endAngle: number
  fill: string
  payload: any
  percent: number
  value: number
  config?: ChartConfig
  activeIndex?: number
}

export function ChartActiveShape({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
  config,
  activeIndex,
}: ChartActiveShapeProps) {
  const dataKey = payload.name?.toLowerCase()
  const itemConfig = config?.[dataKey] || { label: payload.name }
  const itemColor = fill || itemConfig.color
  const sin = Math.sin(-startAngle * (Math.PI / 180))
  const cos = Math.cos(-startAngle * (Math.PI / 180))
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={itemColor}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6} 
        outerRadius={outerRadius + 10}
        fill={itemColor}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={itemColor}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={itemColor} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="currentColor"
        className="text-sm font-medium"
      >
        {itemConfig.label}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="currentColor"
        className="text-sm"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
} 