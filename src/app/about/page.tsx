import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EduPay | Crypto Education Payments",
  description: "Learn how EduPay is revolutionizing education payments by connecting institutions, students, and parents through secure cryptocurrency transactions.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About EduPay"
        description="We're simplifying education payments through blockchain technology, making tuition transfers more secure, affordable, and accessible globally."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
