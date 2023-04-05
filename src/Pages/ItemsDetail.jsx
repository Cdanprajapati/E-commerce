import React, { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import SVG from "../Component/SVG";
import { getRequest } from "../Axios/axiosClient";

const ProductDetails = () => {
  const data = useParams();
  console.log(data.productId, "---->");
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchallData = async (id) => {
      try {
        const responce = await getRequest(`product/${id}`);
        setItem(responce.data);
        console.log(responce, "----here your data------>");
      } catch (error) {
        console.log(error);
      }
    };
    fetchallData(data.productId);
  }, []);
  console.log(item, "--->s");

  return (
    <div>
      <div className="text-gray-600 body-font">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-[600px] md:h-[400px] object-cover object-center rounded"
                src={item?.imageurl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {item?.title}
                </h1>
                <div className="md:ml-auto md:mr-auto flex flex-wrap text-base">
                  <p className="bg-green-700 flex flex-wrap text-gray-950 rounded">
                    <a className="hover:text-slate-100 text-slate-50 ps-2">
                      {item?.rating?.overall}
                    </a>
                    <a className="hover:text-slate-100 text-slate-50 pt-1">
                      <TiStar />
                    </a>
                  </p>
                  <a className="hover:text-gray-900 ps-5">
                    (
                    {item?.rating?.ratings.length > 7
                      ? `${item?.rating?.ratings?.slice(0, 7)}`
                      : item?.rating?.ratings}
                    )
                  </a>
                  <SVG />
                </div>

                <hr className="my-2" />
                <p className="leading-relaxed">{item?.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Price : {item?.price?.discountPrice}
                  </span>
                  <p className="text-md px-3 line-through text-gray-400 py-auto font-medium title-font">
                    ({item?.price?.actualPrice})
                  </p>
                  <p className="text-md px-3 line-through py-auto text-green-600">
                    {item?.price?.discountPercentage}
                  </p>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <button className="bg-blue-300 ms-4 text-white font-bold py-2 px-4 border border-blue-700 hover:bg-slate-300 hover:text-slate-800 rounded">
                  <Link to={`AddToCartItem/${item.id}`}>Add To Cart</Link>
                </button>

                <button className="bg-blue-300 text-white font-bold py-2 px-4 mx-3 border border-blue-700 hover:bg-slate-300 hover:text-slate-800 rounded">
                  <Link to="/payment">Buy Now</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
