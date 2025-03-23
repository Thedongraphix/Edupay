import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import dynamic from "next/dynamic";
import { BanknotesIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

// Dynamically import client components with no SSR
const CryptoPriceDisplay = dynamic(
  () => import("@/components/Dashboard/CryptoPriceDisplay").then(mod => ({ default: mod.CryptoPriceDisplay })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Payments | Edupaydefi",
  description: "Make education payments with cryptocurrency",
};

export default function PaymentsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Payments"
        description="Choose a payment method to continue"
      />

      <section className="pt-[80px] pb-[80px]">
        <div className="container">
          <SectionTitle
            title="Tuition Payment"
            paragraph="Pay your tuition fees securely using cryptocurrency"
            mb="40px"
          />

          {/* Live Market Prices */}
          <div className="mb-10">
            <CryptoPriceDisplay />
          </div>

          <div className="flex flex-wrap -mx-4 justify-center">
            {/* Tuition payment option */}
            <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
              <Link href="/payments/tuition">
                <div className="block rounded-lg border border-gray-200 bg-white p-8 shadow transition hover:border-primary hover:shadow-md dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/[.08] text-primary">
                    <BanknotesIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Tuition Payment</h3>
                  <p className="text-body-color dark:text-dark-6">Make a secure payment for your tuition fees using cryptocurrency.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Payment history link */}
          <div className="mt-12 text-center">
            <Link 
              href="/payments/history"
              className="inline-flex items-center text-base font-medium text-primary hover:text-primary/90"
            >
              <span className="mr-2">View Payment History</span>
              <ClockIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}; 