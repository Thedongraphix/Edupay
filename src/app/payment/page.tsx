'use client'
import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ArrowLeft, CreditCard, Info, Check, HelpCircle } from "lucide-react";

export default function PaymentPage() {
  return (
    <>
      <Breadcrumb
        pageName="Tuition Payment"
        description="Pay your school tuition fees securely with cryptocurrency"
      />

      <section className="py-12">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Homepage
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-6">Make a Payment</h1>
                
                <form>
                  {/* Academic Term Selector */}
                  <div className="mb-6">
                    <label htmlFor="academicTerm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Academic Term
                    </label>
                    <select
                      id="academicTerm"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      <option value="">Select Academic Term</option>
                      <option value="Fall2023">Fall Semester 2023</option>
                      <option value="Spring2024">Spring Semester 2024</option>
                      <option value="Summer2024">Summer Semester 2024</option>
                    </select>
                  </div>
                  
                  {/* Amount Section */}
                  <div className="mb-6">
                    <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payment Amount
                    </label>
                    <div className="flex">
                      <div className="relative flex-1 mr-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <span className="text-gray-500 dark:text-gray-400">$</span>
                        </div>
                        <input
                          type="text"
                          id="paymentAmountUSD"
                          placeholder="2,225.00"
                          className="w-full rounded-lg border border-gray-200 bg-white pl-8 px-4 py-3 text-gray-700 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        />
                      </div>
                      <select
                        id="cryptoCurrency"
                        className="w-full max-w-[140px] rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        <option value="ETH">ETH (~1.2)</option>
                        <option value="USDC">USDC</option>
                        <option value="BTC">BTC</option>
                      </select>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <HelpCircle size={12} className="mr-1" />
                      Exchange rates are updated every minute. Rate will be locked for 15 minutes after submission.
                    </p>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                      Payment Method
                    </label>
                    
                    <div className="flex flex-wrap gap-3">
                      {[
                        { id: "eth", name: "ETH", color: "bg-primary/10 text-primary" },
                        { id: "usdc", name: "USDC", color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
                        { id: "btc", name: "BTC", color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
                        { id: "ada", name: "ADA", color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" }
                      ].map((method) => (
                        <div key={method.id} className="relative">
                          <input
                            type="radio"
                            id={method.id}
                            name="paymentMethod"
                            className="peer sr-only"
                            defaultChecked={method.id === "eth"}
                          />
                          <label
                            htmlFor={method.id}
                            className="flex items-center p-3 rounded-lg border border-gray-200 bg-white hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                          >
                            <div className={`w-8 h-8 rounded-full ${method.color} flex items-center justify-center mr-2`}>
                              <span className="text-sm font-bold">{method.name.charAt(0)}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{method.name}</span>
                            <Check size={16} className="ml-2 text-primary opacity-0 peer-checked:opacity-100" />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Terms and Payment Button */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="termsCheck"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="termsCheck"
                          className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          I agree to Edupay's{" "}
                          <Link href="/terms" className="text-primary hover:underline">Terms</Link>{" "}and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 flex items-center justify-center"
                    >
                      <CreditCard size={18} className="mr-2" />
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                  Payment Summary
                </h2>

                <div className="space-y-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tuition Fee</p>
                    <p className="text-sm font-medium text-black dark:text-white">$2,000.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technology Fee</p>
                    <p className="text-sm font-medium text-black dark:text-white">$150.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Library Fee</p>
                    <p className="text-sm font-medium text-black dark:text-white">$75.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Processing Fee</p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">-$40.00</p>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <p className="font-medium text-gray-700 dark:text-gray-300">Total</p>
                  <p className="text-lg font-bold text-black dark:text-white">$2,225.00</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">ETH Payment</p>
                    <p className="text-sm font-medium text-black dark:text-white">≈ 1.2 ETH</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <Info size={14} className="mr-2" />
                    Rate locked for 15 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 