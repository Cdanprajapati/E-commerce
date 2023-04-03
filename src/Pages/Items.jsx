import React from "react";
import ProductComponent from "../Component/ProductComponent";

const ProductPage = () => {
 
  return (
    <div>
      <div className="w-full">
        <div className="text-black pt-3 text-5xl  text-center">
          T-Shirt Store
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <ProductComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
