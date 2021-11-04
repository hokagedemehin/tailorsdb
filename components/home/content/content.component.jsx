import React from "react";
import Image from "next/image";

const ContentComponent = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-8 md:mt-12 xl:mt-16">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto space-y-10 md:space-y-20">
        <div className="record flex flex-col-reverse md:flex-row h-full">
          <div className="md:flex-1 relative h-44 sm:h-56 md:h-72 lg:h-96 w-full shadow-md overflow-hidden rounded-lg  ">
            <Image
              layout="fill"
              objectFit="cover"
              className=""
              src="/home/content/form.png"
              // src="/profile/prof1.png"
              alt="content image"
            />
          </div>
          <div className="md:flex-1 px-3 lg:px-6 mb-4 md:mb-0">
            <p className="text-2xl lg:text-4xl font-black pt-3 lg:pt-6">
              Record Keeping
            </p>
            <p className="text-md lg:text-lg text-justify text-gray-500 font-semibold pb-3 ">
              {" "}
              Select the right form based on your client needs and collect your
              clients measurement in a more concise way
            </p>
          </div>
        </div>
        <div className="safe flex flex-col-reverse md:flex-row-reverse h-full ">
          <div className="md:flex-1 relative h-44 sm:h-56 md:h-72 lg:h-96 w-full shadow-md overflow-hidden rounded-lg ">
            <Image
              layout="fill"
              objectFit="cover"
              className=""
              src="/home/content/cloud.png"
              // src="/profile/prof1.png"
              alt="content image"
            />
          </div>
          <div className="md:flex-1 px-3 lg:px-6 mb-4 md:mb-0">
            <p className="text-2xl lg:text-4xl font-black pt-3 pb-3  lg:pt-6 lg:pb-6">
              Safe & Secure
            </p>
            <p className="text-md lg:text-lg text-justify text-gray-500 font-semibold pb-3 ">
              {" "}
              Never lose your clients measurements again. All information
              collected is stored in a safe and robust database that can scale
              on request
            </p>
          </div>
        </div>
        <div className="search flex flex-col-reverse md:flex-row h-full ">
          <div className="md:flex-1 relative h-44 sm:h-56 md:h-72 lg:h-96 w-full shadow-md overflow-hidden rounded-lg ">
            <Image
              layout="fill"
              objectFit="cover"
              className=""
              src="/home/content/search.png"
              // src="/profile/prof1.png"
              alt="content image"
            />
          </div>
          <div className="md:flex-1 px-3 lg:px-6 mb-4 md:mb-0">
            <p className="text-2xl lg:text-4xl font-black pt-3 pb-3  lg:pt-6 lg:pb-6">
              Quick Search
            </p>
            <p className="text-md lg:text-lg text-justify text-gray-500 font-semibold pb-3 ">
              {" "}
              Easily search through your list of clients and find the right
              details that you need in seconds
            </p>
          </div>
        </div>
        <div className="screens flex flex-col-reverse md:flex-row-reverse h-full ">
          <div className="md:flex-1 relative h-44 sm:h-56 md:h-72 lg:h-96 w-full shadow-md overflow-hidden rounded-lg ">
            <Image
              layout="fill"
              objectFit="cover"
              className=""
              src="/home/content/allscreens.png"
              // src="/profile/prof1.png"
              alt="content image"
            />
          </div>
          <div className="md:flex-1 px-3 lg:px-6 mb-4 md:mb-0">
            <p className="text-2xl lg:text-4xl font-black pt-3 pb-3  lg:pt-6 lg:pb-6">
              Full Access
            </p>
            <p className="text-md lg:text-lg text-justify text-gray-500 font-semibold pb-3 ">
              {" "}
              Access all your clients measurements from any device, any where in
              the world at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
