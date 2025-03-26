"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Wallet } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    { prefix: 'Crypto for ', colored: 'Education' },
    { prefix: 'Stablecoin ', colored: 'Payments' },
    { prefix: 'Edupay for ', colored: 'Institutions' }
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i].prefix + phrases[i].colored;

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 200);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const renderText = () => {
    const currentPhrase = phrases[loopNum % phrases.length];
    const { prefix, colored } = currentPhrase;
    
    if (text.length <= prefix.length) {
      return text;
    } else {
      return (
        <>
          {prefix}
          <span className="text-primary">
            {text.substring(prefix.length)}
          </span>
        </>
      );
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 order-2 lg:order-1">
              <div
                className="wow fadeInUp mx-auto max-w-[800px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {renderText()}
                  <span className="text-primary animate-pulse inline-block ml-1">|</span>
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Edupay enables educational institutions to accept USDC, USDT, DAI, and other leading stablecoins with zero volatility risk, 80% lower fees, and instant global settlements.
                </p>
                
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                  <Link
                    href="/signup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Started 
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="wow fadeInUp relative mx-auto lg:mr-0 mt-0 lg:mt-0" data-wow-delay=".3s">
                <Image
                  src="/images/hero/hero-image2.jpg"
                  alt="hero image"
                  width={540}
                  height={540}
                  className="mx-auto max-w-full rounded-3xl drop-shadow-three lg:ml-auto"
                />
                
                {/* Floating Shield Icon - Security */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute top-[-20px] left-[10%] lg:left-[-20px]"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">Secure</span>
                  </div>
                </motion.div>
                
                {/* Floating Wallet Icon - Payments */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute bottom-[10%] right-[5%] lg:right-[-10px]"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Wallet className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">Instant Pay</span>
                  </div>
                </motion.div>
                
                {/* Floating Trust Icon */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute bottom-[-15px] left-[15%]"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">Trusted</span>
                  </div>
                </motion.div>
                
                {/* Floating Global Icon */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 1.1,
                    duration: 0.5,
                    y: {
                      duration: 2.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute top-[20%] right-[-10px] lg:right-[5%]"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">Global</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
