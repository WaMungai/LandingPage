import React from "react";
import IMAGES from "../images/Images";

function Footer() {
  return (
    <>
     <footer className="bg-teal-500 text-white">
  <div className="container mx-auto px-6 py-8">
    <div className="flex flex-col items-center gap-3 text-center">
      <div>
        <h1 className="mx-auto mt-4 max-w-md text-4xl font-bold text-white-400">Not just e-commerce.</h1>
        <h1 className="mx-auto mt-4 max-w-md text-4xl font-bold dark:text-yellow-400">All commerce.</h1>
      </div>

      <div>
        <p>Bring in-store and online sales together with the Mzoori POS system.</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
        <button className="w-full transform rounded-full bg-white px-5 py-2 text-sm font-semibold tracking-wide text-teal-500 transition-colors duration-300 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto">Sign up</button>

        <button className="mt-3 flex w-full transform items-center justify-center rounded-full px-2 py-2 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-800 sm:mx-2 sm:mt-0 sm:w-auto">
          <span className="mx-1">Learn more</span>
        </button>
      </div>
      <div>
        <p className="text-xs font-medium">Already have a Mzoori POS? <span className="  border-b-2"> Log in to setup Mzoori POS </span></p>
      </div>
      <div></div>
    </div>

    <hr className="my-10 border-gray-200 dark:border-white-700" />

    <div className="my-10 flex flex-col items-center sm:flex-row sm:justify-between">
      <p className="text-sm text-white-500">© 2021@mzoori. All Rights Reserved.</p>

      <div className="-mx-2 mt-3 flex sm:mt-0">
      <img
                    loading="lazy"
                    src={IMAGES.image5}
                    alt={"logo"}
                    className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  />

                  <img
                    loading="lazy"
                    src={IMAGES.image6}
                    alt={"logo"}
                     className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  />
                  <img
                    loading="lazy"
                    src={IMAGES.image7}
                    alt={"logo"}
                     className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  /> 
                  <img
                    loading="lazy"
                    src={IMAGES.image8}
                    alt={"logo"}
                    className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  />
                  <img
                    loading="lazy"
                    src={IMAGES.image9}
                    alt={"logo"}
                    className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  />
      </div>
    </div>
  </div>
</footer>
    </>
  );
}

export default Footer;
