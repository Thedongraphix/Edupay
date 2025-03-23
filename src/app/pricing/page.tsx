import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Plans"
        description="Find the perfect plan for your educational institution"
      />
      <Pricing />
      
      <section className="pb-16 pt-8">
        <div className="container">
          <div className="bg-white dark:bg-gray-dark rounded-lg shadow-one px-8 py-10 md:p-[60px]">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  How secure are cryptocurrency transactions?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Our platform utilizes advanced blockchain technology to ensure all transactions are secure, 
                  transparent, and immutable. We employ industry-leading security protocols to protect all 
                  payment data.
                </p>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Can students pay in multiple currencies?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Yes, our platform supports multiple cryptocurrencies including Bitcoin (BTC), 
                  Ethereum (ETH), USD Coin (USDC), and Cardano (ADA). We provide real-time 
                  exchange rates for transparent pricing.
                </p>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Do you provide integration support?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Absolutely! All our plans include integration support to help you set up the 
                  payment system with your existing school management software. Enterprise plans 
                  include dedicated integration specialists.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  How do refunds work with cryptocurrency?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Our platform allows institutions to process refunds directly to the student's 
                  original payment method. The refund system is fully documented and tracked, 
                  providing a complete audit trail.
                </p>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Can we customize the payment pages to match our institution's branding?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Yes, Universities and Enterprise plans include custom payment page options, 
                  allowing you to add your institution's logo, colors, and branding elements 
                  to create a seamless payment experience.
                </p>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Do you offer discounts for non-profit educational institutions?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Yes, we offer special pricing for non-profit educational institutions. 
                  Please contact our sales team to discuss your specific requirements and 
                  eligible discounts.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-medium text-white hover:bg-primary/90 transition-all duration-300"
              >
                Still Have Questions? Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage; 