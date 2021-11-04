import React from "react";
import { FaSearch } from "react-icons/fa";

const ClientsHeader = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-8 mx-auto mt-4">
      {/* 1) Search and add new button */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-5 space-y-5">
        <div className=" flex-1">
          <div className="bg-white flex items-center rounded-full shadow-md">
            <input
              className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />

            <div className="p-2">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        <div>
          <a
            href="#_"
            className="px-5 py-2.5 relative group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block rounded-lg"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              Add New Client
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;
