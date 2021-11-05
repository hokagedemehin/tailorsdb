import React from "react";

const NoUserClientInterface = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              {/* <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p> */}
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Not Logged In yet
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                Please login to be able to add new clients and also to see your
                list of all your clients
              </p>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-80 md:h-auto  overflow-hidden  relative">
              <img
                src="/clients/notLoggedIn/noUserClientList.svg"
                loading="lazy"
                alt="Not Logged In Yet"
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

export default NoUserClientInterface;
