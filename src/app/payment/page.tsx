'use client'
import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ArrowLeft, CreditCard, Info, Check, ChevronRight, ShieldCheck } from "lucide-react";

export default function PaymentPage() {
  const [step, setStep] = useState(1);
  const [paymentData, setPaymentData] = useState({
    amount: "2225.00",
    currency: "USDC",
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment
      console.log('Processing payment:', paymentData);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Make Payment"
        description="Pay securely with Edupay"
      />

      <section className="py-8 md:py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Homepage
          </Link>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className={`h-1 ${step >= 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                1
              </div>
              <div className="flex-1">
                <div className={`h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                2
              </div>
              <div className="flex-1">
                <div className={`h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Amount</span>
              <span className={step >= 2 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Review</span>
              <span className={step >= 3 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Complete</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            {step === 1 && (
              <div className="p-6 md:p-8">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-6">Payment Details</h1>
                
                <form onSubmit={handleSubmit}>
                  {/* Payment Card */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-gray-800 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Due</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold mr-2">$2,225.00</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">USD</span>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Paying with</span>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center mr-2">
                            <span className="text-xs font-bold">U</span>
                          </div>
                          <select
                            name="currency"
                            value={paymentData.currency}
                            onChange={handleInputChange}
                            className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-6"
                          >
                            <option value="USDC">USDC</option>
                            <option value="ETH">ETH</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Equivalent to</span>
                        <span className="text-sm font-medium">≈ 2,225 USDC</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Summary */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-black dark:text-white mb-4">Payment Summary</h2>
                    
                    <div className="space-y-3 mb-4">
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
                      <div className="flex justify-between text-green-600 dark:text-green-400">
                        <p className="text-sm">Processing Fee Savings</p>
                        <p className="text-sm font-medium">-$40.00</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="font-medium text-gray-700 dark:text-gray-300">Total</p>
                      <p className="text-lg font-bold text-black dark:text-white">$2,225.00</p>
                    </div>
                  </div>
                  
                  {/* Terms */}
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsCheck"
                        name="termsAccepted"
                        checked={paymentData.termsAccepted}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required
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
                    disabled={!paymentData.termsAccepted}
                    className="w-full rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
                  >
                    Continue to Review
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="p-6 md:p-8">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-6">Review Payment</h1>
                
                <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Payment Amount</p>
                      <p className="text-lg font-semibold text-black dark:text-white">$2,225.00 USD</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Payment Method</p>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center mr-2">
                          <span className="text-xs font-bold">U</span>
                        </div>
                        <span className="font-medium">USDC</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Crypto Amount</span>
                      <span className="text-sm font-medium">≈ 2,225 USDC</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Info size={12} className="mr-1 flex-shrink-0" />
                      Rate locked for 15 minutes from now
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-lg p-4">
                  <div className="flex">
                    <ShieldCheck size={20} className="text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">Secure Transaction</h3>
                      <p className="text-xs text-green-700 dark:text-green-400">
                        Your payment is processed securely on the blockchain. Transaction details will be available immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 px-4 text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    Back
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 transition-all duration-200 flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
              <ShieldCheck size={14} className="mr-1" />
              Secured by Edupay 
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 