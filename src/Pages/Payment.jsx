import React from "react";
import UPI from "../Assets/UPI.jpg";

function Payment() {
  return (
    <div>
      <div className="w-full">
        <div className="text-black pt-3 text-5xl  text-center">
          Make Payment..!
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">
                      Firts Name
                    </label>
                    <input
                      type="text"
                      placeholder="Chandan"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label for="text" className="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Prajapati"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">
                      Enter Card Number
                    </label>
                    <input
                      type="number"
                      id="name"
                      placeholder="XXXX XXXX XXXX 9999"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-1 w-full">
                  <div className="relative">
                    <p className="font-medium text-slate-500">
                      Expiration Date of Card
                    </p>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="ConfirmPassword"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Enter CVV of Your card
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="XXX"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white hover:bg-gray-300 hover:text-slate-700 focus:text-slate-700 focus:bg-green-400 bg-indigo-400 border-0 py-1 px-8 focus:outline-none  rounded text-lg">
                    Proceed to Pay
                  </button>
                </div>
                <div className="p-2 w-full pt-5 mt-5 border-t border-gray-200 text-center">
                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src={UPI}
                      className="w-20 h-12 flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Make payment with UPI
                      </span>
                      <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                      KEEP SECURE PAYMENT INFO
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Payment;
