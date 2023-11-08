import React from 'react'
import IMAGES from '../images/Images'

function Resources() {
  return (
    <>
      <div
        className="bg-teal-100 h-[505px] w-[1360px
] mr-20"
      >
        <div className="DecriptionWrapper px-20">
          <div className="self-stretch w-full max-md:max-w-full pt-24 pb-12">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
              <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                <div className="text-black text-6xl font-bold flex-1 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  <h1>Resources for your business</h1>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-black text-2xl font-normal flex-1 max-md:max-w-full max-md:mt-10">
                  <p>
                    Discover up-and-coming trends, access free guides, and learn
                    how business owners like you use Mzoori’s POS system to
                    level up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CardWrapper px-20">
          <div className="flex-col overflow-hidden self-stretch relative flex  w-full pt-0 pb-0 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
          

            <div className="relative z-[1] flex w-full max-w-[1180px] flex-col max-md:max-w-full ">
              <div className="self-center flex w-full max-w-[980px] flex-col max-md:max-w-full">
                <div className="self-center w-full max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                        <img
                          loading="lazy"
                          src={IMAGES.image11}
                          alt={"logo"}
                          className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                        />
                        <div className="text-black text-2xl font-bold mt-7 self-start">
                          SeaVees
                        </div>
                        <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                          SeaVees employs POS Go for a more flexible and
                          untethered checkout experience
                          <br />
                        </div>
                        <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                          <div className=" bottom-0 text-teal-500 text-sm font-bold my-auto">
                            View all Mzoori POS features
                          </div>
                          <img
                            loading="lazy"
                            src={IMAGES.image12}
                            alt={"logo"}
                            className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                        <img
                          loading="lazy"
                          src={IMAGES.image11}
                          alt={"logo"}
                          className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                        />
                        <div className="text-black text-2xl font-bold mt-7 self-start">
                          Lively
                        </div>
                        <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                          Lively’s omnichannel approach increased average order
                          value by 80%
                          <br />
                        </div>
                        <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                          <div className=" text-teal-500 text-sm font-bold my-auto">
                            View all Mzoori POS features
                          </div>
                          <img
                            loading="lazy"
                            src={IMAGES.image12}
                            alt={"logo"}
                            className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                        <img
                          loading="lazy"
                          src={IMAGES.image11}
                          alt={"logo"}
                          className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                        />
                        <div className="text-black text-2xl font-bold mt-7 self-start">
                          Nalata Nalata
                        </div>
                        <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                          Nalata Nalata used their retail location to drive ~50%
                          of sales across every channel
                          <br />
                        </div>
                        <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                          <div className="text-teal-500 text-sm font-bold my-auto">
                            View all Mzoori POS features
                          </div>
                          <img
                            loading="lazy"
                            src={IMAGES.image12}
                            alt={"logo"}
                            className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources