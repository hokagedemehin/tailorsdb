import React from "react";

const AboutPageComponent = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            {/* <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our competitive advantage
            </h2> */}

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              We want to provide the right tools for you to be able to zero in
              on what matters in your business
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Growth
                </h3>
                <p className="text-gray-500 mb-2">
                  Focus more on what really matters to your business so as to
                  grow your clientele and revenue.
                </p>
                {/* <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a> */}
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Security
                </h3>
                <p className="text-gray-500 mb-2">
                  Safely secure your clients measurements with us and access
                  them directly anytime you need.
                </p>
                {/* <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a> */}
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
                <p className="text-gray-500 mb-2">
                  All your client's information is now in the cloud which makes
                  it faster and easier to add new clients
                </p>
                {/* <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a> */}
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
                <p className="text-gray-500 mb-2">
                  Quickly search and retrieve any client detail in seconds from
                  your phone.
                </p>
                {/* <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a> */}
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            {/* <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Support
                </h3>
                <p className="text-gray-500 mb-2">
                  Filler text is dummy text which has no meaning however looks
                  very similar to real text.
                </p>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div> */}
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            {/* <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Dark Mode
                </h3>
                <p className="text-gray-500 mb-2">
                  Filler text is dummy text which has no meaning however looks
                  very similar to real text.
                </p>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div> */}
            {/* <!-- feature - end --> */}
          </div>
        </div>
      </div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-8 md:mt-12 xl:mt-16">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            {/* <!-- content - start --> */}
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-justify lg:text-left lg:py-12 xl:py-24">
              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 sm:text-center">
                What is Tailor's db motivation
              </h1>
              <p className="lg:w-11/12 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Our goal is to provide solutions that aloow better focus on work
                processes that matter, therby helping you grow your revenue.{" "}
                <br /> With us, the problem of lost client measurements and
                information is solved, as all information are kept in a safe and
                secure database for quick reference any time and on any device.{" "}
                <br /> Being part of your business success is key for us, which
                is why we are providing you with the necessary support and tools
                to reach your goals.
              </p>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="relative xl:w-5/12 h-48 lg:h-auto lg:w-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="/about/tailors1.jpg"
                loading="lazy"
                alt="About page section"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
      ;
    </div>
  );
};

export default AboutPageComponent;
