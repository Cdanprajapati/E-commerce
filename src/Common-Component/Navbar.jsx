import React from "react";

function Navbar() {
  return (
    <div>
      <div className="grid grid-cols-6 bg-slate-400 gap-4">
        <div className="col-start-2 col-span-4">
          <div className="hidden lg:block">
            <header className="text-gray-600 bg-slate-700 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <a className="mr-5 text-slate-50 hover:text-orange-300">
                    Best Sellers
                  </a>
                  <a className="mr-5 text-slate-50 hover:text-orange-300">
                    Gift Ideas
                  </a>
                  <a className="mr-5 text-slate-50 hover:text-orange-300">
                    Releases
                  </a>
                  <a className="mr-5 text-slate-50 hover:text-orange-300">
                    Today's Deals
                  </a>
                  <a className="mr-5 text-slate-50 hover:text-orange-300">
                    Customer Service
                  </a>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
