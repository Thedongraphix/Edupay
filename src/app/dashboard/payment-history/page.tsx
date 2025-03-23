"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PaymentHistoryPage = () => {
  // Mock payment history data
  const paymentHistory = [
    {
      id: 1,
      date: "May 15, 2023",
      description: "Spring Semester Tuition",
      amount: "1.2 ETH",
      usdAmount: "$2,136.42",
      status: "Completed",
      txHash: "0x3a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u",
    },
    {
      id: 2,
      date: "April 28, 2023",
      description: "Lab Fee Payment",
      amount: "0.15 ETH",
      usdAmount: "$267.05",
      status: "Completed",
      txHash: "0x9t8s7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c1b0a9",
    },
    {
      id: 3,
      date: "April 10, 2023",
      description: "Dormitory Fees",
      amount: "0.8 ETH",
      usdAmount: "$1,424.28",
      status: "Pending",
      txHash: "0xz1y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0f",
    },
    {
      id: 4,
      date: "March 25, 2023",
      description: "Book Fees",
      amount: "0.25 ETH",
      usdAmount: "$445.09",
      status: "Completed",
      txHash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1",
    },
    {
      id: 5,
      date: "March 12, 2023",
      description: "Sports Activity Fee",
      amount: "0.08 ETH",
      usdAmount: "$142.43",
      status: "Completed",
      txHash: "0xa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
    },
    {
      id: 6,
      date: "February 28, 2023",
      description: "Library Access Fee",
      amount: "0.05 ETH",
      usdAmount: "$89.02",
      status: "Completed",
      txHash: "0x1z2y3x4w5v6u7t8s9r0q1p2o3n4m5l6k7j8i9h0g",
    },
    {
      id: 7,
      date: "February 15, 2023",
      description: "Exam Registration",
      amount: "0.12 ETH",
      usdAmount: "$213.64",
      status: "Completed",
      txHash: "0xq1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6j7k8l9z0",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Payment History"
        description="View and track all your past and pending transactions"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <SectionTitle
            title="Your Payment History"
            paragraph="A complete record of all your educational payments"
            center
            mb="60px"
          />

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-sm bg-white px-8 py-4 shadow-one dark:bg-[#1D2144] dark:shadow-none">
                <h4 className="mb-1 text-lg font-medium text-body-color dark:text-body-color-dark">Total Spent</h4>
                <h2 className="text-2xl font-bold text-black dark:text-white">2.65 ETH</h2>
                <p className="text-sm text-body-color dark:text-body-color-dark">≈ $4,716.93 USD</p>
              </div>
              <div className="rounded-sm bg-white px-8 py-4 shadow-one dark:bg-[#1D2144] dark:shadow-none">
                <h4 className="mb-1 text-lg font-medium text-body-color dark:text-body-color-dark">Transactions</h4>
                <h2 className="text-2xl font-bold text-black dark:text-white">7 Total</h2>
                <p className="text-sm text-body-color dark:text-body-color-dark">6 Completed, 1 Pending</p>
              </div>
              <div className="rounded-sm bg-white px-8 py-4 shadow-one dark:bg-[#1D2144] dark:shadow-none">
                <h4 className="mb-1 text-lg font-medium text-body-color dark:text-body-color-dark">Last Payment</h4>
                <h2 className="text-2xl font-bold text-black dark:text-white">May 15, 2023</h2>
                <p className="text-sm text-body-color dark:text-body-color-dark">Spring Semester Tuition</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center rounded-sm border border-stroke px-4 py-2 text-sm font-medium text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M14 4L12 2M12 2L10 4M12 2V10M4 12L2 14M2 14L4 16M2 14H10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Export
              </button>
              <button className="flex items-center justify-center rounded-sm border border-stroke px-4 py-2 text-sm font-medium text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M14 2H2M14 8H2M14 14H2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Filter
              </button>
            </div>
          </div>

          {/* Payment History Table */}
          <div className="rounded-sm bg-white p-8 shadow-one dark:bg-[#1D2144] dark:shadow-none">            
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-body-color border-opacity-10 text-left dark:border-white dark:border-opacity-10">
                    <th className="py-4 px-4 font-medium text-black dark:text-white">Date</th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">Description</th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">Amount</th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">USD Value</th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">Status</th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr key={payment.id} className="border-b border-body-color border-opacity-10 hover:bg-opacity-5 dark:border-white dark:border-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-5">
                      <td className="py-5 px-4 text-base text-body-color dark:text-body-color-dark">{payment.date}</td>
                      <td className="py-5 px-4 text-base text-body-color dark:text-body-color-dark">{payment.description}</td>
                      <td className="py-5 px-4 text-base text-body-color dark:text-body-color-dark">{payment.amount}</td>
                      <td className="py-5 px-4 text-base text-body-color dark:text-body-color-dark">{payment.usdAmount}</td>
                      <td className="py-5 px-4">
                        <span 
                          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                            payment.status === "Completed" 
                              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" 
                              : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-2">
                          <button 
                            className="hover:text-primary"
                            title="View Receipt"
                          >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 3.75V14.25M9 3.75L4.5 8.25M9 3.75L13.5 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <a 
                            href={`https://etherscan.io/tx/${payment.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                            title="View on Blockchain"
                          >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.75 9H12L10.5 12.75L7.5 5.25L6 9H2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex items-center justify-between border-t border-body-color border-opacity-10 pt-6 dark:border-white dark:border-opacity-10">
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Showing 1-7 of 7 transactions
              </p>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-sm border border-stroke text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:text-white">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 3L5 7.5L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="flex h-8 min-w-[32px] items-center justify-center rounded-sm bg-primary px-3 text-sm font-medium text-white">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-sm border border-stroke text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:text-white">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L9.5 7.5L5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentHistoryPage; 