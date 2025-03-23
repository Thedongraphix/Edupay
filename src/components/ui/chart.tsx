"use client"

import * as React from "react"
import { type TooltipProps } from "recharts"
import {
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
  XAxis,
  YAxis,
} from "recharts"

export type ChartConfig = Record<
  string,
  {
    label: string
    color?: string
  }
>

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  config,
  children,
  className,
  ...props
}: ChartContainerProps) {
  // Define CSS variables for chart colors
  const style = React.useMemo(() => {
    return Object.entries(config).reduce((acc, [key, value]) => {
      if (value.color) {
        acc[`--color-${key}`] = value.color
      }
      return acc
    }, {} as Record<string, string>)
  }, [config])

  return (
    <div
      className={className}
      style={{
        ...style,
        "--color-primary": "var(--primary)",
        "--color-secondary": "var(--secondary)",
        "--color-muted": "var(--muted)",
      }}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

interface ChartTooltipContentProps {
  payload?: Array<{ name: string; value: number; payload: any }>
  label?: string
  active?: boolean
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  itemSorter?: (a: any) => number
  config?: ChartConfig
  hideLabel?: boolean
}

export function ChartTooltipContent({
  payload,
  label,
  active,
  formatter,
  labelFormatter,
  itemSorter,
  config,
  hideLabel = false,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  const sortedPayload = [...payload].sort((a, b) => {
    if (itemSorter) {
      return itemSorter(a) - itemSorter(b)
    }
    return b.value - a.value
  })

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {label && !hideLabel && (
        <div className="border-b px-4 py-2">
          <div className="font-medium">
            {labelFormatter ? labelFormatter(label) : label}
          </div>
        </div>
      )}
      <div className="px-4 py-2">
        {sortedPayload.map((item, i) => {
          const { name, value, payload: itemPayload } = item
          const dataKey = name.toLowerCase()
          const itemConfig = config?.[dataKey] || { label: name }
          const itemColor = itemPayload.fill || itemConfig.color

          return (
            <div key={`${name}-${i}`} className="flex items-center gap-2 py-1">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: itemColor }}
              />
              <div className="flex w-full justify-between gap-2">
                <div className="font-medium">
                  {itemConfig.label ? itemConfig.label : name}
                </div>
                <div>{formatter ? formatter(value, name, item) : value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface ChartTooltipProps extends TooltipProps<any, any> {
  content?: React.ReactNode
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  itemSorter?: (a: any) => number
  config?: ChartConfig
  hideLabel?: boolean
}

export function ChartTooltip({
  content,
  formatter,
  labelFormatter,
  itemSorter,
  config,
  hideLabel,
  ...props
}: ChartTooltipProps) {
  return (
    <Tooltip
      content={
        content || (
          <ChartTooltipContent
            formatter={formatter}
            labelFormatter={labelFormatter}
            itemSorter={itemSorter}
            config={config}
            hideLabel={hideLabel}
          />
        )
      }
      {...props}
    />
  )
}

interface ChartLegendProps {
  payload?: Array<{ value: string; payload: any }>
  config?: ChartConfig
  align?: "left" | "center" | "right"
  verticalAlign?: "top" | "middle" | "bottom"
  layout?: "horizontal" | "vertical"
  iconSize?: number
  iconType?:
    | "line"
    | "square"
    | "rect"
    | "circle"
    | "cross"
    | "diamond"
    | "star"
    | "triangle"
    | "wye"
  onClick?: (e: React.MouseEvent, id: string) => void
}

export function ChartLegend({
  payload,
  config,
  align = "right",
  verticalAlign = "middle",
  layout = "vertical",
  iconSize = 12,
  iconType = "circle",
  onClick,
}: ChartLegendProps) {
  return (
    <Legend
      content={({ payload: legendPayload }) => {
        if (!legendPayload?.length) {
          return null
        }

        return (
          <div
            className={
              layout === "horizontal" ? "flex flex-wrap" : "flex flex-col"
            }
            style={{
              textAlign: align,
              justifyContent:
                align === "left"
                  ? "flex-start"
                  : align === "right"
                  ? "flex-end"
                  : "center",
              alignItems:
                verticalAlign === "top"
                  ? "flex-start"
                  : verticalAlign === "bottom"
                  ? "flex-end"
                  : "center",
            }}
          >
            {legendPayload.map((entry, i) => {
              const { value, payload } = entry
              const dataKey = payload.dataKey
              const itemConfig = config?.[dataKey] || { label: value }
              const itemColor = entry.color || itemConfig.color

              return (
                <div
                  key={`${value}-${i}`}
                  className={`flex items-center gap-2 px-2 py-1 ${
                    onClick && "cursor-pointer"
                  }`}
                  onClick={onClick ? (e) => onClick(e, dataKey) : undefined}
                  style={{
                    opacity: payload.inactive ? 0.5 : 1,
                  }}
                >
                  {iconType === "circle" ? (
                    <div
                      className="rounded-full"
                      style={{
                        backgroundColor: itemColor,
                        width: iconSize,
                        height: iconSize,
                      }}
                    />
                  ) : iconType === "square" ? (
                    <div
                      className="rounded-sm"
                      style={{
                        backgroundColor: itemColor,
                        width: iconSize,
                        height: iconSize,
                      }}
                    />
                  ) : iconType === "rect" ? (
                    <div
                      style={{
                        backgroundColor: itemColor,
                        width: iconSize,
                        height: iconSize / 2,
                      }}
                    />
                  ) : iconType === "line" ? (
                    <div
                      style={{
                        backgroundColor: itemColor,
                        width: iconSize,
                        height: 2,
                      }}
                    />
                  ) : null}
                  <div className="text-sm">
                    {itemConfig.label ? itemConfig.label : value}
                  </div>
                </div>
              )
            })}
          </div>
        )
      }}
      align={align}
      verticalAlign={verticalAlign}
      layout={layout}
      payload={payload}
      iconSize={iconSize}
      iconType={iconType}
    />
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