import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const FooterNav = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              {/* <!-- logo - start --> */}
              <div className="lg:-mt-2 ">
                <a
                  href="!#"
                  className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2"
                  aria-label="logo"
                >
                  <img
                    src="/logo/tailorlogo2.png"
                    // src="/home/footer/footer1.png"
                    width="80"
                    loading="lazy"
                    alt="Footer logo"
                    className=""
                  />
                  Tailors db
                </a>
              </div>
              {/* <!-- logo - end --> */}

              <p className="text-gray-400 sm:pr-8 mb-6 text-xs">
                Safe & secure way to store your clients measurements forever
              </p>

              {/* <!-- social - start --> */}
              <div className="flex gap-4">
                <a href="!#" className="transition duration-100">
                  <FaFacebook className={`text-[#4267B2] w-5 h-5`} />
                </a>
                <a href="!#">
                  <FaTwitter className={`text-[#00acee] w-5 h-5 `} />
                </a>
                <a href="!#">
                  <FaInstagram
                    className={` bg-gradient-to-b from-[#8a3ab9] via-[#fbad50] to-[#cd486b] w-5 h-5 rounded-lg text-white`}
                  />
                </a>
                <a href="!#">
                  <FaLinkedin className={`text-[#0077b5]  w-5 h-5 `} />
                </a>
                <a href="!#">
                  <FaWhatsapp
                    className={`bg-[#25d366] rounded-lg text-white  w-5 h-5 `}
                  />
                </a>
              </div>
              {/* <!-- social - end --> */}
            </div>

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Products
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Overview
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Solutions
                  </a>
                </div>

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Pricing
                  </a>
                </div> */}

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Customers
                  </a>
                </div> */}
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Company
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    About
                  </a>
                </div>

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Investor Relations
                  </a>
                </div> */}

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Jobs
                  </a>
                </div> */}

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Press
                  </a>
                </div> */}

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Contact
                  </a>
                </div>

                {/* <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Documentation
                  </a>
                </div> */}

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Chat
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    FAQ
                  </a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Legal
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Terms of Service
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Privacy Policy
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Cookie settings
                  </a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}
          </div>

          <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-4">
            © {new Date().getFullYear()} - Tailors db. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterNav;
