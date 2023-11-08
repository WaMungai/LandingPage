import React from 'react'
import MzooriCarousel from './MzooriCarousel'


function CarouselContainer() {
  return (
    <div className="items-start flex flex-col">
      <div className="self-stretch w-full max-md:max-w-full pt-20 pb-12">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <div className="text-black text-6xl font-bold flex-1 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              Power your retail business
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-2xl font-normal flex-1 max-md:max-w-full max-md:mt-10">
              Get the tools you need to run your retail store. Mzoori’s
              all-in-one POS system comes with inventory tracking, staff
              management, and more.
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 w-full ">
        <MzooriCarousel />
      </div>
    </div>
  );
}
export default CarouselContainer