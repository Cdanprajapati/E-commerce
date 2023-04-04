import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TiStar } from "react-icons/ti";

import { getRequest } from "../Axios/axiosClient";

const ProductComponent = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchallData();
  }, []);

  const fetchallData = async () => {
    try {
      const responce = await getRequest("product");
      console.log(responce.data);
      setItem(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {item.map((value, i) => {
        return (
          <div className="xl:w-1/3 md:w-1/2 sm:w-1/1 lg:w-1/2 2xl:w-5 pb-10 p-4 hover:drop-shadow-2xl" key={i}>
            <div className="bg-gray-100 p-6 rounded-lg lg:w-[400px] xl:w-[400px]">
              <div className="h-[300px] w-[300px] lg:mx-auto xl:mx-auto">
                <img
                  className="rounded w-[100%] h-[100%] xl:w-[300px] object-cover mx-auto mb-6"
                  src={value.imageurl}
                  alt="content"
                />
              </div>
              <h3 className="text-blue-500 text-1xl h-[50px]"></h3>
              <hr />
              <h2 className="text-lg text-gray-900 font-medium title-font">
                {value.title.length > 20
                  ? `${value.title?.slice(0, 20)}...`
                  : value.title}
              </h2>
              <div className="md:ml-auto md:mr-auto flex flex-wrap text-base">
                <p className="bg-green-700 flex flex-wrap text-gray-950 rounded">
                  <a className="hover:text-slate-100 text-slate-50 ps-2">{value.rating.overall}</a>
                  <a className="hover:text-slate-100 text-slate-50 pt-1">
                    <TiStar />
                  </a>
                </p>
                <a className="hover:text-gray-900 ps-5">
                  ({value.rating.ratings.length > 7
                    ? `${value.rating.ratings?.slice(0, 7)}`
                    : value.rating.ratings})
                </a>
              </div>
             <div className="md:ml-auto md:mr-auto flex flex-wrap text-base">
             <p className="text-lg text-gray-700 font-medium title-font">
                {value.price.discountPrice}
              </p>
              <p className="text-md ps-2 line-through text-gray-400 font-medium title-font">
                ({value.price.actualPrice})
              </p>
              <p className="text-sm ps-2 pt-1 line-through text-green-600">
                {value.price.discountPercentage}
              </p>
             </div>
              <hr />
              <div className="text-lg text-gray-600">
                <Link to="/itemsDetail">Read More..</Link>
              </div>
              <hr className="pb-2" />
              <button className="rounded-l-sm cursor-pointer text-slate-50 bg-slate-400 p-2 hover:bg-slate-500 hover:text-slate-800 focus:outline focus:ring focus:bg-slate-500 ">
                Add To Cart
              </button>
              <button className="rounded-r-sm cursor-pointer text-slate-50 bg-slate-500 p-2 hover:bg-slate-400 hover:text-slate-800 focus:outline focus:ring focus:bg-slate-400 ">
                <Link to="/itemDetail" > Buy Now</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
