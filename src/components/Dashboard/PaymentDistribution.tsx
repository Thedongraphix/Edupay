"use client";

import React from "react";
import { PieChartComponent } from "./PieChartComponent";

export function PaymentDistribution() {
  return (
    <div className="rounded-sm bg-white shadow-one dark:bg-[#1D2144] dark:shadow-none">
      <div className="px-8 py-6">
        <h4 className="mb-3 text-xl font-medium text-black dark:text-white">
          Payment Distribution
        </h4>
        <PieChartComponent />
      </div>
    </div>
  );
} 