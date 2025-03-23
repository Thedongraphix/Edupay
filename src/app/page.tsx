import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import { Metadata } from "next";

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
    </>
  );
}
