import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { CreditCardIcon, BanknotesIcon, ArrowPathIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

// Dynamically import client components with no SSR
const CryptoPriceDisplay = dynamic(
  () => import("@/components/Dashboard/CryptoPriceDisplay").then(mod => ({ default: mod.CryptoPriceDisplay })),
  { ssr: false }
);

const RecentTransactions = dynamic(
  () => import("@/components/Dashboard/RecentTransactions").then(mod => ({ default: mod.RecentTransactions })),
  { ssr: false }
);

const ModernTuitionChart = dynamic(
  () => import("@/components/Dashboard/ModernTuitionChart").then(mod => ({ default: mod.ModernTuitionChart })),
  { ssr: false }
);

const PieChartComponent = dynamic(
  () => import("@/components/Dashboard/PieChartComponent").then(mod => ({ default: mod.PieChartComponent })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Dashboard | Edupaydefi",
  description: "Manage your education crypto payments",
};

export default function DashboardPage() {
  return (
    <>
      <Breadcrumb
        pageName="Dashboard"
        description="Manage your payments and track your transactions"
      />

      <section className="pt-[80px] pb-[80px]">
        <div className="container">
         

          {/* Dashboard stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Account Balance */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                <CurrencyDollarIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Account Balance</h3>
              <p className="text-3xl font-bold text-primary">$2,450.00</p>
              <p className="mt-2 text-sm text-body-color dark:text-dark-6">Available in your wallet</p>
            </div>

            {/* Pending Payments */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                <ArrowPathIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Pending Payments</h3>
              <p className="text-3xl font-bold text-yellow-500">$750.00</p>
              <p className="mt-2 text-sm text-body-color dark:text-dark-6">Awaiting confirmation</p>
            </div>

            {/* Payments Made */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                <BanknotesIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Payments Made</h3>
              <p className="text-3xl font-bold text-green-500">$12,680.00</p>
              <p className="mt-2 text-sm text-body-color dark:text-dark-6">Total payments made</p>
            </div>

            {/* Fees Saved */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                <CreditCardIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Fees Saved</h3>
              <p className="text-3xl font-bold text-green-500">$580.00</p>
              <p className="mt-2 text-sm text-body-color dark:text-dark-6">Compared to bank transfers</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Tuition Analysis Chart */}
            <div className="bg-white dark:bg-dark-2 rounded-lg p-6">
              <ModernTuitionChart />
            </div>
            
            {/* Distribution Pie Chart */}
            <div className="bg-white dark:bg-dark-2 rounded-lg p-6">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">Fee Distribution</h2>
              <PieChartComponent />
            </div>
          </div>

          {/* Live Market Prices */}
          <div className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">Live Market Prices</h2>
            <CryptoPriceDisplay />
          </div>

          {/* Recent Transactions */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">Recent Transactions</h2>
            <RecentTransactions />
          </div>
        </div>
      </section>
    </>
  );
}; 