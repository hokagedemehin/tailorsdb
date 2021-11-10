import React from "react";
import TailorsLoadingImageCard from "./tailors.image.loading.card.component";

const TailorsLoadingEditProfileComponent = () => {
  return (
    <div className="">
      <div className="">
        <div className="max-w-screen-xl mx-auto my-5 p-5">
          <div className="m-5 text-center">
            <span className="text-4xl font-black text-gray-400">Edit </span>{" "}
            <span className="text-4xl font-black text-indigo-500 ">
              {" "}
              Profile
            </span>
          </div>
          <div className="md:flex no-wrap md:-mx-2 gap-6">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              {/* <TailorsImageCard userDoc={userDoc} /> */}
              <TailorsLoadingImageCard />
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-7/12 md:mx-2 h-full">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="bg-white p-3 border-t-4 border-indigo-400 rounded-lg shadow-md">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-gray-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 gap-4 text-sm animate-pulse">
                    <div className="mt-4">
                      <label
                        htmlFor="firstName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        First name
                      </label>
                      <div className="px-4 py-2 h-full w-full bg-gray-300"></div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="lastName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Last name
                      </label>
                      <div className="px-4 py-2 h-full w-full bg-gray-300"></div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="phoneNo"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="px-4 py-2 h-full w-full bg-gray-300"></div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="birthDay"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Birthday
                      </label>
                      <div className="px-4 py-2 h-full w-full bg-gray-300"></div>
                    </div>

                    <div className="mt-4">
                      <div>
                        <label
                          htmlFor="photo"
                          className="inline-block text-gray-800 text-sm sm:text-base mb-1"
                        >
                          Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            {true ? (
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            ) : (
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            )}
                          </span>
                          <div className="ml-2 px-4 py-2 h-full w-full bg-gray-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorsLoadingEditProfileComponent;
