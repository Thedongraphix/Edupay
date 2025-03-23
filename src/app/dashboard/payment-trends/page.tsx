"use client";

import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StandaloneBarChart } from "@/components/Dashboard/StandaloneBarChart";

const PaymentTrendsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Payment Trends"
        description="Analyze your payment history and spending patterns"
      />

      <section className="pt-[90px] pb-[120px]">
        <div className="container">
          <SectionTitle
            title="Payment Analytics"
            paragraph="Comprehensive insights into your educational spending patterns"
            center
            mb="50px"
          />

          {/* Key Stats Cards */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">Annual Total</h3>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-black dark:text-white">$7,610</span>
                <span className="ml-2 text-sm font-medium text-green-500">+12.5%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">vs. last year</div>
            </div>

            <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">Monthly Average</h3>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-black dark:text-white">$634</span>
                <span className="ml-2 text-sm font-medium text-red-500">-4.2%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">vs. previous quarter</div>
            </div>

            <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">Peak Month</h3>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-black dark:text-white">Dec</span>
                <span className="ml-2 text-sm font-medium text-green-500">$920</span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Highest spending month</div>
            </div>

            <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">ETH Price Impact</h3>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-black dark:text-white">+$412</span>
                <span className="ml-2 text-sm font-medium text-green-500">+5.4%</span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">USD value gain from ETH</div>
            </div>
          </div>

          {/* Main Chart */}
          <div className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-[#1D2144]">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-black dark:text-white">Monthly Payment History</h3>
              <div className="flex space-x-2">
                <button className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20">Monthly</button>
                <button className="rounded-md px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">Quarterly</button>
                <button className="rounded-md px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">Yearly</button>
              </div>
            </div>
            <div className="w-full max-w-full">
              <StandaloneBarChart />
            </div>
            
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex items-center rounded-md border border-gray-100 p-4 dark:border-gray-700">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Overall Trend</div>
                  <div className="text-lg font-bold text-green-600 dark:text-green-300">Upward</div>
                </div>
              </div>
              
              <div className="flex items-center rounded-md border border-gray-100 p-4 dark:border-gray-700">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Variance</div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-300">±12.4%</div>
                </div>
              </div>
              
              <div className="flex items-center rounded-md border border-gray-100 p-4 dark:border-gray-700">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Prediction</div>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-300">$850 next month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Yearly Comparison */}
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-[#1D2144]">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">Year-over-Year Comparison</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tuition Payments</span>
                  <span className="text-sm font-bold text-green-500">+12.5%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "75%" }}></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>$3,240 (previous)</span>
                  <span>$3,645 (current)</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Housing & Facilities</span>
                  <span className="text-sm font-bold text-red-500">-4.8%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-red-500" style={{ width: "52%" }}></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>$2,850 (previous)</span>
                  <span>$2,715 (current)</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Books & Resources</span>
                  <span className="text-sm font-bold text-blue-500">+8.2%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "38%" }}></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>$1,150 (previous)</span>
                  <span>$1,250 (current)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentTrendsPage; 