import React from "react";
import IMAGES from "../images/Images";

function Footer() {
  return (
    <>
      <div className="">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[657px] w-full max-md:max-w-full max-md:px-5 max-md:py-24 bg-teal-500">
          <div className="relative items-center self-center flex mb-0 w-[740px] max-w-full flex-col max-md:mb-2.5 border-b-0">
            <div className="bg-slate-500 bg-opacity-0 self-center w-[147px] h-px mt-8"></div>
            <div className="text-white text-center text-7xl font-bold leading-[77px] tracking-tighter self-stretch mt-8 max-md:max-w-full max-md:text-4xl">
              <span className="text-white"> Not just e-commerce. </span>
              <span className="text-yellow-400">All commerce </span>
            </div>
            <div className="bg-white self-center w-[147px] h-px mt-8"></div>
            <div className="text-white text-center text-2xl leading-9 self-center max-w-[702px] mt-8 max-md:max-w-full">
              Bring in-store and online sales together with the Mzoori POS
              system
            </div>
            <div className="self-center flex w-[311px] max-w-full items-start gap-5 mt-8">
              <div className="text-teal-700 text-base font-bold bg-white leading-6 self-stretch whitespace-nowrap justify-center items-center border shadow-sm flex-1 pl-12 pr-12 py-2.5 rounded-[68px] border-solid border-white max-md:px-5">
                Sign up
              </div>
              <div className="text-white text-base font-bold leading-6 self-stretch whitespace-nowrap flex-1 max-md:px-5">
                Learn more
              </div>
            </div>
            <div className="text-white text-center text-sm leading-9 self-center max-w-[702px] mt-8 max-md:max-w-full">
              Already have a Mzoori POS?{" "}
              <span style={{ textDecoration: "underline" }}>
                Log in to step up Mzoori POS
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-16">
            <div className="flex justify-between">
              <div className="FooterText__Left">
                {" "}
                <h1 className="text-white text-sm font-bold leading-7 tracking-tighter">
                  2021@mzoori. All Rights Reseved
                </h1>
              </div>

              <div className="FooterText__Right">
                <div className="inline-flex space-x-5">
                  <img
                    loading="lazy"
                    src={IMAGES.image5}
                    alt={"logo"}
                    className="w-5 h-5 aspect-square object-contain object-center overflow-hidden flex-1"
                  />

                  <img
                    loading="lazy"
                    src={IMAGES.image6}
                    alt={"logo"}
                    className="w-5 h-5 aspect-square object-contain object-center  overflow-hidden flex-1"
                  />
                  {/* <img
                    loading="lazy"
                    src={IMAGES.image7}
                    alt={"logo"}
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  /> */}
                  <img
                    loading="lazy"
                    src={IMAGES.image8}
                    alt={"logo"}
                    className="aspect-square object-contain object-center w-5 h-5 overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src={IMAGES.image9}
                    alt={"logo"}
                    className="aspect-square object-contain object-center w-5 h-5 overflow-hidden flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
