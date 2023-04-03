import React from 'react';
import img1 from '../Assets/jwellery1.png';
import img2 from '../Assets/jwellery2.png';
import img3 from '../Assets/jwellery3.png';
import img4 from '../Assets/jwellery1.png';

function Jwellery() {
  return (
    <div>
      <div>
      <div className="w-100 h-100">
        <div className="text-black pt-3 text-5xl  text-center">
          Jwellery Store
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900 " />
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div className="bg-gray-100 rounded-lg">
                  <img
                    className="h-70 rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <h3 className="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                 
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div className="bg-gray-100 rounded-lg">
                  <img
                    className="h-70 rounded w-full object-cover object-center mb-6"
                    src={img2}
                    alt="content"
                  />
                  <h3 className="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Colosseum Roma
                  </h2>
                 
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div className="bg-gray-100 rounded-lg">
                  <img
                    className="h-70 rounded w-full object-cover object-center mb-6"
                    src={img3}
                    alt="content"
                  />
                  <h3 className="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                 
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 drop-shadow-2xl">
                <div className="bg-gray-100 rounded-lg">
                  <img
                    className="h-70 rounded w-full object-cover object-center mb-6"
                    src={img4}
                    alt="content"
                  />
                  <h3 className="tracking-widest px-6 text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg px-6 text-gray-900 font-medium title-font mb-4">
                    San Francisco
                  </h2>                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Jwellery
