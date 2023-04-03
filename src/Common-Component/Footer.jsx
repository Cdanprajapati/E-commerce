import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-slate-500 w-100 h-content-fit">
        <h1 className="text-center text-slate-300 text-6xl pt-6">Eflyer</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <div className="flex justify-between">
              <div className="text-slate-200 text-3xl pl-6">Email</div>
              <div className="text-slate-200 text-3xl pr-6">Subscribe</div>
            </div>
            <div className="text-center text-slate-200">
              <hr />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <a className="mr-5 text-slate-50 tex-2xl hover:text-orange-300">
                    Best Sellers
                  </a>
                  <a className="mr-5 text-slate-50 tex-2xl hover:text-orange-300">
                    Gift Ideas
                  </a>
                  <a className="mr-5 text-slate-50 tex-2xl hover:text-orange-300">
                    Releases
                  </a>
                  <a className="mr-5 text-slate-50 tex-2xl hover:text-orange-300">
                    Today's Deals
                  </a>
                  <a className="mr-5 text-slate-50 tex-2xl hover:text-orange-300">
                    Customer Service
                  </a>
                </nav>
              </div>
            </header>
            <p className="text-3xl text-center">
              Help Line Number : +1 1800 1200 1200
            </p>

            <div className="text-center py-6">
              © 2045 All Rights Reserved. By HTML Design
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
