import React from "react";
import { useRouter } from "next/router";

const CallToActionComponent = () => {
  const router = useRouter();
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    // console.log("router: ", router.pathname);
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
            {/* <!-- image - start --> */}
            <div className="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
              <img
                src="/home/actioncall/action2.jpg"
                loading="lazy"
                alt="Call to action"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- content - start --> */}
            <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
              <h2 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                Join Now
              </h2>

              <p className="max-w-md text-gray-600 mb-8 text-base md:text-lg">
                Begin your journey in discovering a flexible way to get and
                store your clients measurements forever
              </p>

              <div className="mt-auto">
                {/* <a
                  href="#"
                  className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Contact support
                </a> */}
                <a
                  href="#_"
                  onClick={(e) => handleClick(e, "/register")}
                  className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Start Now</span>
                </a>
              </div>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionComponent;
