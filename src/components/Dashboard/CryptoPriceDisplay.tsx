"use client"

import React, { useState, useEffect, useCallback } from "react"

interface CryptoPrice {
  id: string
  name: string
  symbol: string
  price: number
  change: number
  color: string
  icon: React.ReactNode
}

// Initial state with loading values
const initialPrices: CryptoPrice[] = [
  {
    id: "usdc",
    name: "USD Coin",
    symbol: "USDC",
    price: 0,
    change: 0,
    color: "#2775CA",
    icon: <span className="text-white font-bold">$</span>,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    price: 0,
    change: 0,
    color: "#26A17B",
    icon: <span className="text-white font-bold">₮</span>,
  },
  {
    id: "dai",
    name: "Dai",
    symbol: "DAI",
    price: 0,
    change: 0,
    color: "#F5AC37",
    icon: <span className="text-white font-bold">◈</span>,
  },
  {
    id: "binance-usd",
    name: "Binance USD",
    symbol: "BUSD",
    price: 0,
    change: 0,
    color: "#F0B90B",
    icon: <span className="text-white font-bold">₿</span>,
  },
]

export function CryptoPriceDisplay() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>(initialPrices)
  const [loading, setLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const fetchCryptoPrices = useCallback(async () => {
    try {
      setIsUpdating(true)
      
      // In a real application, this would be fetched from an API
      // Mock data for stablecoins - prices very close to $1 with minimal fluctuation
      const prices = [
        {
          id: 'usdc',
          name: 'USD Coin',
          symbol: 'USDC',
          price: 1.0001,
          change: 0.01,
          color: '#2775CA',
          icon: <span className="text-white font-bold">$</span>
        },
        {
          id: 'tether',
          name: 'Tether',
          symbol: 'USDT',
          price: 1.0008,
          change: 0.02,
          color: '#26A17B',
          icon: <span className="text-white font-bold">₮</span>
        },
        {
          id: 'dai',
          name: 'Dai',
          symbol: 'DAI',
          price: 0.9998,
          change: -0.03,
          color: '#F5AC37',
          icon: <span className="text-white font-bold">◈</span>
        },
        {
          id: 'binance-usd',
          name: 'Binance USD',
          symbol: 'BUSD',
          price: 1.0002,
          change: 0.01,
          color: '#F0B90B',
          icon: <span className="text-white font-bold">₿</span>
        }
      ]
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setCryptoPrices(prices)
      setLastUpdated(new Date())
      setLoading(false)
      setError(null)
    } catch (err) {
      setLoading(false)
      setError("Failed to load stablecoin data. Please try again later.")
    } finally {
      setIsUpdating(false)
    }
  }, [])

  // Fetch data on initial load
  useEffect(() => {
    // Fetch prices immediately when component mounts
    fetchCryptoPrices()
    
    // Then set up interval to refresh every 2 minutes
    const interval = setInterval(fetchCryptoPrices, 120000)
    
    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [fetchCryptoPrices])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value >= 1 ? 4 : 4,  // Show 4 decimal places for stablecoins
      maximumFractionDigits: value >= 1 ? 4 : 6,
    }).format(value)
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }).format(date)
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <h2 className="text-xl font-semibold text-black dark:text-white">Stablecoin Prices</h2>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-2">Last updated: {formatTime(lastUpdated)}</span>
          <button
            onClick={() => fetchCryptoPrices()}
            disabled={isUpdating}
            className="rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      {error ? (
        <div className="rounded-md bg-red-50 p-4 text-red-500 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cryptoPrices.map((crypto) => (
            <div 
              key={crypto.symbol} 
              className={`flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#2A2F51] rounded-md transition-all ${
                loading ? 'animate-pulse' : ''
              } hover:shadow-sm`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full" 
                style={{backgroundColor: crypto.color}}>
                {crypto.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{crypto.symbol}</span>
                  <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{crypto.name}</span>
                </div>
                <div className="text-lg font-bold text-black dark:text-white">
                  {loading ? (
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ) : (
                    formatCurrency(crypto.price)
                  )}
                </div>
              </div>
              <div className={`ml-auto text-sm font-medium ${
                loading 
                  ? 'bg-gray-200 dark:bg-gray-700 h-5 w-16 rounded animate-pulse' 
                  : crypto.change > 0 
                    ? 'text-green-500' 
                    : crypto.change < 0 
                      ? 'text-red-500' 
                      : 'text-gray-500'
              }`}>
                {!loading && (
                  <div className="flex items-center">
                    {crypto.change > 0 ? (
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : crypto.change < 0 ? (
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : null}
                    {Math.abs(crypto.change).toFixed(2)}%
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 