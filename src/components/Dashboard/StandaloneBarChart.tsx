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
  Cell,
  ReferenceLine,
  LabelList
} from "recharts"

const data = [
  { name: "Jan", amount: 420, status: "below" },
  { name: "Feb", amount: 380, status: "below" },
  { name: "Mar", amount: 650, status: "above" },
  { name: "Apr", amount: 410, status: "below" },
  { name: "May", amount: 530, status: "below" },
  { name: "Jun", amount: 720, status: "above" },
  { name: "Jul", amount: 780, status: "above" },
  { name: "Aug", amount: 590, status: "below" },
  { name: "Sep", amount: 860, status: "above" },
  { name: "Oct", amount: 640, status: "above" },
  { name: "Nov", amount: 710, status: "above" },
  { name: "Dec", amount: 920, status: "above" }
]

// Calculate the average amount
const averageAmount = data.reduce((sum, entry) => sum + entry.amount, 0) / data.length

// Mark each bar as above or below average
data.forEach(item => {
  item.status = item.amount >= averageAmount ? "above" : "below"
})

// Define chart colors
const primaryColor = "hsl(221.2 83.2% 53.3%)"
const secondaryColor = "hsl(212 95% 68%)"
const tertiaryColor = "hsl(216 92% 60%)"
const belowAvgColor = "hsl(212 97% 87%)"
const successColor = "hsl(142, 71%, 45%)"
const dangerColor = "hsl(358, 75%, 59%)"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const amount = payload[0].value
    const isAboveAverage = amount > averageAmount
    const percentFromAvg = ((amount / averageAmount - 1) * 100).toFixed(1)
    
    return (
      <div className="rounded-lg bg-white dark:bg-[#1D2144] p-4 shadow-md border border-gray-100 dark:border-gray-700 animate-fadeIn">
        <div className="flex items-center mb-2">
          <div className={`w-3 h-3 rounded-full mr-2 ${isAboveAverage ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        </div>
        <p className="text-xl font-bold">${amount}</p>
        <div className={`text-xs mt-2 px-2 py-1 rounded-full inline-flex items-center font-medium ${isAboveAverage ? 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30' : 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/30'}`}>
          {isAboveAverage ? (
            <>
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v3H7a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
              </svg>
              {`${percentFromAvg}% above average`}
            </>
          ) : (
            <>
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              {`${Math.abs(Number(percentFromAvg))}% below average`}
            </>
          )}
        </div>
      </div>
    )
  }
  return null
}

const ValueLabel = (props: any) => {
  const { x, y, width, value } = props
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill="#6b7280" 
      textAnchor="middle" 
      fontSize={12}
      className="text-xs font-medium opacity-80"
    >
      ${value}
    </text>
  )
}

export function StandaloneBarChart() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [chartData, setChartData] = React.useState(data)
  const [isLoading, setIsLoading] = React.useState(false)
  const [chartView, setChartView] = React.useState<'monthly' | 'quarterly' | 'yearly'>('monthly')

  // Transform data for different views
  const getViewData = React.useCallback(() => {
    setIsLoading(true)
    
    setTimeout(() => {
      if (chartView === 'monthly') {
        setChartData(data)
      } else if (chartView === 'quarterly') {
        const quarterlyData = [
          { name: "Q1", amount: Math.round((data[0].amount + data[1].amount + data[2].amount) / 3), status: "above" },
          { name: "Q2", amount: Math.round((data[3].amount + data[4].amount + data[5].amount) / 3), status: "above" },
          { name: "Q3", amount: Math.round((data[6].amount + data[7].amount + data[8].amount) / 3), status: "below" },
          { name: "Q4", amount: Math.round((data[9].amount + data[10].amount + data[11].amount) / 3), status: "above" },
        ]
        const quarterlyAvg = quarterlyData.reduce((sum, entry) => sum + entry.amount, 0) / quarterlyData.length
        quarterlyData.forEach(item => {
          item.status = item.amount >= quarterlyAvg ? "above" : "below"
        })
        setChartData(quarterlyData)
      } else if (chartView === 'yearly') {
        const yearlyData = [
          { name: "2022", amount: Math.round(data.reduce((sum, entry) => sum + entry.amount, 0) * 0.9), status: "below" },
          { name: "2023", amount: Math.round(data.reduce((sum, entry) => sum + entry.amount, 0)), status: "above" },
        ]
        const yearlyAvg = yearlyData.reduce((sum, entry) => sum + entry.amount, 0) / yearlyData.length
        yearlyData.forEach(item => {
          item.status = item.amount >= yearlyAvg ? "above" : "below"
        })
        setChartData(yearlyData)
      }
      
      setIsLoading(false)
    }, 500)
  }, [chartView])

  React.useEffect(() => {
    getViewData()
  }, [chartView, getViewData])

  const handleViewChange = (view: 'monthly' | 'quarterly' | 'yearly') => {
    setChartView(view)
  }

  const getBarFill = (entry: any, index: number) => {
    if (index === activeIndex) return primaryColor
    return entry.status === "above" ? secondaryColor : belowAvgColor
  }

  // Calculate current average
  const currentAverage = chartData.reduce((sum, entry) => sum + entry.amount, 0) / chartData.length

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2">
        <button 
          onClick={() => handleViewChange('monthly')} 
          className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
            chartView === 'monthly' 
              ? 'bg-primary/10 text-primary' 
              : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          Monthly
        </button>
        <button 
          onClick={() => handleViewChange('quarterly')} 
          className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
            chartView === 'quarterly' 
              ? 'bg-primary/10 text-primary' 
              : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          Quarterly
        </button>
        <button 
          onClick={() => handleViewChange('yearly')} 
          className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
            chartView === 'yearly' 
              ? 'bg-primary/10 text-primary' 
              : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="relative h-[350px] w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-[#1D2144]/80 z-10 animate-fadeIn">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">Loading data...</span>
            </div>
          </div>
        )}
        
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 30, right: 20, left: 20, bottom: 20 }}
            barGap={8}
            barSize={chartView === 'yearly' ? 80 : chartView === 'quarterly' ? 50 : 24}
            onMouseMove={(state) => {
              if (state && state.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex)
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
            className={isLoading ? 'opacity-50' : 'opacity-100 transition-opacity duration-300'}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={primaryColor} stopOpacity={1} />
                <stop offset="100%" stopColor={secondaryColor} stopOpacity={0.8} />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={primaryColor} floodOpacity="0.3" />
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
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
              animationDuration={300}
            />
            <ReferenceLine 
              y={currentAverage} 
              stroke="#94a3b8" 
              strokeDasharray="3 3" 
              label={{ 
                value: `Avg: $${currentAverage.toFixed(0)}`,
                position: 'right',
                fill: '#94a3b8',
                fontSize: 12
              }} 
            />
            <Bar 
              dataKey="amount" 
              radius={[6, 6, 0, 0]}
              animationDuration={2000}
              animationEasing="ease-out"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarFill(entry, index)}
                  style={{
                    filter: index === activeIndex 
                      ? 'brightness(110%) drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))' 
                      : 'none',
                    transition: 'fill 0.3s ease, filter 0.5s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
              {!isLoading && activeIndex === null && (
                <LabelList dataKey="amount" content={<ValueLabel />} />
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: primaryColor }}></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: secondaryColor }}></div>
          <span className="text-sm">Above Average</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: belowAvgColor }}></div>
          <span className="text-sm">Below Average</span>
        </div>
        <div className="h-4 border-l border-gray-300 dark:border-gray-700 mx-2"></div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Total: ${chartData.reduce((sum, entry) => sum + entry.amount, 0).toLocaleString()}
        </div>
      </div>
    </div>
  )
} 