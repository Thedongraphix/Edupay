import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left content column */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Accept Crypto Tuition Payments with Confidence
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  EduPay helps educational institutions embrace cryptocurrency payments with 80% lower fees than traditional methods, instant verification, and complete security. Our platform makes paying tuition with crypto simple for both institutions and students.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                  <Link
                    href="/signup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Start Accepting Crypto
                  </Link>
                  <Link
                    href="/dashboard"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    View Demo Dashboard
                  </Link>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start">
                  <p className="text-base font-medium text-body-color">
                    Supporting major cryptocurrencies:
                  </p>
                  <div className="flex items-center space-x-3 pl-2">
                    <div className="h-8 w-8 rounded-full bg-[#F7931A] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">₿</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#627EEA] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Ξ</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#2775CA] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">$</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#0033AD] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">A</span>
                    </div>
                    <span className="text-xs text-body-color">& more</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right image column */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mt-12 max-w-[500px] lg:mt-0">
                <Image
                  src="/images/hero/african-students-digital.jpg" 
                  alt="African students using digital payment technology"
                  width={500}
                  height={375}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 z-[-1] h-full w-full rounded-xl bg-primary/30 dark:bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
