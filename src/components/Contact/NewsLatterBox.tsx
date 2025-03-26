"use client";

import { useState } from "react";

const NewsLatterBox = () => {
  const [agreement, setAgreement] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution_type: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreement) {
      setError("Please agree to the terms before submitting");
      return;
    }
    
    if (!formData.name || !formData.email || !formData.institution_type) {
      setError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1d4c77c2-8e46-4d1f-80c7-c9730212fa70",
          name: formData.name,
          email: formData.email,
          institution_type: formData.institution_type,
          subject: "New Stablecoin Education Newsletter Subscription",
          message: `New subscription request from ${formData.name} (${formData.email})\nInstitution Type: ${formData.institution_type}`,
          from_name: "EduPay Stablecoin Updates",
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", institution_type: "" });
        setAgreement(false);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[.03] p-8 dark:bg-primary/[.15] sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Stay Updated on Stablecoin Solutions for Education
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Get exclusive insights on stablecoin payment solutions, compliance updates for educational institutions, and best practices for implementing digital payments in your organization.
      </p>
      {success ? (
        <div className="text-center p-5 bg-green-50 dark:bg-green-900/30 rounded-md">
          <p className="text-green-600 dark:text-green-400 font-medium">Welcome to the EduPay community! You'll receive our next update soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your institutional email"
            value={formData.email}
            onChange={handleInputChange}
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <select
            name="institution_type"
            value={formData.institution_type}
            onChange={handleInputChange}
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          >
            <option value="">Select Institution Type</option>
            <option value="university">University</option>
            <option value="college">College</option>
            <option value="school">School</option>
            <option value="training_center">Training Center</option>
            <option value="other">Other Educational Institution</option>
          </select>
          <div className="my-1">
            <label className="mx-4">
              <input
                type="checkbox"
                className="mx-2"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              I agree to receive updates about stablecoin payment solutions
            </label>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <button 
            type="submit" 
            disabled={loading}
            className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none disabled:opacity-70"
          >
            {loading ? "Subscribing..." : "Join Our Network"}
          </button>
          <p className="text-center text-base font-medium leading-relaxed text-body-color">
            Receive curated content about stablecoin innovations in education
          </p>
        </form>
      )}
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
