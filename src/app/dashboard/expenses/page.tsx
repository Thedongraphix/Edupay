
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { StandalonePieChart } from "@/components/Dashboard/StandalonePieChart";

const ExpensesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Expenses Breakdown"
        description="View a detailed breakdown of your educational expenses"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <SectionTitle
            title="Expenses Distribution"
            paragraph="Visualize how your educational expenses are distributed"
            center
            mb="60px"
          />

          <div className="flex justify-center">
            <div className="w-full max-w-[600px]">
              <StandalonePieChart />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-sm bg-white p-8 shadow-one dark:bg-[#1D2144] dark:shadow-none">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Tuition</h3>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Your base tuition fees for the current semester, covering core educational services.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-black dark:text-white">$1,200</span>
                <span className="text-sm font-medium text-body-color dark:text-body-color-dark">47.1%</span>
              </div>
            </div>
            
            <div className="rounded-sm bg-white p-8 shadow-one dark:bg-[#1D2144] dark:shadow-none">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Housing</h3>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Dormitory and accommodation fees for on-campus or affiliated student housing.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-black dark:text-white">$800</span>
                <span className="text-sm font-medium text-body-color dark:text-body-color-dark">31.4%</span>
              </div>
            </div>
            
            <div className="rounded-sm bg-white p-8 shadow-one dark:bg-[#1D2144] dark:shadow-none">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Books</h3>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Textbooks, digital materials, and required course resources for your studies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-black dark:text-white">$250</span>
                <span className="text-sm font-medium text-body-color dark:text-body-color-dark">9.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpensesPage; 