"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing for Stablecoin Payments"
          paragraph="Choose the plan that fits your institution's size and needs. All plans include our core stablecoin payment infrastructure with zero volatility risk and dramatically lower fees."
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
            <div className="relative flex h-7 w-[60px] items-center rounded-full bg-stroke px-1 dark:bg-dark-3">
              <div
                className={`absolute left-1 h-5 w-5 cursor-pointer rounded-full bg-primary transition ${
                  !isMonthly && "!right-1 !left-auto"
                }`}
                onClick={() => setIsMonthly(!isMonthly)}
              ></div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                !isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "49" : "499"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for small schools and institutions just starting with stablecoin payments."
          >
            <OfferList text="Major Stablecoin Support (USDC, USDT)" />
            <OfferList text="Dashboard Access" />
            <OfferList text="Payment Analytics" />
            <OfferList text="Real-time Settlement" />
            <OfferList text="Email Support" />
            <OfferList text="Basic Security Features" />
          </PricingBox>
          <PricingBox
            packageName="Standard"
            price={isMonthly ? "99" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for established educational institutions seeking comprehensive stablecoin payment solutions."
            featured
          >
            <OfferList text="All in Basic +" />
            <OfferList text="All Major Stablecoins (USDC, USDT, DAI, BUSD)" />
            <OfferList text="Student Payment Portal" />
            <OfferList text="Advanced Analytics" />
            <OfferList text="Priority Support" />
            <OfferList text="Enhanced Security Features" />
            <OfferList text="Automatic Fee Management" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price="Custom"
            duration=""
            subtitle="Tailored stablecoin payment solutions for large universities and educational networks with specific needs."
          >
            <OfferList text="All in Standard +" />
            <OfferList text="Multi-chain Stablecoin Support" />
            <OfferList text="Advanced API Integration" />
            <OfferList text="Dedicated Account Manager" />
            <OfferList text="Custom Reporting" />
            <OfferList text="24/7 Premium Support" />
            <OfferList text="Enterprise-grade Security" />
            <OfferList text="Multi-campus Management" />
          </PricingBox>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center space-x-4 text-center">
          <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
            <span className="font-semibold text-black dark:text-white">All plans include:</span> No setup fees, 1:1 USD-pegged stability, and automatic payment reconciliation
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Pricing;
