import * as React from "react";
import HeroSection from "../components/HeroSection";
import ModernSection from "../components/ModernSection";
import Specs from "../components/Specs";
import Carousel from "../components/Carousel";
import CTA from "../components/CTA";
import Features from "../components/Features";
import PosHardware from "../components/PosHardware";
import Resources from "../components/Resources";
import CustomerReview from "../components/CustomerReview";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="bg-white flex flex-col">
      <HeroSection />
      <div className="self-center z-[1] flex mt-0 w-full max-w-[1331px] flex-col max-md:max-w-full">
        <ModernSection />
        <div className="items-start self-center flex w-full max-w-[1124px] flex-col mt-28 max-md:max-w-full max-md:mt-10">
          <Specs />
        </div>
        <div className="items-center shadow-lg bg-slate-50 self-stretch flex flex-col mt-24 pb-24 rounded-2xl max-md:max-w-full max-md:mt-10">
          <div className="flex w-[277px] max-w-full items-start gap-0 pr-6 self-start max-md:pr-5">
            <img
              loading="lazy"
              src=""
              className="aspect-square object-contain object-center w-[113px] fill-pink-500 opacity-30 overflow-hidden self-stretch max-w-full"
            />
            <img
              loading="lazy"
              src=""
              className="aspect-[1.26] object-contain object-center w-[142px] fill-orange-500 opacity-30 overflow-hidden self-stretch max-w-full"
            />
          </div>
          <div className="items-start self-center flex w-full max-w-[1233px] flex-col max-md:max-w-full">
            <Carousel />
            <div className="self-stretch mt-11 pr-44 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <CTA />
            </div>
          </div>
        </div>
        <Features />
        <div className="self-stretch mt-24 pr-56 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <PosHardware />
        </div>
      </div>
      <Resources />
      <CustomerReview />
      <FAQ />
      <Footer />
    </div>
  );
}
export default LandingPage

