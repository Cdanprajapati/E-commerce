import React, { useState, useEffect } from "react";
import axios from "axios";

function Items() {
  const [post, setPost] = useState(null);

  const baseURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <div>
      <div className="w-full h-96">
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
              {post.map((item, i) => {
                console.log(item.title.length)

                return (
                  <div class="xl:w-1/4 md:w-1/2  p-4 drop-shadow-2xl" key={i}>
                    <div class="bg-gray-100 p-6 rounded-lg">
                      <div className="h-[300px] w-[100%]">
                        <img
                          class="rounded w-[full] h-[100%] object-cover object-center mb-6"
                          src={item.image}
                          alt="content"
                        />
                      </div>
                      <h3 class="text-blue-500 text-1xl h-[50px]">{item.title.length > 30 ?  `${item?.title?.slice(0,30)}............`  : item.title}</h3>
                      <hr />
                      <h2 class="text-lg text-gray-900 font-medium title-font">
                        Price :- {item.price} $
                      </h2>
                      <h2 class="text-lg text-gray-900 font-medium title-font">
                        Rating Points :- {item.rating.rate}
                      </h2>
                      <p className="text-lg text-gray-900 font-medium title-font">
                        Count :- {item.rating.count}
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
                      <button class="rounded-l-lg cursor-pointer text-slate-50 bg-yellow-500 p-2 hover:bg-pink-600 focus:outline-none focus:ring focus:bg-pink-400 ">
                        Add To Cart
                      </button>
                      <button class="rounded-r-lg cursor-pointer text-slate-50 bg-orange-500 p-2 hover:bg-pink-600 focus:outline-none focus:ring focus:bg-pink-400 ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Items;
