import * as React from "react";

function LandingPage() {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[1024px] w-full pt-36 pb-60 px-20 max-md:max-w-full max-md:px-5 max-md:py-24 bg-teal-500">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative items-center self-center flex mb-0 w-[740px] max-w-full flex-col max-md:mb-2.5">
          <img
            loading="lazy"
            src="../assets/images/mzoorilogo"
            className="object-contain object-center w-[300px] overflow-hidden self-center max-w-full"
          />
          <div className="bg-slate-500 bg-opacity-0 self-center w-[147px] h-px mt-8" />
          <div className="text-white text-center text-7xl font-bold leading-[77px] tracking-tighter self-stretch mt-8 max-md:max-w-full max-md:text-4xl">
            <span className="text-yellow-400">Unlock your
            <br /> businesses </span>
            <span className="text-white">
              potential with a full PoS 
              <br /> solution.{" "}
            </span>
          </div>
          <div className="bg-white self-center w-[147px] h-px mt-8" />
          <div className="text-white text-center text-2xl leading-9 self-center max-w-[702px] mt-8 max-md:max-w-full">
            The POS system with everything you need to sell in person, backed by
            everything you need to sell online.
          </div>
          <div className="self-center flex w-[311px] max-w-full items-start gap-5 mt-8">
            <div className="text-white text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border shadow-sm flex-1 pl-12 pr-12 py-2.5 rounded-[68px] border-solid border-white max-md:px-5">
              Sign in
            </div>
            <div className="text-teal-700 text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-white flex-1 px-11 py-2.5 rounded-[88px] max-md:px-5">
              Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="self-center z-[1] flex mt-0 w-full max-w-[1331px] flex-col max-md:max-w-full">
        <div className="shadow-lg backdrop-blur-[100px] self-center w-full max-w-[1179px] pt-0 pb-0 pl-24 pr-1 rounded-2xl border-[1.772px] border-solid border-white max-md:max-w-full max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
              <div className="items-start flex mr-0 flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                  Modern POS software built for your business.{" "}
                </div>
                <div className="text-black text-lg leading-8 self-stretch mt-8 max-md:max-w-full">
                  Introducing a powerful solution that will change how you sell
                  and manage a retail outlet at all levels, from small shops to
                  supermarkets
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-8 max-md:flex-wrap">
                  <div className="text-white text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-teal-700 w-[147px] max-w-full px-11 py-2.5 rounded-[88px] max-md:px-5">
                    Sign up
                  </div>
                  <div className="text-teal-700 text-sm font-bold leading-6 self-center whitespace-nowrap my-auto">
                    Learn more
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.03] object-contain object-center w-[697px] overflow-hidden max-w-full max-md:mt-0"
              />
            </div>
          </div>
        </div>
        <div className="items-start self-center flex w-full max-w-[1124px] flex-col mt-28 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch pr-36 max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:mt-10">
                  <div className="text-black text-4xl font-bold self-stretch">
                    Fully integrated hardware
                  </div>
                  <div className="text-zinc-500 text-2xl leading-8 self-stretch mt-8">
                    Get the perfect POS setup, whether you’re a pop up shop or a
                    retail store. Mzoori POS connects seamlessly with all card
                    readers and compatible hardware accessories.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-28 px-5 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:mt-10">
                  <div className="text-black text-4xl font-bold self-stretch">
                    Customizable POS terminal
                  </div>
                  <div className="text-zinc-500 text-2xl leading-8 self-stretch mt-8">
                    Personalize your POS system to your business. Keep your
                    most-used apps, discounts, and products at your fingertips
                    so you can fly through checkout.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch mt-28 pr-36 max-md:max-w-full max-md:mt-10 max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:mt-10">
                  <div className="text-black text-4xl font-bold self-stretch">
                    Powerful POS software
                  </div>
                  <div className="text-zinc-500 text-2xl leading-8 self-stretch mt-8">
                    Turn any mobile device into a powerful point of sale. You
                    can download the Mzoori POS app on to any Android or iOS
                    smartphone or tablet.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="items-start self-stretch flex flex-col max-md:max-w-full">
              <div className="self-stretch px-5 max-md:max-w-full">
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
              <div className="self-stretch mt-20 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
                    <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-7">
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                      />
                      <div className="text-black text-2xl font-bold mt-7 self-start">
                        Advanced inventory management
                      </div>
                      <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                        Generate purchase orders and transfer stock based on
                        inventory forecasts and performance.
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
                    <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-7">
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                      />
                      <div className="text-black text-2xl font-bold mt-7 self-start">
                        Custom staff permissions
                      </div>
                      <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                        Set permissions to control staff access in the POS
                        system so you can delegate with peace of mind.
                      </div>
                      <div className="items-start flex w-full justify-between gap-5 mt-7 self-start">
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
                    <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-7">
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
                        Adapt to growing trends in your business with unified
                        analytics that blend in-store and online sales.
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
                    <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[209px] grow flex-col mx-auto pl-4 py-5 rounded-xl max-md:mt-7">
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-[3.22] object-contain object-center w-full justify-center items-center overflow-hidden self-stretch"
                      />
                      <div className="text-black text-2xl font-bold self-stretch mt-7">
                        Advanced inventory management
                      </div>
                      <div className="text-neutral-500 text-base leading-7 self-stretch mt-7">
                        Generate purchase orders and transfer stock based on
                        inventory forecasts and performance.
                      </div>
                      <div className="text-black text-sm font-bold self-stretch mt-8">
                        View all Mzoori POS features
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch mt-11 pr-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col my-auto py-px max-md:max-w-full max-md:mt-10">
                    <div className="text-slate-600 text-4xl font-bold leading-[48.24px] self-start max-md:max-w-full">
                      Power your retail businessSeize more sales
                      <br />
                    </div>
                    <div className="text-black text-2xl leading-8 mt-10 self-start max-md:max-w-full max-md:mt-10">
                      Offer frictionless shopping experiences with a modern POS
                      system that lets customers shop their way, from online to
                      checkout line.
                    </div>
                    <div className="items-start flex w-[269px] max-w-full justify-between gap-5 mt-10 self-start max-md:mt-10">
                      <div className="text-white text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-teal-700 w-[147px] max-w-full px-11 py-2.5 rounded-[88px] max-md:px-5">
                        Sign up
                      </div>
                      <div className="text-teal-700 text-sm font-bold leading-6 self-center whitespace-nowrap my-auto">
                        Learn more
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch mt-11 pr-44 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
                    <div className="self-stretch max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                          <div className="flex w-[104px] h-[104px] flex-col rounded-[50%] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="items-start flex grow flex-col max-md:mt-7">
                            <div className="text-black text-2xl font-bold leading-8 self-stretch">
                              Buy online, pick up in store
                            </div>
                            <div className="text-neutral-400 text-lg leading-6 self-stretch mt-5">
                              Bring online customers in store and upsell at
                              pickup.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                          <div className="flex w-[104px] h-[104px] flex-col rounded-[50%] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="items-start flex grow flex-col max-md:mt-7">
                            <div className="text-black text-2xl font-bold leading-8 self-stretch">
                              Buy in store, ship to customer
                            </div>
                            <div className="text-neutral-400 text-lg leading-6 self-stretch mt-5">
                              Never lose a sale even when in-store inventory is
                              limited.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                    <div className="self-stretch max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                          <div className="flex w-[104px] h-[104px] flex-col rounded-[50%] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="items-start flex grow flex-col max-md:mt-7">
                            <div className="text-black text-2xl font-bold leading-8 self-stretch">
                              Browse in store, buy online
                            </div>
                            <div className="text-neutral-400 text-lg leading-6 self-stretch mt-5">
                              Email customers their in-store favorites, right
                              from the POS system.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                          <div className="flex w-[104px] h-[104px] flex-col rounded-[50%] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="items-start flex grow flex-col max-md:mt-7">
                            <div className="text-black text-2xl font-bold leading-8 self-stretch">
                              Buy anywhere, return anywhere
                            </div>
                            <div className="text-neutral-400 text-lg leading-6 self-stretch mt-5">
                              Accept in-store returns and exchanges of items
                              bought online or at other locations.
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
        </div>
        <div className="items-center self-center flex ml-0 w-[843px] max-w-full flex-col mt-24 px-5 max-md:mt-10">
          <div className="text-teal-600 text-center text-5xl font-bold self-center whitespace-nowrap max-md:text-4xl">
            Bring them back
          </div>
          <div className="bg-slate-500 self-center w-[147px] h-px mt-8" />
          <div className="text-black text-center text-2xl leading-8 self-stretch -mr-5 mt-8 max-md:max-w-full">
            Turn one-time customers into lifetime fans with a point of sale
            system that supports your staff in creating meaningful customer
            relationships.
          </div>
        </div>
        <div className="self-center w-full max-w-[980px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src=""
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Fully synced customer profiles
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Offer personalized experiences with quick access to order
                  history, lifetime spend, and more in the POS system.
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
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
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src=""
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Effective marketing
                  <br />
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Collect contact details and tailor marketing campaigns to
                  share exclusive discounts and sneak previews.
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
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
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src=""
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Integrated loyalty programs
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Add loyalty apps to your POS system to reward customers for
                  shopping with you, both in store and online.
                  <br />
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
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
          </div>
        </div>
        <div className="self-stretch mt-24 pr-56 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
              />
            </div>
            <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-4xl font-bold leading-[48.24px] self-stretch max-md:max-w-full">
                  Powerful POS hardware you can count on
                </div>
                <div className="text-black text-2xl leading-8 self-stretch mt-10 max-md:max-w-full max-md:mt-10">
                  Mzoori’s sleek POS hardware comes with built-in payment
                  processing and competitive credit card rates. You’ll be able
                  to accept all the major payment methods and look good doing it
                  too.
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-px max-md:flex-wrap max-md:mt-10">
                  <div className="text-teal-500 text-sm font-bold self-center grow shrink basis-auto my-auto">
                    Learn more about POS hardware
                  </div>
                  <img
                    loading="lazy"
                    src=""
                    className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end self-center ml-0 w-[959px] max-w-full mt-20 px-5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
              <div className="text-black text-5xl font-bold w-[433px] max-w-[433px] max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Resources for your business
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
              <div className="text-black text-lg leading-8 w-[389px] max-w-[389px] max-md:mt-10">
                Discover up-and-coming trends, access free guides, and learn how
                business owners like you use Mzoori’s POS system to level up.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[1079px] w-full pt-0 pb-0 mt-32 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative self-center z-[1] flex w-full max-w-[1180px] flex-col max-md:max-w-full " >
          <div className="self-center flex w-full max-w-[980px] flex-col max-md:max-w-full">
            <div className="self-center w-full max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                    <img
                      loading="lazy"
                      src=""
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                    />
                    <div className="text-black text-2xl font-bold mt-7 self-start">
                      SeaVees
                    </div>
                    <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                      SeaVees employs POS Go for a more flexible and untethered
                      checkout experience
                      <br />
                    </div>
                    <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                      <div className="text-teal-500 text-sm font-bold my-auto">
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
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                    <img
                      loading="lazy"
                      src=""
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
                      <div className="text-teal-500 text-sm font-bold my-auto">
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
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                    <img
                      loading="lazy"
                      src=""
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                    />
                    <div className="text-black text-2xl font-bold mt-7 self-start">
                      Nalata Nalata
                    </div>
                    <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                      Nalata Nalata used their retail location to drive ~50% of
                      sales across every channel
                      <br />
                    </div>
                    <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                      <div className="text-teal-500 text-sm font-bold my-auto">
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
              </div>
            </div>
            <div className="items-start flex w-[632px] max-w-full grow flex-col mt-20 self-start max-md:mt-10 ">
              <div className="text-white text-5xl font-bold self-start max-md:max-w-full max-md:text-4xl">
                Our customer reviews speak for themselves
                <br />
              </div>
              <div className="items-start flex w-[297px] max-w-full justify-between gap-5 mt-2.5 self-start">
                <div className="text-yellow-400 text-sm self-center grow shrink basis-auto my-auto">
                  Read real customer reviews on G2
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="shadow-lg backdrop-blur-[100px] self-stretch pt-0 mt-20 pl-24 rounded-2xl border-[1.772px] border-solid border-white max-md:max-w-full max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                    <div className="text-white text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                      Let us be part of your growth journey
                    </div>
                    <div className="text-white text-base leading-6 self-stretch mt-7 max-md:max-w-full">
                      Our ultimate vision is to bring producers closer to their
                      consumers through retailers like you. We believe
                      technology is unlocking the potential of retail and we’d
                      love to partner with you and move your business forward
                    </div>
                  </div>
                  <div className="justify-center items-start self-stretch bg-white bg-opacity-20 flex grow flex-col mt-8 pl-8 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
                    <div className="text-white text-2xl font-bold leading-8 w-[346px] max-w-full self-start">
                      Do own or think of setting up a retail outlet? Talk to us.
                    </div>
                    <div className="items-start flex w-[106px] max-w-full gap-2.5 mt-5 self-start">
                      <div className="text-teal-700 text-sm self-center my-auto">
                        Book a call
                      </div>
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                <div className="grow max-md:max-w-full max-md:mt-0">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[0.6] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col mt-60 max-md:mt-10">
                        <img
                          loading="lazy"
                          src=""
                          className="aspect-[1.14] object-contain object-center w-full fill-pink-500 opacity-30 overflow-hidden self-stretch"
                        />
                        <img
                          loading="lazy"
                          src=""
                          className="aspect-[0.95] object-contain object-center w-full fill-blue-500 opacity-30 overflow-hidden self-stretch grow"
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
      <div className="items-start self-center flex w-full max-w-[981px] flex-col mt-48 pb-6 px-5 max-md:max-w-full max-md:mt-10">
        <div className="text-black text-5xl font-bold self-stretch -mr-5 max-md:max-w-full max-md:text-4xl">
          Frequently asked questions
        </div>
        <div className="items-start self-stretch flex flex-col -mr-5 mt-12 max-md:max-w-full max-md:mt-10">
          <div className="items-start shadow-2xl bg-white self-stretch flex flex-col pl-6 pr-20 py-8 rounded-xl max-md:max-w-full max-md:px-5">
            <div className="w-[851px] max-w-full self-start">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0">
                  <div className="bg-yellow-400 flex w-[29px] h-1 flex-col mx-auto rounded-xl max-md:mt-9" />
                </div>
                <div className="flex flex-col items-stretch w-[96%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-9">
                    <div className="self-stretch text-neutral-600 text-2xl font-bold max-md:max-w-full">
                      What is a POS (point of sale)?
                    </div>
                    <div className="self-stretch text-neutral-400 text-base leading-6 mt-3.5 max-md:max-w-full">
                      A point of sale, or POS, is a system for making sales in
                      person. It’s the device and/or software that you use to
                      process transactions and accept payments, likely from your
                      retail store.
                      <br />
                      <br />
                      With Mzoori POS, retail businesses get all the tools they
                      need to manage daily operations, accept payments anywhere,
                      and build relationships with their customers. But the
                      benefits of Mzoori go beyond your retail store. With a
                      powerful ecommerce solution also included, Mzoori unifies
                      in-store and online sales to bridge the gaps between your
                      website, social media, and POS. This allows you to sync
                      inventory everywhere you sell and offer seamless shopping
                      options for customers like local pickup, local delivery,
                      ship-to-home, and email carts
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-stretch shadow-2xl bg-white flex flex-col mt-5 pl-6 pr-20 py-8 rounded-xl max-md:max-w-full max-md:px-5">
            <div className="items-start flex w-[398px] max-w-full justify-between gap-5 self-start">
              <img
                loading="lazy"
                src=""
                className="aspect-[0.91] object-contain object-center w-[29px] overflow-hidden max-w-full self-start"
              />
              <div className="text-neutral-600 text-2xl font-bold grow shrink basis-auto self-start">
                What is a POS example?
              </div>
            </div>
          </div>
          <div className="items-start self-stretch shadow-2xl bg-white flex flex-col mt-5 pl-6 pr-20 py-8 rounded-xl max-md:max-w-full max-md:px-5">
            <div className="items-start flex w-[398px] max-w-full justify-between gap-5 self-start">
              <img
                loading="lazy"
                src=""
                className="aspect-[0.91] object-contain object-center w-[29px] overflow-hidden max-w-full self-start"
              />
              <div className="text-neutral-600 text-2xl font-bold grow shrink basis-auto self-start">
                What is a POS example?
              </div>
            </div>
          </div>
          <div className="items-start self-stretch shadow-2xl bg-white flex grow flex-col mt-5 pl-6 pr-20 pt-8 pb-2 rounded-xl max-md:max-w-full max-md:px-5">
            <div className="items-start flex w-[398px] max-w-full justify-between gap-5 self-start">
              <img
                loading="lazy"
                src=""
                className="aspect-[0.91] object-contain object-center w-[29px] overflow-hidden max-w-full self-start"
              />
              <div className="text-neutral-600 text-2xl font-bold grow shrink basis-auto self-start">
                What is a POS example?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col mix-blend-multiply overflow-hidden self-stretch relative flex min-h-[657px] w-full mt-32 py-px max-md:max-w-full max-md:mt-10">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
        <div className="relative bg-teal-600 self-stretch w-full px-5 py-px max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="flex-col mix-blend-screen overflow-hidden relative flex min-h-[653px] grow pr-0 pl-20 pt-32 pb-24 max-md:max-w-full max-md:pl-5 max-md:pt-24">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <div className="relative items-center self-center flex w-full max-w-[1180px] flex-col max-md:max-w-full">
                  <div className="justify-center items-center self-center flex w-[626px] max-w-full flex-col">
                    <div className="text-yellow-400 text-center text-5xl font-bold self-center max-w-[542px] max-md:max-w-full max-md:text-4xl">
                      <span className="text-white">
                        Not just e-commerce.
                        <br />
                      </span>
                      <span className="text-yellow-400">All commerce.</span>
                    </div>
                    <div className="text-white text-center text-lg font-bold leading-8 self-stretch mt-4 max-md:max-w-full">
                      Bring in-store and online sales together with the Mzoori
                      POS system.
                    </div>
                    <div className="items-start self-center flex w-[269px] max-w-full justify-between gap-5 mt-4">
                      <div className="text-teal-600 text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-white w-[147px] max-w-full px-11 py-2.5 rounded-[88px] max-md:px-5">
                        Sign up
                      </div>
                      <div className="text-white text-sm font-bold leading-6 self-center whitespace-nowrap my-auto">
                        Learn more
                      </div>
                    </div>
                    <div className="text-white text-center text-xs font-bold leading-8 underline self-center max-w-[438px] mt-4 max-md:max-w-full">
                      Already have a Mzoori POS? Log in to set up Mzoori POS
                    </div>
                  </div>
                  <div className="items-start self-center flex w-full justify-between gap-5 mt-32 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="self-center flex items-start gap-2 my-auto">
                      <div className="text-white text-right text-sm font-bold leading-7 tracking-tighter self-stretch whitespace-nowrap stroke-[1px] pl-1 pr-1 py-1 rounded-[50%]">
                        c
                      </div>
                      <div className="text-white text-sm font-bold leading-7 tracking-tighter">
                        2021@mzoori. All Rights Reseved
                      </div>
                    </div>
                    <div className="justify-between items-start self-stretch flex w-[296px] max-w-full gap-5 max-md:justify-center">
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <img
                        loading="lazy"
                        src=""
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[3.86] object-contain object-center w-full mix-blend-screen overflow-hidden grow mt-[461px] max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage

