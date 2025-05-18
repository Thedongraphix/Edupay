'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ArrowLeft, CreditCard, Info, Check, ChevronRight, ShieldCheck, AlertTriangle, ExternalLink } from "lucide-react";
import { usePrivy } from '@privy-io/react-auth';
import { ethers, parseUnits, formatUnits } from 'ethers';
import {
  paymentContractAddress,
  paymentContractABI,
  usdcTokenAddress,
  erc20ABI,
  baseSepoliaChainId,
  baseSepoliaChainIdHex
} from '@/lib/contractConfig';

const USDC_DECIMALS = 6;

export default function PaymentPage() {
  const [step, setStep] = useState(1);
  const [inputAmountUSDC, setInputAmountUSDC] = useState("2225");
  
  const [paymentData, setPaymentData] = useState({
    termsAccepted: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const { ready, authenticated, user, login, switchChain } = usePrivy(); // Added switchChain back
  const [currentChainId, setCurrentChainId] = useState<string | null>(null);

  useEffect(() => {
    if (ready && authenticated && user?.wallet) {
      setCurrentChainId(user.wallet.chainId);
    }
  }, [ready, authenticated, user?.wallet, user?.wallet?.chainId]); // Added user.wallet.chainId to dependency array

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "inputAmountUSDC") {
      if (/^\d*\.?\d*$/.test(value)) {
        setInputAmountUSDC(value);
      }
    } else {
      setPaymentData({
        ...paymentData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (parseFloat(inputAmountUSDC) <= 0) {
        setTransactionStatus("Error: Payment amount must be greater than zero.");
        return;
    }
    if (step === 1 && paymentData.termsAccepted) {
      setTransactionStatus("");
      setStep(2);
    }
  };

  async function getProviderAndSigner() {
    if (!user?.wallet) throw new Error("Wallet not connected or found.");
    const eip1193Provider = await user.wallet.getEthereumProvider(); // Reverted to getEthereumProvider()
    if (!eip1193Provider) throw new Error("Wallet provider not available.");
    const ethersProvider = new ethers.BrowserProvider(eip1193Provider);
    const signer = await ethersProvider.getSigner();
    return { provider: ethersProvider, signer };
  }

  const handleNetworkSwitch = async () => {
    if (!user?.wallet || !switchChain) return false; // Ensure switchChain is available
    if (user.wallet.chainId === baseSepoliaChainIdHex) return true;
    try {
      setTransactionStatus(`Please switch to Base Sepolia network (Chain ID: ${baseSepoliaChainId}).`);
      await switchChain(baseSepoliaChainIdHex); // Use hex chainId for Privy's switchChain and call directly
      // Privy should update its context, and the useEffect for currentChainId will pick it up.
      // Forcing a re-check here might be too soon if Privy state update is async.
      // We rely on the UI to re-evaluate based on the updated currentChainId from useEffect.
      if (user.wallet.chainId === baseSepoliaChainIdHex) { // Re-check after switch
        setTransactionStatus("Network switched to Base Sepolia.");
        return true;
      } else {
         // If not switched, update currentChainId state to reflect reality
        setCurrentChainId(user.wallet.chainId);
        setTransactionStatus("Failed to switch network. Please do it manually in your wallet.");
        return false;
      }
    } catch (error) {
      console.error("Network switch error:", error);
      setCurrentChainId(user.wallet.chainId); // Update chainId state on error too
      setTransactionStatus(`Error switching network: ${(error as Error).message}. Please switch manually.`);
      return false;
    }
  };

  const handleConfirmPayment = async () => {
    if (!ready) {
      setTransactionStatus("Privy is not ready. Please wait.");
      return;
    }
    if (!authenticated || !user?.wallet) {
      setTransactionStatus("Please connect your wallet to proceed.");
      login();
      return;
    }
    if (!inputAmountUSDC || parseFloat(inputAmountUSDC) <= 0) {
      setTransactionStatus("Error: Please enter a valid payment amount greater than zero.");
      return;
    }

    setIsLoading(true);
    setTransactionStatus("Initializing payment...");
    setTransactionHash("");

    try {
      // Initial network check before trying to switch
      if (user.wallet.chainId !== baseSepoliaChainIdHex) {
        const switched = await handleNetworkSwitch();
        if (!switched) {
            setIsLoading(false);
            // Transaction status already set by handleNetworkSwitch
            return;
        }
         // After a successful switch, re-verify the provider and signer with the new chain context
        // Although Privy might handle this, it's safer to re-initialize if chain changes.
      }

      const { signer } = await getProviderAndSigner();
      const userAddress = await signer.getAddress();

      const amountToPay = parseUnits(inputAmountUSDC, USDC_DECIMALS);

      setTransactionStatus(`Approving ${formatUnits(amountToPay, USDC_DECIMALS)} USDC for payment contract...`);
      const usdcContract = new ethers.Contract(usdcTokenAddress, erc20ABI, signer);
      
      const allowance = await usdcContract.allowance(userAddress, paymentContractAddress);

      if (allowance < amountToPay) {
        const approveTx = await usdcContract.approve(paymentContractAddress, amountToPay);
        setTransactionStatus("Approval transaction sent. Waiting for confirmation...");
        await approveTx.wait();
        setTransactionStatus("USDC Approved! Proceeding to payment...");
      } else {
        setTransactionStatus("Sufficient USDC allowance already approved.");
      }

      setTransactionStatus(`Sending ${formatUnits(amountToPay, USDC_DECIMALS)} USDC payment...`);
      const paymentContract = new ethers.Contract(paymentContractAddress, paymentContractABI, signer);
      const paymentTx = await paymentContract.makePayment(amountToPay);
      setTransactionStatus("Payment transaction sent. Waiting for confirmation...");
      const receipt = await paymentTx.wait();
      
      setTransactionHash(receipt.hash);
      setTransactionStatus(`Payment of ${formatUnits(amountToPay, USDC_DECIMALS)} USDC Successful!`);
      setStep(3);

    } catch (error) {
      console.error("Payment failed:", error);
      let errorMessage = "Payment failed.";
      if (typeof error === 'object' && error !== null) {
        const e = error as { code?: string; data?: { message?: string }; message?: string };
        if (e.code === 'ACTION_REJECTED') {
          errorMessage = "Transaction rejected by user.";
        } else if (e.data?.message) {
          errorMessage = `Payment failed: ${e.data.message}`;
        } else if (e.message) {
          errorMessage = `Payment failed: ${e.message}`;
        }
      }
      setTransactionStatus(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getExplorerUrl = (txHash: string) => `https://sepolia.basescan.org/tx/${txHash}`;
  const formattedInputAmountUSD = () => {
    const num = parseFloat(inputAmountUSDC);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  }

  return (
    <>
      <Breadcrumb
        pageName="Make Payment"
        description="Pay securely with Edupay & Base Network"
      />

      <section className="py-8 md:py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Homepage
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex-1"><div className={`h-1 ${step >= 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>1</div>
              <div className="flex-1"><div className={`h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>2</div>
              <div className="flex-1"><div className={`h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>3</div>
              <div className="flex-1"><div className={`h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} rounded-full`}></div></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Details & Amount</span>
              <span className={step >= 2 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Review & Pay</span>
              <span className={step >= 3 ? 'text-primary font-medium' : 'text-gray-500 dark:text-gray-400'}>Complete</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            {step === 1 && (
              <div className="p-6 md:p-8">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-6">Enter Payment Amount</h1>
                
                <form onSubmit={handleNextStep}>
                 <div className="mb-6">
                    <label htmlFor="inputAmountUSDC" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount in USDC</label>
                    <input 
                        type="text" 
                        name="inputAmountUSDC"
                        id="inputAmountUSDC"
                        value={inputAmountUSDC}
                        onChange={handleInputChange}
                        placeholder="e.g., 100.00"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        required
                    />
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-gray-800 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Due (approx. USD)</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold mr-2">${formattedInputAmountUSD()}</span>
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
                            value="USDC"
                            disabled
                            className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-6"
                          >
                            <option value="USDC">USDC</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Exact Crypto Amount</span>
                        <span className="text-sm font-medium">{inputAmountUSDC || "0"} USDC</span>
                      </div>
                    </div>
                  </div>
                  
                  {transactionStatus.startsWith("Error: Payment amount") && (
                     <div className="mb-4 p-3 rounded-md text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                       {transactionStatus}
                     </div>
                  )}

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
                    disabled={!paymentData.termsAccepted || parseFloat(inputAmountUSDC) <= 0}
                    className="w-full rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
                  >
                    Continue to Review & Pay
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="p-6 md:p-8">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-6">Review & Pay with Crypto</h1>
                
                <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Payment Amount (Approx. USD)</p>
                      <p className="text-lg font-semibold text-black dark:text-white">${formattedInputAmountUSD()} USD</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Payment Method</p>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center mr-2">
                          <span className="text-xs font-bold">U</span>
                        </div>
                        <span className="font-medium">USDC (Base Sepolia)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Exact Crypto Amount to Send</span>
                      <span className="text-sm font-medium">{inputAmountUSDC || "0"} USDC</span>
                    </div>
                     {user?.wallet && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Connected: {user.wallet.address.substring(0,6)}...{user.wallet.address.substring(user.wallet.address.length - 4)}
                        </div>
                    )}
                    {currentChainId && currentChainId !== baseSepoliaChainIdHex && (
                        <div className="flex items-center text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                            <AlertTriangle size={12} className="mr-1 flex-shrink-0" />
                            Incorrect network. Please switch to Base Sepolia.
                        </div>
                    )}
                  </div>
                </div>

                {transactionStatus && (
                  <div className={`mb-4 p-3 rounded-md text-sm ${transactionStatus.startsWith("Error") || transactionStatus.startsWith("Payment failed") ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : transactionStatus.includes("Successful") || transactionStatus.includes("Approved") ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'}`}>
                    {transactionStatus}
                    {transactionHash && (
                        <a href={getExplorerUrl(transactionHash)} target="_blank" rel="noopener noreferrer" className="ml-2 font-medium underline hover:text-blue-500 flex items-center">
                            View on Explorer <ExternalLink size={12} className="ml-1"/>
                        </a>
                    )}
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => { setStep(1); setTransactionStatus(""); setTransactionHash("");} }
                    disabled={isLoading}
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 px-4 text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50"
                  >
                    Back
                  </button>
                  
                  {(!ready || !authenticated || !user?.wallet) ? (
                    <button
                        type="button"
                        onClick={login}
                        disabled={!ready || isLoading}
                        className="flex-1 rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                    >
                        <CreditCard size={18} className="mr-2" />
                        Connect Wallet & Pay
                    </button>
                  ) : currentChainId !== baseSepoliaChainIdHex ? (
                     <button
                        type="button"
                        onClick={handleNetworkSwitch}
                        disabled={isLoading}
                        className="flex-1 rounded-lg bg-yellow-500 py-3 px-4 text-center font-medium text-white hover:bg-yellow-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                    >
                        <AlertTriangle size={18} className="mr-2" />
                        Switch to Base Sepolia
                    </button>
                  ) : (
                    <button
                        type="button"
                        onClick={handleConfirmPayment}
                        disabled={isLoading || !paymentData.termsAccepted || parseFloat(inputAmountUSDC) <= 0}
                        className="flex-1 rounded-lg bg-primary py-3 px-4 text-center font-medium text-white hover:bg-primary/90 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <CreditCard size={18} className="mr-2" />
                                Confirm & Pay {inputAmountUSDC || "0"} USDC
                            </>
                        )}
                    </button>
                  )}
                </div>
              </div>
            )}
            {step === 3 && (
                <div className="p-6 md:p-8 text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-black dark:text-white mb-3">Payment Successful!</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Your payment of {inputAmountUSDC} USDC has been processed on the Base Sepolia network.</p>
                    {transactionHash && (
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-500">Transaction Hash:</p>
                            <a 
                                href={getExplorerUrl(transactionHash)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline break-all flex items-center justify-center"
                            >
                                {transactionHash} <ExternalLink size={12} className="ml-1 flex-shrink-0"/>
                            </a>
                        </div>
                    )}
                    <Link href="/dashboard" className="w-full sm:w-auto rounded-lg bg-primary py-3 px-6 text-center font-medium text-white hover:bg-primary/90 transition-all duration-200">
                        Go to Dashboard
                    </Link>
                     <button
                        type="button"
                        onClick={() => { setStep(1); setTransactionStatus(""); setTransactionHash(""); setPaymentData({...paymentData, termsAccepted: false}); setInputAmountUSDC("2225");}}
                        className="mt-4 w-full sm:w-auto rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent py-3 px-6 text-center font-medium text-primary hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                        Make Another Payment
                    </button>
                </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
              <ShieldCheck size={14} className="mr-1" />
              Secured by Edupay & Base Network
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 