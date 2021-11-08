import React, { useState } from "react";
import TailorsImageCard from "./tailors.image.card.component";
import { useRouter } from "next/router";
import { EditTailorProfile } from "../../services/actions/editTailorProfile";
import { EditImageTailorProfile } from "../../services/actions/editImageTailorProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TailorsEditProfileComponent = ({ userDoc, user }) => {
  // console.log(userDoc);
  // const { firstName, lastName, image } = !userDoc ? {} : userDoc;
  const [formValue, setFormValue] = useState(userDoc);
  const [imgValue, setImgValue] = useState(null);
  console.log("formValu: ", formValue);
  const router = useRouter();
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    // console.log("router: ", router.pathname);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleFileUpload = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setImgValue({ ...imgValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(imgValue?.photo);

    await EditTailorProfile(formValue, user);
    if (imgValue?.photo) {
      await EditImageTailorProfile(imgValue, user);
      // EditImageTailorProfile(imgValue, user);
    }
    router.push("/profile");
  };

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
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <TailorsImageCard userDoc={userDoc} />
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 md:mx-2 h-full">
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
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="">
                      <label
                        htmlFor="firstName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        // required="required"
                        value={!formValue ? "" : formValue?.firstName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="lastName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        // required="required"
                        value={!formValue ? "" : formValue?.lastName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNo"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNo"
                        onChange={(e) => handleChange(e)}
                        value={!formValue ? "" : formValue?.phoneNo}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div className="">
                      <label
                        htmlFor="birthDay"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Birthday
                      </label>
                      <input
                        name="birthDay"
                        type="date"
                        onChange={(e) => handleChange(e)}
                        value={!formValue ? "" : formValue.birthDay}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div className="">
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
                          {/* <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button> */}
                          <input
                            type="file"
                            name="photo"
                            id="photo"
                            onChange={(e) => handleFileUpload(e)}
                            className=" w-full ml-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            // w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="block w-full transform transition duration-200 ease-in  text-indigo-800 text-base font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 ring-1"
                >
                  Submit
                </button>
                <button
                  onClick={(e) => handleClick(e, "/profile")}
                  className="block w-full transform transition duration-200 ease-in  text-indigo-800 text-base font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 ring-1"
                >
                  Back
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TailorsEditProfileComponent;
