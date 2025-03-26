import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edupay - Cryptocurrency Payments for Education Institutions",
  description: "Secure, instant, and low-fee cryptocurrency payment solution for schools, colleges, and universities. Simplify tuition payments, reduce costs, and improve transparency.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <Video />
      <Testimonials />
      <Pricing />
      <Contact />
      
      {/* Payment Link (Fixed) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link 
          href="/payment"
          className="flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary/90 transition-all"
        >
          Make a Payment
        </Link>
      </div>
    </>
  );
}
