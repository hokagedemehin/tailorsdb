import React from "react";
// import { useRouter } from "next/router";

const Custom404 = () => {
  // const router = useRouter();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push("/");
  //   // console.log(router.push("/services"));
  // };
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Page not found
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              {/* <a
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Go home
              </a> */}
              <a
                href="/"
                className="relative px-6 py-3 font-bold text-black group "
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black rounded-md"></span>
                <span className="relative">Go Home</span>
              </a>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-80 md:h-auto  overflow-hidden  relative">
              <img
                src="/404/404.svg"
                loading="lazy"
                alt="404 Image"
                className="w-full h-full object-contain object-center absolute inset-0"
              />
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
