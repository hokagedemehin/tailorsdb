import React from "react";
import { useRouter } from "next/router";

const NoClientsList = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/clients/addclients");
  };

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
                No Saved Client
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                Please add new clients now and access them quickly and easily
                from anywhere at anytime
              </p>
              <a
                href="!#"
                onClick={(e) => handleClick(e)}
                className="relative px-6 py-3 font-bold text-black group "
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black rounded-md"></span>
                <span className="relative">Add New Clients</span>
              </a>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-80 md:h-auto  overflow-hidden  relative">
              <img
                src="/clients/noClient/noClients.svg"
                loading="lazy"
                alt="No Clients Available"
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

export default NoClientsList;
