import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import dynamic from "next/dynamic";

// Dynamically import client components with no SSR
const CryptoPriceDisplay = dynamic(
  () => import("@/components/Dashboard/CryptoPriceDisplay").then(mod => ({ default: mod.CryptoPriceDisplay })),
  { ssr: false }
);

export default function TuitionPaymentPage() {
  return (
    <>
      <Breadcrumb
        pageName="Tuition Payment"
        description="Pay your school tuition fees securely with cryptocurrency"
      />

      <section className="pt-[80px] pb-[80px]">
        <div className="container">
          {/* Live Market Prices */}
          <div className="mb-10">
            <CryptoPriceDisplay />
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {/* Payment Form */}
            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-[#1D2144] dark:shadow-none">
              <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                Pay Tuition Fee
              </h2>

              <form>
                <div className="mb-6">
                  <label
                    htmlFor="academicTerm"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Academic Term
                  </label>
                  <select
                    id="academicTerm"
                    className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:shadow-signUp"
                  >
                    <option value="">Select Academic Term</option>
                    <option value="Fall2023">Fall Semester 2023</option>
                    <option value="Spring2024">Spring Semester 2024</option>
                    <option value="Summer2024">Summer Semester 2024</option>
                    <option value="Fall2024">Fall Semester 2024</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="paymentAmount"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Payment Amount (ETH)
                  </label>
                  <input
                    type="text"
                    id="paymentAmount"
                    placeholder="1.2"
                    className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:shadow-signUp"
                  />
                  <p className="mt-2 text-xs text-body-color dark:text-body-color-dark">
                    Estimated: $2,185.45 USD
                  </p>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                      <input
                        type="radio"
                        id="eth"
                        name="paymentMethod"
                        className="peer sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="eth"
                        className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-stroke bg-white p-4 text-center hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:border-dark dark:bg-[#2C303B] dark:hover:border-primary dark:peer-checked:border-primary"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-3"
                        >
                          <circle cx="15" cy="15" r="15" fill="#627EEA" />
                          <path
                            d="M15.0294 6L14.9225 6.36866V17.8436L15.0294 17.9504L20.5577 14.7434L15.0294 6Z"
                            fill="white"
                            fillOpacity="0.6"
                          />
                          <path
                            d="M15.0295 6L9.5 14.7434L15.0295 17.9504V12.4217V6Z"
                            fill="white"
                          />
                          <path
                            d="M15.0294 18.9963L14.9688 19.0711V23.164L15.0294 23.339L20.5613 15.7905L15.0294 18.9963Z"
                            fill="white"
                            fillOpacity="0.6"
                          />
                          <path
                            d="M15.0295 23.339V18.9963L9.5 15.7905L15.0295 23.339Z"
                            fill="white"
                          />
                          <path
                            d="M15.0294 17.9504L20.5576 14.7434L15.0294 12.4217V17.9504Z"
                            fill="white"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M9.5 14.7434L15.0295 17.9504V12.4217L9.5 14.7434Z"
                            fill="white"
                            fillOpacity="0.6"
                          />
                        </svg>
                        <span className="text-sm font-medium text-black dark:text-white">
                          ETH
                        </span>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="radio"
                        id="usdc"
                        name="paymentMethod"
                        className="peer sr-only"
                      />
                      <label
                        htmlFor="usdc"
                        className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-stroke bg-white p-4 text-center hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:border-dark dark:bg-[#2C303B] dark:hover:border-primary dark:peer-checked:border-primary"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-3"
                        >
                          <circle cx="15" cy="15" r="15" fill="#2775CA" />
                          <path
                            d="M15 19.6881C17.6681 19.6881 19.8262 17.53 19.8262 14.8619C19.8262 12.1938 17.6681 10.0357 15 10.0357C12.3319 10.0357 10.1738 12.1938 10.1738 14.8619C10.1738 17.53 12.3319 19.6881 15 19.6881Z"
                            fill="white"
                          />
                          <path
                            d="M18.75 10C21.5138 10 23.75 12.2362 23.75 15C23.75 17.7638 21.5138 20 18.75 20H11.25C8.48625 20 6.25 17.7638 6.25 15C6.25 12.2362 8.48625 10 11.25 10H18.75ZM18.75 8.75H11.25C7.79875 8.75 5 11.5487 5 15C5 18.4513 7.79875 21.25 11.25 21.25H18.75C22.2013 21.25 25 18.4513 25 15C25 11.5487 22.2013 8.75 18.75 8.75Z"
                            fill="white"
                          />
                        </svg>
                        <span className="text-sm font-medium text-black dark:text-white">
                          USDC
                        </span>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="radio"
                        id="btc"
                        name="paymentMethod"
                        className="peer sr-only"
                      />
                      <label
                        htmlFor="btc"
                        className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-stroke bg-white p-4 text-center hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:border-dark dark:bg-[#2C303B] dark:hover:border-primary dark:peer-checked:border-primary"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-3"
                        >
                          <circle cx="15" cy="15" r="15" fill="#F7931A" />
                          <path
                            d="M20.3468 13.2939C20.5536 11.1793 18.9088 10.03 16.7125 9.26901L17.3361 6.69687L15.7289 6.3172L15.127 8.809C14.7225 8.71436 14.3072 8.62508 13.8955 8.53673L14.5023 6.03442L12.8969 5.65474L12.2733 8.22582C11.9367 8.1539 11.608 8.0819 11.2911 8.00662L11.2929 8.00048L9.11977 7.48137L8.71484 9.20452C8.71484 9.20452 9.9205 9.48392 9.89359 9.50164C10.5599 9.66602 10.6768 10.1122 10.6559 10.4702L9.93602 13.4409C9.98371 13.4533 10.0456 13.4711 10.1132 13.4979C10.0571 13.4849 9.99747 13.4708 9.93602 13.4568L8.95074 17.5809C8.87547 17.79 8.67629 18.094 8.22676 17.9778C8.24395 18.0019 7.04918 17.6782 7.04918 17.6782L6.25 19.5171L8.32004 20.0071C8.69426 20.0945 9.06132 20.1866 9.42032 20.273L8.78855 22.8843L10.394 23.2639L11.0185 20.6882C11.4406 20.7947 11.8482 20.893 12.2468 20.9841L11.6251 23.5466L13.2323 23.9263L13.8641 21.3203C16.7648 21.9003 18.9651 21.6718 19.8953 19.0489C20.6478 16.9625 19.8255 15.7867 18.3086 15.0221C19.4195 14.7869 20.2615 14.1027 20.4584 13.2948L20.3468 13.294V13.2939ZM16.9424 18.2123C16.4098 20.2988 13.0278 19.2466 11.9108 18.9708L12.7681 15.4724C13.8851 15.749 17.5004 16.0534 16.9424 18.2123ZM17.4751 13.2611C16.9852 15.1722 14.1527 14.2859 13.225 14.0573L14.0049 10.9133C14.9326 11.142 17.9863 11.2875 17.4751 13.2611Z"
                            fill="white"
                          />
                        </svg>
                        <span className="text-sm font-medium text-black dark:text-white">
                          BTC
                        </span>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="radio"
                        id="ada"
                        name="paymentMethod"
                        className="peer sr-only"
                      />
                      <label
                        htmlFor="ada"
                        className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-stroke bg-white p-4 text-center hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:border-dark dark:bg-[#2C303B] dark:hover:border-primary dark:peer-checked:border-primary"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-3"
                        >
                          <circle cx="15" cy="15" r="15" fill="#0033AD" />
                          <path
                            d="M19.3836 11.5871C19.2171 11.6785 18.9931 11.5762 18.9027 11.4076C18.8123 11.239 18.9133 11.0122 19.0798 10.9207C19.6198 10.6037 19.9793 10.0313 19.9936 9.37933C20.0078 8.72736 19.6745 8.13975 19.1501 7.79827C18.6257 7.45678 17.9726 7.4053 17.4006 7.67226C16.8285 7.93922 16.4359 8.48938 16.3806 9.14045C16.373 9.48071 16.4555 9.81522 16.6194 10.1108C16.7098 10.2794 16.6087 10.5062 16.4423 10.5976C16.2758 10.6891 16.0517 10.5867 15.9614 10.4181C15.7419 10.0168 15.6275 9.56619 15.6275 9.10841C15.6275 7.66945 16.7846 6.5 18.2083 6.5C19.6321 6.5 20.7892 7.66945 20.7892 9.10841C20.7892 10.0595 20.2192 10.9043 19.3836 11.5871Z"
                            fill="white"
                          />
                          <path
                            d="M13.0688 10.9844C13.0688 11.1695 12.9207 11.3194 12.7377 11.3194H12.3831C12.2002 11.3194 12.052 11.1695 12.052 10.9844V10.6231C12.052 10.438 12.2002 10.2881 12.3831 10.2881H12.7377C12.9207 10.2881 13.0688 10.438 13.0688 10.6231V10.9844Z"
                            fill="white"
                          />
                          <path
                            d="M14.6084 9.10842C14.6084 9.2935 14.4602 9.44344 14.2773 9.44344H13.9227C13.7397 9.44344 13.5916 9.2935 13.5916 9.10842V8.74711C13.5916 8.56204 13.7397 8.4121 13.9227 8.4121H14.2773C14.4602 8.4121 14.6084 8.56204 14.6084 8.74711V9.10842Z"
                            fill="white"
                          />
                          <path
                            d="M16.1475 10.9844C16.1475 11.1695 15.9994 11.3194 15.8164 11.3194H15.4618C15.2789 11.3194 15.1307 11.1695 15.1307 10.9844V10.6231C15.1307 10.438 15.2789 10.2881 15.4618 10.2881H15.8164C15.9994 10.2881 16.1475 10.438 16.1475 10.6231V10.9844Z"
                            fill="white"
                          />
                          <path
                            d="M11.2743 17.1304L9.76647 14.9633C9.70069 14.8656 9.70069 14.7344 9.76647 14.6366L11.2743 12.4696C11.3401 12.3718 11.4498 12.3125 11.5681 12.3125H14.5839C14.7022 12.3125 14.8119 12.3718 14.8777 12.4696L16.3856 14.6366C16.4513 14.7344 16.4513 14.8656 16.3856 14.9633L14.8777 17.1304C14.8119 17.2282 14.7022 17.2875 14.5839 17.2875H11.5681C11.4498 17.2875 11.3401 17.2282 11.2743 17.1304Z"
                            fill="white"
                          />
                          <path
                            d="M15.7659 21.5154L14.2561 19.3483C14.1903 19.2506 14.1903 19.1193 14.2561 19.0216L15.7679 16.8506C15.8337 16.7528 15.9434 16.6934 16.0619 16.6934H19.0818C19.2002 16.6934 19.31 16.7528 19.3758 16.8507L20.8878 19.0219C20.9535 19.1196 20.9535 19.2508 20.8878 19.3485L19.376 21.5153C19.3102 21.6131 19.2004 21.6724 19.082 21.6724H16.0619C15.9435 21.6724 15.8337 21.6131 15.7679 21.5153L15.7659 21.5154Z"
                            fill="white"
                          />
                          <path
                            d="M6.78277 21.5154L5.27294 19.3484C5.20716 19.2506 5.20716 19.1193 5.27294 19.0216L6.78482 16.8506C6.85061 16.7528 6.96034 16.6934 7.07872 16.6934H10.0986C10.217 16.6934 10.3267 16.7528 10.3925 16.8506L11.9043 19.0216C11.9701 19.1193 11.9701 19.2506 11.9043 19.3484L10.3945 21.5154C10.3287 21.6132 10.219 21.6724 10.1006 21.6724H7.07872C6.96034 21.6724 6.85061 21.6131 6.78482 21.5153L6.78277 21.5154Z"
                            fill="white"
                          />
                          <path
                            d="M12.7798 19.4464L14.2917 17.2793C14.3575 17.1815 14.4673 17.1222 14.5856 17.1222H17.5819C17.7003 17.1222 17.81 17.1815 17.8758 17.2794L19.3877 19.4467C19.4534 19.5445 19.4534 19.6756 19.3877 19.7732L17.8758 21.9401C17.81 22.038 17.7003 22.0972 17.5819 22.0972H14.5856C14.4673 22.0972 14.3575 22.038 14.2917 21.9401L12.7798 19.7732C12.714 19.6756 12.714 19.5445 12.7798 19.4467V19.4464Z"
                            fill="white"
                          />
                          <path
                            d="M8.14722 16.4347C8.14722 16.2496 8.29539 16.0996 8.47833 16.0996H8.8329C9.01584 16.0996 9.16401 16.2496 9.16401 16.4347V16.796C9.16401 16.9811 9.01584 17.131 8.8329 17.131H8.47833C8.29539 17.131 8.14722 16.9811 8.14722 16.796V16.4347Z"
                            fill="white"
                          />
                          <path
                            d="M11.1264 21.1614C11.1264 21.3465 10.9782 21.4964 10.7953 21.4964H10.4407C10.2578 21.4964 10.1096 21.3465 10.1096 21.1614V20.8001C10.1096 20.615 10.2578 20.4651 10.4407 20.4651H10.7953C10.9782 20.4651 11.1264 20.615 11.1264 20.8001V21.1614Z"
                            fill="white"
                          />
                          <path
                            d="M16.5019 21.1614C16.5019 21.3465 16.3538 21.4964 16.1708 21.4964H15.8162C15.6333 21.4964 15.4851 21.3465 15.4851 21.1614V20.8001C15.4851 20.615 15.6333 20.4651 15.8162 20.4651H16.1708C16.3538 20.4651 16.5019 20.615 16.5019 20.8001V21.1614Z"
                            fill="white"
                          />
                        </svg>
                        <span className="text-sm font-medium text-black dark:text-white">
                          ADA
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="paymentNotes"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Payment Notes (Optional)
                  </label>
                  <textarea
                    id="paymentNotes"
                    rows={3}
                    placeholder="Add any notes about this payment"
                    className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:shadow-signUp"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsCheck"
                      className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="termsCheck"
                      className="ml-2 text-sm text-body-color dark:text-dark-6"
                    >
                      I agree to Edupay's{" "}
                      <Link
                        href="/terms"
                        className="text-primary underline hover:text-primary/90"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-primary underline hover:text-primary/90"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  Continue to Payment
                </button>
              </form>
            </div>

            {/* Payment Summary */}
            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-[#1D2144] dark:shadow-none">
              <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                Payment Summary
              </h2>

              <div className="mb-8 border-b border-body-color/10 pb-8 dark:border-white/10">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Tuition Fee (Fall 2023)
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    $2,000.00
                  </p>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Technology Fee
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    $150.00
                  </p>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Library Fee
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    $75.00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Processing Fee
                  </p>
                  <p className="text-base font-medium text-green-500 dark:text-green-400">
                    -$40.00 (80% Savings)
                  </p>
                </div>
              </div>

              <div className="border-b border-body-color/10 pb-8 dark:border-white/10">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Subtotal
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    $2,225.00
                  </p>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    Network Fee (Est.)
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    $10.45
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-black dark:text-white">
                    Total Due
                  </p>
                  <p className="text-base font-bold text-primary">
                    $2,235.45 USD
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Payment Method
                </h3>
                <div className="mb-3 flex items-center gap-2 rounded-lg bg-[#F8F8F8] p-4 dark:bg-[#2A2F51]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2397 5.84961L12.9997 4.92961C12.3997 4.52961 11.5997 4.52961 10.9997 4.92961L9.7597 5.84961C9.5997 5.95961 9.3997 5.99961 9.1997 5.99961C8.7597 5.99961 8.3597 5.70961 8.2297 5.28961L7.8997 4.13961C7.6997 3.48961 7.0397 3.09961 6.3797 3.24961L3.1797 3.95961C2.3997 4.14961 1.9297 4.96961 2.1197 5.74961L5.2797 18.4696C5.4297 19.0496 5.9397 19.4396 6.5197 19.4396C6.6397 19.4396 6.7597 19.4196 6.8797 19.3896L10.0797 18.6796C10.5797 18.5496 10.9997 18.1196 11.0997 17.6096L11.1997 17.0496C11.2997 16.5396 11.7197 16.1296 12.2297 16.0196L16.0997 15.1896C16.6097 15.0696 16.9997 14.6396 17.0997 14.1296L18.0997 7.12961C18.1997 6.44961 17.7797 5.80961 17.1197 5.57961L14.2397 4.61961"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.89 9.00099C21.89 10.031 21.41 10.941 20.66 11.481V6.53099C21.4 7.08099 21.89 7.99099 21.89 9.00099Z"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.66 11.4711V12.7211C20.66 14.7611 19.01 16.4211 16.96 16.4211C14.91 16.4211 13.26 14.7711 13.26 12.7211V11.4711"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.86 9.00099C18.86 7.96099 19.34 7.05099 20.09 6.51099V11.461C19.34 10.921 18.86 10.001 18.86 9.00099Z"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-black dark:text-white">
                      University Approved
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      This payment method is approved by your institution
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#F8F8F8] p-4 dark:bg-[#2A2F51]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17"
                        stroke="#4A6CF7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-black dark:text-white">
                      Secure & Transparent
                    </h5>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      Blockchain verified transaction with 100% security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 