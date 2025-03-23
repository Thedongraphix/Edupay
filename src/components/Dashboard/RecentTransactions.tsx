"use client"

import React from "react"
import Image from "next/image"

interface Transaction {
  id: string
  name: string
  date: string
  amount: number
  status: "completed" | "pending" | "failed"
  type: "deposit" | "withdrawal" | "payment"
  description: string
  avatar?: string
}

const transactions: Transaction[] = [
  {
    id: "tx1",
    name: "Tuition Payment",
    date: "Today, 2:34 PM",
    amount: -1250.00,
    status: "completed",
    type: "payment",
    description: "Fall Semester - University of Technology",
    avatar: "/images/avatar-1.png",
  },
  {
    id: "tx2",
    name: "Deposit",
    date: "Yesterday, 9:12 AM",
    amount: 2000.00,
    status: "completed",
    type: "deposit",
    description: "Bank transfer from Wells Fargo",
    avatar: "/images/avatar-2.png",
  },
  {
    id: "tx3",
    name: "Technology Fee",
    date: "Sep 15, 2023",
    amount: -124.99,
    status: "completed",
    type: "payment",
    description: "Fall Semester - Technology Services",
    avatar: "/images/avatar-3.png",
  },
  {
    id: "tx4",
    name: "Tuition Installment",
    date: "Sep 10, 2023",
    amount: -785.50,
    status: "pending",
    type: "payment",
    description: "Fall Semester - Second Installment",
    avatar: "/images/avatar-4.png",
  },
  {
    id: "tx5",
    name: "Library Fee",
    date: "Sep 5, 2023",
    amount: -95.00,
    status: "completed",
    type: "payment",
    description: "Fall Semester - Library Services",
    avatar: "/images/avatar-5.png",
  }
]

export function RecentTransactions() {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: {
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        text: "Completed"
      },
      pending: {
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        text: "Processing"
      },
      failed: {
        color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        text: "Failed"
      }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const getTransactionIcon = (type: string) => {
    const iconClasses = "w-10 h-10 rounded-full flex items-center justify-center";
    
    if (type === "deposit") {
      return (
        <div className={`${iconClasses} bg-green-100 dark:bg-green-900/30`}>
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </div>
      );
    } else if (type === "withdrawal") {
      return (
        <div className={`${iconClasses} bg-red-100 dark:bg-red-900/30`}>
          <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      );
    } else {
      return (
        <div className={`${iconClasses} bg-blue-100 dark:bg-blue-900/30`}>
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
        </div>
      );
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-black dark:text-white flex items-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10V16M12 12V16M16 8V16M21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Recent Transactions
        </h3>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {transactions.map((transaction) => (
              <tr 
                key={transaction.id}
                className="group transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/20"
              >
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <div className="font-medium text-black dark:text-white">
                        {transaction.name}
                      </div>
                      <div className="text-sm text-body-color dark:text-body-color-dark">
                        {transaction.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-sm text-body-color dark:text-body-color-dark">
                  {transaction.date}
                </td>
                <td className="py-3">
                  <div className="text-right font-medium">
                    <span className={transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                      {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                    </span>
                  </div>
                  <div className="text-right mt-1">
                    {getStatusBadge(transaction.status)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-body-color dark:text-body-color-dark">Showing </span>
            <span className="font-medium text-black dark:text-white">5</span>
            <span className="text-body-color dark:text-body-color-dark"> of </span>
            <span className="font-medium text-black dark:text-white">24</span>
            <span className="text-body-color dark:text-body-color-dark"> transactions</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 