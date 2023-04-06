import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../ReduxTool/counterSlice";
import { getRequest } from "../Axios/axiosClient";
import { FaCartArrowDown } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

function AddToCartItem() {
  // const cartItem = useParams();
  const [additem, setAdditem] = useState({});
  const count = useSelector((state) => state.counterReducer.value);
 
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchallCart = async (cart) => {
      try {
        const result = await getRequest(`product/${cart}`);
        setAdditem(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchallCart();
  }, []);
  // console.log(additem, "--this is add to cart -->");

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-2 mx-auto">
          <div className="flex flex-row w-full py-3 pb-4">
            <h1 className="text-3xl font-medium title-font shadow-2xl px-3 py-3 outline text-gray-900 bg-slate-200 rounded-full tracking-widest">
              <FaCartArrowDown />
            </h1>
            <p className="px-3 text-3xl pt-1 text:shadow-2xl font-bold leading-relaxed">
              Add To Cart Items
            </p>
          </div>
          <hr />
          <div className="p-4 lg:w-[100%]">
            <div className="h-full flex sm:flex-row flex-row items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="flex-grow sm:pl-8">
                <h1 className="float-right cursor-pointer text-2xl">
                  <RxCross1 />
                </h1>
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {additem.title}
                </h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <h1 className="text-gray-500">Price : $ 33.9</h1>
                <span className="inline-flex pt-3">
                  <a className="text-gray-500 pt-1 text-green-400">
                    <GiCheckMark />
                  </a>
                  <a className="ml-2 text-gray-500">In Stock</a>
                </span>

                <div className="float-right">
                  <div className="custom-number-input h-10 w-32">
                    <label
                      for="custom-input-number"
                      className="w-full text-gray-700 text-sm font-semibold"
                    >
                      Quantity
                    </label>
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                      <button
                        data-action="decrement"
                        className="px-3 cursor-pointer bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full rounded-l w-10 cursor-pointer"
                      >
                        <span
                          className="mx-auto"
                          onClick={() => dispatch(decrement())}
                        >
                          <HiOutlineMinus />
                        </span>
                      </button>

                      <span className="pt-2 bg-slate-300">{count}</span>
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 px-2 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                      >
                        <span
                          className="mx-auto cursor-pointer"
                          onClick={() => dispatch(increment())}
                        >
                          <HiPlus />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container py-10 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Subtotal
            </h1>
            <p className="flex-shrink-0 text-slate-950  border-0 py-2 px-8 text-slate-700 rounded text-lg mt-10 sm:mt-0">
              $ 99.00
            </p>
          </div>
          <button className="w-full bg-blue-400 hover:bg-blue-600 text-slate-50 text-2xl py-3 cursor-pointer px-4 rounded">
            Checkout
          </button>
        </div>
         <Link to="/"><p className="text-center cursor-pointer pb-5">or Continue Shopping </p></Link> 
      </section>
    </div>
  );
}

export default AddToCartItem;
