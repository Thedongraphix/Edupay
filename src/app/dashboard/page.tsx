"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { PaymentChart } from "@/components/Dashboard/PaymentChart";
import { PaymentTimeline } from "@/components/Dashboard/PaymentTimeline";
import { PaymentDistribution } from "@/components/Dashboard/PaymentDistribution";
import { CryptoPriceDisplay } from "@/components/Dashboard/CryptoPriceDisplay";
import { RecentTransactions } from "@/components/Dashboard/RecentTransactions";

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Manage all your EduPay activities in one place"
      />

      <section className="pt-[80px] pb-[80px]">
        <div className="container">
          <SectionTitle
            title="Student Dashboard"
            paragraph="Access your payment history, upcoming fees, and account details"
            center
            mb="40px"
          />

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Card 1: Balance */}
            <div className="relative rounded-lg bg-white px-6 py-5 shadow-sm dark:bg-[#1D2144] dark:shadow-none overflow-hidden transition-all hover:shadow-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 rounded-bl-full"></div>
              <h4 className="mb-2 text-lg font-medium text-body-color dark:text-body-color-dark">Account Balance</h4>
              <h2 className="mb-1 text-3xl font-bold text-black dark:text-white">2.45 ETH</h2>
              <p className="text-base text-body-color dark:text-body-color-dark">≈ $4,362.63 USD</p>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-green-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v3H7a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
                </svg>
                <span>3.2% from yesterday</span>
              </div>
            </div>

            {/* Card 2: Pending Payments */}
            <div className="relative rounded-lg bg-white px-6 py-5 shadow-sm dark:bg-[#1D2144] dark:shadow-none overflow-hidden transition-all hover:shadow-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 opacity-10 rounded-bl-full"></div>
              <h4 className="mb-2 text-lg font-medium text-body-color dark:text-body-color-dark">Pending Payments</h4>
              <h2 className="mb-1 text-3xl font-bold text-black dark:text-white">1.2 ETH</h2>
              <p className="text-base text-body-color dark:text-body-color-dark">Due in 14 days</p>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-orange-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Payment reminder set</span>
              </div>
            </div>

            {/* Card 3: Payments Made */}
            <div className="relative rounded-lg bg-white px-6 py-5 shadow-sm dark:bg-[#1D2144] dark:shadow-none overflow-hidden transition-all hover:shadow-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-10 rounded-bl-full"></div>
              <h4 className="mb-2 text-lg font-medium text-body-color dark:text-body-color-dark">Payments Made</h4>
              <h2 className="mb-1 text-3xl font-bold text-black dark:text-white">12</h2>
              <p className="text-base text-body-color dark:text-body-color-dark">In the last 30 days</p>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-blue-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span>25% more than last month</span>
              </div>
            </div>

            {/* Card 4: Savings */}
            <div className="relative rounded-lg bg-white px-6 py-5 shadow-sm dark:bg-[#1D2144] dark:shadow-none overflow-hidden transition-all hover:shadow-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 opacity-10 rounded-bl-full"></div>
              <h4 className="mb-2 text-lg font-medium text-body-color dark:text-body-color-dark">Fees Saved</h4>
              <h2 className="mb-1 text-3xl font-bold text-black dark:text-white">$245.00</h2>
              <p className="text-base text-body-color dark:text-body-color-dark">Compared to traditional methods</p>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-green-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span>12% increase</span>
              </div>
            </div>
          </div>

          {/* Live Market Prices */}
          <div className="mb-8">
            <CryptoPriceDisplay />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-8">
            <PaymentTimeline />
            <PaymentDistribution />
          </div>

          {/* Recent Transactions */}
          <div className="mb-8">
            <RecentTransactions />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link 
              href="/payments/tuition"
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">Pay Tuition</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark text-center">
                Submit your next tuition payment
              </p>
            </Link>

            <Link 
              href="/dashboard/payment-history"
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">Payment History</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark text-center">
                View your payment receipts and history
              </p>
            </Link>

            <Link 
              href="/dashboard/expenses"
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">Expenses Analysis</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark text-center">
                Track your educational expenses
              </p>
            </Link>

            <Link 
              href="/dashboard/settings"
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm dark:bg-[#1D2144] transition-all hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-gray-500/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">Account Settings</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark text-center">
                Manage your account preferences
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage; 