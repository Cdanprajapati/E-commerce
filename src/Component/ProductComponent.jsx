import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, rating } = product;
    return (
      <div class="xl:w-1/4 md:w-1/2 pb-10  p-4 drop-shadow-2xl" key={id}>
        <Link to={`/product/${id}`}>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="h-[300px] w-[100%]">
              <img
                className="rounded w-[full] h-[100%] object-cover object-center mb-6"
                src={image}
                alt="content"
              />
            </div>
            <h3 className="text-blue-500 text-1xl h-[50px]">
              {title.length > 30 ? `${title?.slice(0, 30)}............` : title}
            </h3>
            <hr />
            <h2 className="text-lg text-gray-900 font-medium title-font">
              Price :- {price} $
            </h2>
            <h2 className="text-lg text-gray-900 font-medium title-font">
              Rating Points :- {rating.rate}
            </h2>
            <p className="text-lg text-gray-900 font-medium title-font">
              Count :- {rating.count}
            </p>
            <hr />
            <div className="text-lg text-gray-900 font-medium title-font">
              {" "}
              Read More{" "}
            </div>
            {/* <p class="leading-relaxed text-base">
                          {item.description}
                        </p> */}
            <hr className="pb-2" />
            <button className="rounded-l-lg cursor-pointer text-slate-50 bg-yellow-500 p-2 hover:bg-pink-600 hover:text-slate-500 focus:outline-none focus:ring focus:bg-pink-400 ">
              Add To Cart
            </button>
            <button className="rounded-r-lg cursor-pointer text-slate-50 bg-orange-500 p-2 hover:bg-pink-600 hover:text-slate-500 focus:outline-none focus:ring focus:bg-pink-400 ">
              Buy Now
            </button>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
