"use client"

import React from "react"
import { BarChartComponent } from "./BarChartComponent"

export function PaymentTimeline() {
  return (
    <div className="rounded-sm bg-white shadow-one dark:bg-[#1D2144] dark:shadow-none">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-medium text-black dark:text-white">
            Payment Timeline
          </h4>
          <a
            href="/dashboard/payment-trends"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All
          </a>
        </div>
        <BarChartComponent />
      </div>
    </div>
  )
} 