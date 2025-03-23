"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple Crypto Payment Processing"
          paragraph="Transparent pricing for all educational institutions. No hidden fees or conversion charges when accepting cryptocurrency payments."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "149" : "1,490"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for schools just beginning to accept cryptocurrency payments."
          >
            <OfferList text="0.8% transaction fee" status="active" />
            <OfferList text="Up to 500 student accounts" status="active" />
            <OfferList text="BTC, ETH, USDC payments" status="active" />
            <OfferList text="Live market price updates" status="active" />
            <OfferList text="Basic payment dashboard" status="active" />
            <OfferList text="Email support" status="active" />
            <OfferList text="Instant USD conversion" status="inactive" />
            <OfferList text="Integration with school systems" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Professional"
            price={isMonthly ? "299" : "2,990"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Complete solution for established educational institutions."
            featured={true}
          >
            <OfferList text="0.5% transaction fee" status="active" />
            <OfferList text="Unlimited student accounts" status="active" />
            <OfferList text="All major cryptocurrencies" status="active" />
            <OfferList text="Live market price updates" status="active" />
            <OfferList text="Advanced payment dashboard" status="active" />
            <OfferList text="Priority email & chat support" status="active" />
            <OfferList text="Instant USD conversion" status="active" />
            <OfferList text="Integration with school systems" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price={isMonthly ? "Custom" : "Custom"}
            duration={isMonthly ? "" : ""}
            subtitle="Tailored solutions for large universities and education systems."
          >
            <OfferList text="Volume-based pricing" status="active" />
            <OfferList text="Unlimited users & transactions" status="active" />
            <OfferList text="Complete crypto portfolio" status="active" />
            <OfferList text="Market analytics & forecasting" status="active" />
            <OfferList text="Custom financial integrations" status="active" />
            <OfferList text="Dedicated account manager" status="active" />
            <OfferList text="Instant multi-currency conversion" status="active" />
            <OfferList text="White-labeled payment portal" status="active" />
          </PricingBox>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center space-x-4 text-center">
          <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
            <span className="font-semibold text-black dark:text-white">All plans include:</span> No setup fees, 24/7 blockchain transaction monitoring, and automatic payment reconciliation
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
          >
            Contact for Demo
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
