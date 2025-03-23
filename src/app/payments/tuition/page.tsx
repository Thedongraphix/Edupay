"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { CryptoPriceDisplay } from "@/components/Dashboard/CryptoPriceDisplay";

const TuitionPaymentPage = () => {
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
                            d="M6.6095 18.3115C6.6095 18.1264 6.75767 17.9764 6.94061 17.9764H7.29519C7.47813 17.9764 7.6263 18.1264 7.6263 18.3115V18.6728C7.6263 18.8579 7.47813 19.0078 7.29519 19.0078H6.94061C6.75767 19.0078 6.6095 18.8579 6.6095 18.6728V18.3115Z"
                            fill="white"
                          />
                          <path
                            d="M9.68653 18.3115C9.68653 18.1264 9.83468 17.9764 10.0176 17.9764H10.3722C10.5551 17.9764 10.7033 18.1264 10.7033 18.3115V18.6728C10.7033 18.8579 10.5551 19.0078 10.3722 19.0078H10.0176C9.83468 19.0078 9.68653 18.8579 9.68653 18.6728V18.3115Z"
                            fill="white"
                          />
                          <path
                            d="M13.6151 21.9162C13.7815 22.0077 14.0056 21.9054 14.096 21.7368C14.1864 21.5682 14.0853 21.3414 13.9189 21.2499C13.3789 20.9329 13.0194 20.3605 13.0051 19.7085C12.9909 19.0566 13.3241 18.4689 13.8485 18.1275C14.373 17.786 15.0261 17.7345 15.5981 18.0014C16.1701 18.2684 16.5627 18.8186 16.618 19.4697C16.6257 19.8099 16.5431 20.1444 16.3792 20.44C16.2889 20.6086 16.3899 20.8353 16.5564 20.9268C16.7228 21.0182 16.947 20.9159 17.0373 20.7473C17.2569 20.346 17.3712 19.8954 17.3712 19.4377C17.3712 17.9987 16.2141 16.8292 14.7903 16.8292C13.3666 16.8292 12.2095 17.9987 12.2095 19.4377C12.2095 20.3887 12.7795 21.2335 13.6151 21.9162Z"
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

                <div className="mb-10">
                  <label
                    htmlFor="studentNotes"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Student Notes (Optional)
                  </label>
                  <textarea
                    id="studentNotes"
                    rows={4}
                    placeholder="Add any details about your payment..."
                    className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:shadow-signUp"
                  ></textarea>
                </div>

                <button className="flex w-full items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                  <span className="mr-2">Continue Payment</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>

            <div>
              <div className="mb-10 rounded-lg bg-white p-8 shadow-sm dark:bg-[#1D2144] dark:shadow-none">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Payment Summary
                </h3>

                <div className="mb-5 flex items-center justify-between border-b border-body-color border-opacity-10 pb-5 dark:border-white dark:border-opacity-10">
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Tuition Fee
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    1.2 ETH
                  </p>
                </div>
                <div className="mb-5 flex items-center justify-between border-b border-body-color border-opacity-10 pb-5 dark:border-white dark:border-opacity-10">
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Network Fee
                  </p>
                  <p className="text-base font-medium text-black dark:text-white">
                    0.001 ETH
                  </p>
                </div>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-base font-medium text-black dark:text-white">
                    Total Amount
                  </p>
                  <p className="text-base font-bold text-black dark:text-white">
                    1.201 ETH
                  </p>
                </div>
                <p className="text-center text-sm text-body-color dark:text-body-color-dark">
                  Estimated USD value: $2,185.45
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-[#1D2144] dark:shadow-none">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Need Help?
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  If you're having trouble with your payment or have questions about fees, our support team is here to help.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center rounded-md bg-primary/10 px-6 py-3 text-base font-medium text-primary duration-300 hover:bg-primary/20 dark:bg-primary/5 dark:hover:bg-primary/10"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TuitionPaymentPage; 