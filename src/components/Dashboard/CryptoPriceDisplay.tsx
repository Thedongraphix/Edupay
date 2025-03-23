"use client"

import React, { useState, useEffect } from "react"

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
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 0,
    change: 0,
    color: "#F7931A",
    icon: <span className="text-white font-bold">₿</span>,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 0,
    change: 0,
    color: "#627EEA",
    icon: <span className="text-white font-bold">Ξ</span>,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0,
    change: 0,
    color: "#0033AD",
    icon: <span className="text-white font-bold">A</span>,
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    price: 0,
    change: 0,
    color: "#2775CA",
    icon: <span className="text-white font-bold">$</span>,
  },
]

export function CryptoPriceDisplay() {
  const [prices, setPrices] = useState<CryptoPrice[]>(initialPrices)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const fetchCryptoPrices = async () => {
    try {
      setIsUpdating(true)
      
      // Fetch data from CoinGecko API
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,usd-coin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
      )
      
      if (!response.ok) {
        throw new Error("Failed to fetch cryptocurrency data")
      }
      
      const data = await response.json()
      
      // Map the response data to our CryptoPrice format
      const updatedPrices = prices.map(crypto => {
        const coinData = data.find((coin: any) => coin.id === crypto.id)
        
        if (coinData) {
          return {
            ...crypto,
            price: coinData.current_price,
            change: coinData.price_change_percentage_24h || 0,
          }
        }
        
        return crypto
      })
      
      setPrices(updatedPrices)
      setLastUpdated(new Date())
      setIsLoading(false)
      setIsUpdating(false)
      setError(null)
    } catch (err) {
      console.error("Error fetching cryptocurrency prices:", err)
      setIsLoading(false)
      setIsUpdating(false)
      setError("Failed to load cryptocurrency data. Please try again later.")
    }
  }

  // Fetch data on initial load
  useEffect(() => {
    fetchCryptoPrices()
    
    // Set up interval to fetch data every 2 minutes
    const interval = setInterval(fetchCryptoPrices, 120000)
    
    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value >= 1 ? 2 : 3,
      maximumFractionDigits: value >= 1 ? 2 : 4,
    }).format(value)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-[#1D2144] overflow-hidden transition-all hover:shadow-card">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-bold text-black dark:text-white flex items-center">
          <svg 
            className="w-5 h-5 mr-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M12 6V12L16 14" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Live Market Prices
        </h3>
        <div className="ml-3 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-xs font-medium text-green-600 dark:text-green-300 flex items-center">
          {isUpdating ? (
            <>
              <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-300 mr-1 animate-pulse"></div>
              Updating
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-300 mr-1"></div>
              Live
            </>
          )}
        </div>
        <div className="ml-auto text-sm text-body-color dark:text-body-color-dark">
          Last updated: {formatTime(lastUpdated)}
        </div>
      </div>
      
      {error ? (
        <div className="py-6 text-center text-red-500 dark:text-red-400">
          <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p>{error}</p>
          <button 
            onClick={fetchCryptoPrices}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {prices.map((crypto) => (
            <div 
              key={crypto.symbol} 
              className={`flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-[#2A2F51] rounded-md transition-all ${
                isLoading ? 'animate-pulse' : ''
              } hover:shadow-sm`}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: crypto.color }}
              >
                {crypto.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="font-medium">{crypto.name}</div>
                  <div className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                    {crypto.symbol}
                  </div>
                </div>
                <div className="text-lg font-bold">
                  {isLoading ? (
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ) : (
                    formatCurrency(crypto.price)
                  )}
                </div>
              </div>
              <div className={`ml-auto text-sm font-medium ${
                isLoading 
                  ? 'bg-gray-200 dark:bg-gray-700 h-5 w-16 rounded animate-pulse' 
                  : crypto.change > 0 
                    ? 'text-green-500' 
                    : crypto.change < 0 
                      ? 'text-red-500' 
                      : 'text-gray-500'
              }`}>
                {!isLoading && (
                  <div className="flex items-center">
                    {crypto.change > 0 ? (
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : crypto.change < 0 ? (
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    {crypto.change > 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-end items-center text-xs text-gray-500 dark:text-gray-400">
        <button 
          onClick={fetchCryptoPrices}
          className="text-primary hover:underline flex items-center"
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Refresh'}
          {!isUpdating && (
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
} 