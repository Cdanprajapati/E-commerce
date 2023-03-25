import React from 'react';
import img1 from '../Assets/lap1.jpg';

function Electronics() {
  return (
    <div>
      <div className="w-100 h-100">
        <div className="text-black pt-3 text-5xl  text-center">
          Electronics Store
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div class="bg-gray-100 rounded-lg">
                  <img
                    class="h-70 rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <h3 class="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                 
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div class="bg-gray-100 rounded-lg">
                  <img
                    class="h-70 rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <h3 class="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Colosseum Roma
                  </h2>
                 
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div class="bg-gray-100 rounded-lg">
                  <img
                    class="h-70 rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <h3 class="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                 
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div class="bg-gray-100 rounded-lg">
                  <img
                    class="h-70 rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <h3 class="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    San Francisco
                  </h2>                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Electronics
