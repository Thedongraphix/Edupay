"use client";
import Image from "next/image";
import { useState } from "react";

const NewsLatterBox = () => {
  const [agreement, setAgreement] = useState(false);

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[.03] p-8 dark:bg-primary/[.15] sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Stay Updated on EdTech Payment Innovations
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Subscribe to our newsletter for the latest updates on cryptocurrency payment solutions, regulatory changes in education finance, and exclusive resources for educational institutions.
      </p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <div className="my-1">
          <label className="mx-4">
            <input
              type="checkbox"
              className="mx-2"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            I&apos;ve read and agree to the terms
          </label>
        </div>
        <button className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none">
          Subscribe Now
        </button>
        <p className="text-center text-base font-medium leading-relaxed text-body-color">
          No spam guaranteed, So please don't send any spam mail.
        </p>
      </form>
      <div className="absolute top-0 left-0 z-[-1]">
        <svg
          width="370"
          height="596"
          viewBox="0 0 370 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_88:141"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="370"
            height="596"
          >
            <rect width="370" height="596" rx="2" fill="#1D2144" />
          </mask>
          <g mask="url(#mask0_88:141)">
            <path
              opacity="0.15"
              d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
              fill="url(#paint0_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
              fill="url(#paint1_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 192.311 331.676 198.309Z"
              fill="url(#paint2_linear_88:141)"
            />
            <g opacity="0.3">
              <path
                d="M209 89.9827C216.279 77.0645 239.708 47.3598 258.054 60.2377C278.571 74.6884 266.313 100.925 250.918 105.128C233.362 109.964 199.152 107.323 209 89.9827Z"
                fill="url(#paint3_linear_88:141)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88:141"
              x1="61.3001"
              y1="62.0001"
              x2="25.5999"
              y2="78.5001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88:141"
              x1="28.1579"
              y1="501.301"
              x2="28.4379"
              y2="465.201"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_88:141"
              x1="338.507"
              y1="173.694"
              x2="349.659"
              y2="192.598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_88:141"
              x1="225.317"
              y1="73.0001"
              x2="253.975"
              y2="105.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NewsLatterBox;
