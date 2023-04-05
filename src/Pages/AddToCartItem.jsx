import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../ReduxTool/counterSlice";
import { postRequest } from "../Axios/axiosClient";

function AddToCartItem() {
  const cartItem = useParams();
  console.log(cartItem.data, "---->");
  const [additem, setAdditem] = useState([]);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchallCart = async (cart) => {
      try {
        const result = await postRequest(`product/${cart}`,{
          
        });
        setAdditem(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchallCart();
  }, [cartItem.productCart]);
  console.log(additem,"---->")

  return (
    <div>
      <h1 className="text-center text-6xl py-4 text-bold text-slate-800">
        Add To Cart Items
      </h1>
      <hr />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 bg-slate-200 hover:drop-shadow-2xl my-3 w-content-fit">
                    <div className="h-full flex sm:flex-row flex-row items-center sm:justify-start justify-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://dummyimage.com/201x201"
                      />
                      <div className="flex-grow  sm:pl-8">
                        <h1 className="float-right text-2xl">
                          <RxCross1 />
                        </h1>
                        <h2 className="title-font font-medium text-lg text-gray-900">
                          Cdan
                        </h2>

                        <h3 className="text-gray-500 mb-3">UI Developer</h3>
                        <p className="mb-4">
                          DIY tote bag drinking vinegar cronut adaptogen squid
                          fanny pack vaporware.
                        </p>
                        <span className="inline-flex">
                          <a className="text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5 hover:bg-blue-500 hover:text-slate-950 hover:rounded hover:outline hover:outline-offset-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5 hover:bg-blue-500 hover:text-slate-950 hover:rounded hover:outline hover:outline-offset-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5 hover:bg-blue-500 hover:text-slate-950 hover:rounded hover:outline hover:outline-offset-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span>
                        <div className="float-right">
                          <label className="text-2xl text-bold font-medium mx-2">
                            Qty
                          </label>
                          <button
                            className="bg-slate-300"
                            onClick={() => dispatch(increment())}
                          >
                            <HiPlus />
                          </button>
                          <span className="px-2 bg-slate-300">{count}</span>
                          <button
                            className="bg-slate-300"
                            onClick={() => dispatch(decrement())}
                          >
                            <HiOutlineMinus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 hover:drop-shadow-2xl container py-10 mx-auto rounded-lg p-6 flex flex-col md:ml-auto w-full md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Order Summary
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
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

export default AddToCartItem;
