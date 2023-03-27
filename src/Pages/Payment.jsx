import React from "react";
import UPI from "../Assets/UPI.jpg";

function Payment() {
  return (
    <div>
      <div className="w-full h-96">
        <div className="text-black pt-3 text-5xl  text-center">
          Make Payment..!
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-10 mx-auto">
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-1 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Firts Name
                    </label>
                    <input
                      type="text"
                      placeholder="Chandan"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-1 w-1/2">
                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Prajapati"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Enter Card Number
                    </label>
                    <input
                      type="number"
                      id="name"
                      placeholder="XXXX XXXX XXXX 9999"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-1 w-full">
                  <div class="relative">
                    <p class="font-medium text-slate-500">
                      Expiration Date of Card
                    </p>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="password"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="ConfirmPassword"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Enter CVV of Your card
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="XXX"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white hover:bg-pink-300 hover:text-slate-700 focus:bg-green-400 bg-indigo-400 border-0 py-1 px-8 focus:outline-none  rounded text-lg">
                    Proceed to Pay
                  </button>
                </div>
                <div class="p-2 w-full pt-5 mt-5 border-t border-gray-200 text-center">
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src={UPI}
                      class="w-20 h-12 flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Make payment with UPI
                      </span>
                      <span class="text-gray-400 text-xs tracking-widest mt-0.5">
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
