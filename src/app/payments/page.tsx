"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { CryptoPriceDisplay } from "@/components/Dashboard/CryptoPriceDisplay";

const PaymentsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Payments"
        description="Manage your school payments securely and efficiently with our crypto payment solutions."
      />

      <section className="pt-[80px] pb-[80px]">
        <div className="container">
          <SectionTitle
            title="Fast, Secure School Payments"
            paragraph="Choose from multiple payment methods and currencies to pay your school fees securely."
            center
            mb="40px"
          />

          {/* Live Market Prices */}
          <div className="mb-10">
            <CryptoPriceDisplay />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mb-14">
            {/* Payment Option 1 */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-card dark:bg-[#1D2144]">
              <div className="mb-3 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="fill-primary"
                >
                  <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.822 0-16-7.178-16-16S11.178 4 20 4s16 7.178 16 16-7.178 16-16 16z" />
                  <path d="M23 14h-6c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2h6c1.105 0 2-.895 2-2v-8c0-1.105-.895-2-2-2zm-1 10h-4v-8h4v8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-black dark:text-white">Pay School Tuition</h3>
              <p className="text-center text-body-color dark:text-body-color-dark">
                Pay for semester or yearly tuition fees with multiple crypto options.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/payments/tuition"
                  className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Pay Now
                </Link>
              </div>
            </div>

            {/* Payment Option 2 */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-card dark:bg-[#1D2144]">
              <div className="mb-3 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="fill-primary"
                >
                  <path d="M33.3 8H6.7C4.1 8 2 10.1 2 12.7v14.7C2 29.9 4.1 32 6.7 32h26.7c2.6 0 4.7-2.1 4.7-4.7V12.7C38 10.1 35.9 8 33.3 8zM34 27.3c0 .4-.3.7-.7.7H6.7c-.4 0-.7-.3-.7-.7V12.7c0-.4.3-.7.7-.7h26.7c.4 0 .7.3.7.7v14.6z" />
                  <path d="M28 16h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-2 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-black dark:text-white">Pay Miscellaneous Fees</h3>
              <p className="text-center text-body-color dark:text-body-color-dark">
                Pay for books, extracurricular activities, and other school expenses.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/payments/miscellaneous"
                  className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Pay Now
                </Link>
              </div>
            </div>

            {/* Payment Option 3 */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-card dark:bg-[#1D2144]">
              <div className="mb-3 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="fill-primary"
                >
                  <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 32c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14-6.268 14-14 14z" />
                  <path d="M27 18h-5v-5c0-1.105-.895-2-2-2s-2 .895-2 2v5h-5c-1.105 0-2 .895-2 2s.895 2 2 2h5v5c0 1.105.895 2 2 2s2-.895 2-2v-5h5c1.105 0 2-.895 2-2s-.895-2-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-black dark:text-white">Add Funds to Account</h3>
              <p className="text-center text-body-color dark:text-body-color-dark">
                Top up your student wallet for future expenses and quick payments.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/payments/add-funds"
                  className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Add Funds
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm dark:bg-[#1D2144]">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Payment History</h3>
            <p className="mb-8 text-center text-base text-body-color dark:text-body-color-dark">
              View your past transactions and payment history
            </p>
            <Link
              href="/dashboard/payment-history"
              className="rounded-md bg-primary px-8 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
            >
              View History
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentsPage; 