import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../services/context/userContext";
import Head from "next/head";

const SuccessPage = () => {
  const router = useRouter();
  // const router = useRouter();
  const { user } = useUser();
  // console.log(user);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/clients");
    // console.log(router.push("/services"));
  };
  return (
    <div>
      <Head>
        <title>Tailors DB - Success</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="New Clients has been added successfully and you can now view the new client in the client list page"
        />
        <link rel="icon" href="/logo/tailorlogo6.png" />
      </Head>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              {/* <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p> */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 sm:h-28 sm:w-28 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Client Measurement successfully saved.
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                Please go back to your list of clients to see the details of
                your new client
              </p>

              {/* <a
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Go home
              </a> */}
              <button
                onClick={(e) => handleClick(e)}
                className="relative px-6 py-3 font-bold text-white group "
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-600 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black rounded-md"></span>
                <span className="relative">See Clients</span>
              </button>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-80 md:h-auto  overflow-hidden  relative">
              <img
                src="/clients/success/success1.svg"
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

export default SuccessPage;
