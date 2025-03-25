const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  featured?: boolean;
}) => {
  const { price, duration, packageName, subtitle, children, featured = false } = props;

  const isCustomPricing = price === "Custom";

  return (
    <div className="w-full">
      <div className={`relative z-10 rounded-md ${featured ? 'bg-primary/[0.03] dark:bg-primary/[0.08] border-2 border-primary' : 'bg-white dark:bg-gray-dark'} px-8 py-10 shadow-md hover:shadow-lg dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300`}>
        {featured && (
          <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
            Recommended
          </span>
        )}
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            {isCustomPricing ? (
              <span className="amount">{price}</span>
            ) : (
              <>
                <span className="text-lg mr-1">USDC</span><span className="amount">{price}</span>
                {duration && (
                  <span className="time text-lg font-medium text-body-color dark:text-gray-400">
                    /{duration}
                  </span>
                )}
              </>
            )}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color dark:text-gray-400">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className={`flex w-full items-center justify-center rounded-md ${featured ? 'bg-primary' : 'bg-primary'} p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/70`}>
            {isCustomPricing ? "Contact Us" : "Pay with Stablecoins"}
          </button>
        </div>
        <div className="dark:text-gray-300">{children}</div>
        <div className="absolute right-0 top-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Stablecoin accepted badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="flex items-center rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-800">
            <span className="mr-1 h-5 w-5 rounded-full bg-[#2775CA]"></span>
            <span className="text-xs font-medium dark:text-white">USDC</span>
          </div>
          <div className="flex items-center rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-800">
            <span className="mr-1 h-5 w-5 rounded-full bg-[#26A17B]"></span>
            <span className="text-xs font-medium dark:text-white">USDT</span>
          </div>
          <div className="flex items-center rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-800">
            <span className="mr-1 h-5 w-5 rounded-full bg-[#F5AC37]"></span>
            <span className="text-xs font-medium dark:text-white">DAI</span>
          </div>
          <div className="flex items-center rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-800">
            <span className="mr-1 h-5 w-5 rounded-full bg-[#F0B90B]"></span>
            <span className="text-xs font-medium dark:text-white">BUSD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
