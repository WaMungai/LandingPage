import React from "react";
import IMAGES from "../images/Images";

function CustomerReview() {
  return (
    <>
     <div className="bg-teal-500 pt-36">
        <div className="DecriptionWrapper px-20">
          <div className="self-stretch w-full max-md:max-w-full pt-24 pb-12">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
              <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0 pl-24">
                <div className="text-5xl font-bold flex-1 max-md:max-w-full max-md:text-3xl max-md:mt-10 text-white">
                  <h1>Our customers reviews speak for themselves</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-24 pb-16">
          <div className="rounded-lg">
            <section className="relative right-0 w-full self-center rounded-2xl border-[1.772px] border-solid border-white bg-[#26BFB6] shadow-lg backdrop-blur-[100px] max-md:max-w-full max-md:pl-5">
              <div className="grid grid-cols-2 text-gray-800 w-full">
                <div className="col-span-1 LeftWrapper px-16 pt-12">
                  <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                    <div className="text-white text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                      Let us be part of your growth journey
                    </div>
                    <div className="text-white text-base leading-6 self-stretch mt-7 max-md:max-w-full">
                      Our ultimate vision is to bring producers closer to their
                      consumers through retailers like you. We believe
                      technology is unlocking the potential of retail, and we’d
                      love to partner with you and move your business forward.
                    </div>
                    <div className="justify-center items-start self-stretch bg-white bg-opacity-20 flex grow flex-col my-12 pl-8 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
                      <div className="text-white text-2xl font-bold leading-8 w-[346px] max-w-full self-start">
                        Do own or think of setting up a retail outlet? Talk to
                        us.
                      </div>
                      <div className="flex max-w-full gap-2.5 mt-5">
                        <div className="text-teal-700 text-sm self-center ">
                          <div className=" w-full">
                            <p className=" font-medium">Book a call</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <img
                    src="https://res.cloudinary.com/dyjayzmiy/image/upload/v1699547175/mzoori/mzooriwoman_u13xmy.png"
                    alt=""
                    className="absolute bottom-0 right-0 scale-100 -z-10"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
