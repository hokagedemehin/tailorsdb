import React, { useState } from "react";
// import { auth } from "../../services/firebase/firebase";
import { useRouter } from "next/router";
// import { useUser } from "../../services/context/userContext";
// import { SetNewGoogleTailor } from "../../services/actions/setGoogleTailor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetResetPassword } from "../../services/actions/setResetPassword";

const ResetComponent = () => {
  const [formValue, setFormValue] = useState({});
  // const { user } = useUser();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const router = useRouter();

  const handleReset = async (e) => {
    e.preventDefault();
    // console.log("formvalue sent", formValue.email);
    await SetResetPassword(formValue);
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    // console.log("final Data:", formValue);
  };

  return (
    <div>
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Reset Password
            </h2>

            <form className="max-w-lg border rounded-lg mx-auto">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    htmlFor="email"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <button
                  onClick={(e) => handleReset(e)}
                  className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Reset Password
                </button>
                <button
                  onClick={(e) => handleClick(e, "/")}
                  className="block ring-2 hover:bg-gray-400 hover:text-white active:bg-gray-400 focus-visible:ring ring-gray-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Back to Home
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetComponent;
