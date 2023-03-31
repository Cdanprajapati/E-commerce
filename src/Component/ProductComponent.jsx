import React from "react";
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  return (
    <div class="xl:w-1/4 md:w-1/2 pb-10  p-4 drop-shadow-2xl">
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="h-[300px] w-[100%]">
          <img
            className="rounded w-[full] h-[100%] object-cover object-center mb-6"
            src=""
            alt="content"
          />
        </div>
        <h3 className="text-blue-500 text-1xl h-[50px]"></h3>
        <hr />
        <h2 className="text-lg text-gray-900 font-medium title-font">
          Price :- 37645 $
        </h2>
        <h2 className="text-lg text-gray-900 font-medium title-font">
          Rating Points :- 4.5
        </h2>
        <p className="text-lg text-gray-900 font-medium title-font">
          Count :- 5
        </p>
        <hr />
        <div className="text-lg text-gray-900 font-medium title-font">
          <Link to="/itemsDetail">Read More</Link>
        </div>
        <hr className="pb-2" />
        <button className="rounded-l-lg cursor-pointer text-slate-50 bg-yellow-500 p-2 hover:bg-pink-300 hover:text-slate-800 focus:outline-none focus:ring focus:bg-pink-400 ">
          Add To Cart
        </button>
        <button className="rounded-r-lg cursor-pointer text-slate-50 bg-orange-500 p-2 hover:bg-pink-300 hover:text-slate-800 focus:outline-none focus:ring focus:bg-pink-400 ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
