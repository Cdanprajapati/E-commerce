import React from "react";
import AddToCartItem from "./AddToCartItem";


function AddToCart() {

  return (
    <div>
      <h1 className="text-center text-6xl py-4 text-bold text-slate-800">Add To Cart Items</h1>
      <hr />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <AddToCartItem />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 container py-24 mx-auto rounded-lg p-6 flex flex-col md:ml-auto w-full md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Order Summary
            </h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className=" relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddToCart;
