import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "../Component/ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div>
      <div className="w-full">
        <div className="text-black pt-3 text-5xl  text-center">
          T-Shirt Store
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4">
              <ProductComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
