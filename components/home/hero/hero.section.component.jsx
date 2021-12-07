import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/clients");
    // console.log(router.push("/services"));
  };
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-8 md:mt-12 xl:mt-16">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            {/* <!-- content - start --> */}
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Very proud to introduce
              </p>
              {/* <div classNameName="relative h-20 w-40">
                <Image
                  src="/logo/logo2.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div> */}
              <div className="py-2">
                <span className="text-2xl sm:text-4xl font-black">
                  Tailors{" "}
                </span>
                <span className="text-2xl sm:text-4xl font-black text-indigo-600">
                  db
                </span>
              </div>
              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Revolutionary way to store client's measurements
              </h1>
              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Get and save all your client's measurements and relevant
                information safely and access them anywhere at anytime
              </p>
              <div className="flex sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a
                  href="#_"
                  onClick={handleClick}
                  className="relative inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    View Clients
                  </span>
                </a>
                {/* <a
                  href="#"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Start now
                </a> */}

                {/* <a
                  href="#"
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Take tour
                </a> */}
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="relative xl:w-5/12 h-48 lg:h-auto lg:w-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="/home/hero/hero6.jpg"
                loading="lazy"
                alt="Hero tailor photo"
                className="w-full h-full object-cover object-center rounded-lg"
              />
              {/* <Image
                src="/home/hero/hero5.jpg"
                layout="fill"
                objectFit="cover"
                alt="image name"
              /> */}
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
