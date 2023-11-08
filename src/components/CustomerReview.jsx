import React from 'react'
import IMAGES from '../images/Images';

function CustomerReview() {
  return (
    <>
      <div className="bg-teal-500 pt-24">
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

        <div className="mx-auto px-24">
          <div className="bg-white bg-white/40 h-[575px] overflow-hidden rounded-lg">
            <div className="grid grid-cols-2">
              <div className="LeftWrapper px-16">
                {/* Left */}
                <div className="self-stretch w-full max-md:max-w-full pt-24 pb-12">
                  <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                      <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                        <div className="text-white text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                          Let us be part of your growth journey
                        </div>
                        <div className="text-white text-base leading-6 self-stretch mt-7 max-md:max-w-full">
                          Our ultimate vision is to bring producers closer to
                          their consumers through retailers like you. We believe
                          technology is unlocking the potential of retail, and
                          we’d love to partner with you and move your business
                          forward.
                        </div>
                      </div>
                      <div className="justify-center items-start self-stretch bg-white bg-opacity-20 flex grow flex-col mt-8 pl-8 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
                        <div className="text-white text-2xl font-bold leading-8 w-[346px] max-w-full self-start">
                          Do own or think of setting up a retail outlet? Talk to
                          us.
                        </div>
                        <div className="items-start flex w-[106px] max-w-full gap-2.5 mt-5 self-start">
                          <div className="text-teal-700 text-sm self-center my-auto">
                            Book a call
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="RightWrapper">
                <div className="relative flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0 z-50">
                  <img
                    loading="lazy"
                    src={IMAGES.image10}
                    alt={"logo"}
                    className=" absolute aspect-[0.6] object-contain object-center w-full overflow-hidden grow max-md:max-w-full -mt-64"
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

export default CustomerReview