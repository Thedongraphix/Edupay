'use client'
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    institution: ""
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
    console.log("Form submission started");
    
    if (!formData.name || !formData.email || !formData.message || !formData.institution) {
      setError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      console.log("Sending data to Web3Forms:", formData);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "1d4c77c2-8e46-4d1f-80c7-c9730212fa70",
          name: formData.name,
          email: formData.email,
          institution: formData.institution,
          subject: "New Educational Institution Inquiry - EduPay Stablecoin Solutions",
          message: `Institution: ${formData.institution}\n\nMessage: ${formData.message}`,
          from_name: "EduPay Stablecoin Payment System",
          botcheck: ""
        }),
      });
      
      const data = await response.json();
      console.log("Web3Forms response:", data);
      
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "", institution: "" });
      } else {
        console.error("Form submission failed:", data);
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Server error:", err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp mb-12 rounded-md bg-primary/[.03] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Transform Your Institution's Payment System with Stablecoins
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Ready to modernize your educational institution's financial operations? Our stablecoin payment solutions offer secure, efficient, and cost-effective transactions for schools, universities, and educational organizations.
                </p>
                
                {success ? (
                  <div className="text-center p-8 bg-green-50 dark:bg-green-900/30 rounded-md">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Thank You for Your Interest!</h3>
                    <p className="text-green-600 dark:text-green-400">Our team will contact you shortly to discuss how our stablecoin payment solutions can benefit your institution.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Contact Person
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Institutional Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your institutional email"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="institution"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Institution Name
                          </label>
                          <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="Enter your institution's name"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            How can we help your institution?
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your institution's payment needs and challenges"
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        {error && (
                          <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <button 
                          type="submit"
                          disabled={loading}
                          className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp disabled:opacity-70"
                        >
                          {loading ? "Sending..." : "Get Started with Stablecoin Payments"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Contact;
