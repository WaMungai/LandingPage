import React from 'react'
import Carousel from './Carousel'

function CarouselContainer() {
  return (
    <div className="items-start flex flex-col">
    <div className="self-stretch w-full px-5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
          <div className="text-black text-5xl font-bold flex-1 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Power your retail business
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
          <div className="text-black text-2xl leading-8 flex-1 max-md:max-w-full max-md:mt-10">
            Get the tools you need to run your retail store. Mzoori’s
            all-in-one POS system comes with inventory tracking, staff
            management, and more.
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch w-full mt-20 px-5 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
          <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-6">
            <img
              loading="lazy"
              src=""
              className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
            />
            <div className="text-black text-2xl font-bold mt-7 self-start">
              Advanced inventory management
            </div>
            <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
              Generate purchase orders and transfer stock based on inventory
              forecasts and performance.
            </div>
            <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
              <div className="text-black text-sm font-bold my-auto">
                View all Mzoori POS features
              </div>
              <img
                loading="lazy"
                src=""
                className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-6">
            <img
              loading="lazy"
              src=""
              className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
            />
            <div className="text-black text-2xl font-bold mt-7 self-start">
              Custom staff permissions
            </div>
            <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
              Set permissions to control staff access in the POS system so you
              can delegate with peace of mind.
            </div>
            <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
              <div className="text-black text-sm font-bold my-auto">
                View all Mzoori POS features
              </div>
              <img
                loading="lazy"
                src=""
                className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-6">
            <img
              loading="lazy"
              src=""
              className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
            />
            <div className="text-black text-2xl font-bold mt-7 self-start">
              Unified reporting
              <br />
            </div>
            <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
              Adapt to growing trends in your business with unified analytics
              that blend in-store and online sales.
            </div>
            <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
              <div className="text-black text-sm font-bold my-auto">
                View all Mzoori POS features
              </div>
              <img
                loading="lazy"
                src=""
                className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[209px] grow flex-col mx-auto pl-4 py-5 rounded-xl max-md:mt-6">
            <img
              loading="lazy"
              src=""
              className="aspect-[3.22] object-contain object-center w-full justify-center items-center overflow-hidden self-stretch"
            />
            <div className="text-black text-2xl font-bold self-stretch mt-7">
              Advanced inventory management
            </div>
            <div className="text-neutral-500 text-base leading-7 self-stretch mt-7">
              Generate purchase orders and transfer stock based on inventory
              forecasts and performance.
            </div>
            <div className="text-black text-sm font-bold self-stretch mt-8">
              View all Mzoori POS features
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarouselContainer