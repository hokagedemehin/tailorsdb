import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
// import Layout from "../../layout/layout";
import { useRouter } from "next/router";
import MenMeasuementForm from "../ClientForm/men/men.form.component";
import WomenMeasuementForm from "../ClientForm/women/women.form.component";
import { SetNewClient } from "../../../services/actions/setNewClient";
import { useUser } from "../../../services/context/userContext";
import MenEditMeasuementForm from "../ClientForm/men/men.edit.form.component";
import WomenEditMeasuementForm from "../ClientForm/women/women.edit.form.component";
import { SetEditClient } from "../../../services/actions/setEditClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientEditDetails = ({ clientDoc }) => {
  const [formValue, setFormValue] = useState({});
  const { userDoc, user } = useUser();
  const router = useRouter();
  // console.log("clients: ", clientDoc);
  // console.log("formValue", formValue);

  // useEffect(() => {

  //   setFormValue(clientDoc[0])
  // }, [clientDoc])

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    setFormValue(clientDoc[0]);
  }, [user, clientDoc]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleFileUpload = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setFormValue({ ...formValue, [name]: value });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.gender || formValue?.gender.length === 0) {
      // console.log("stop send");
      toast.error("💥 Please select a gender! 💥");
    }
    if (formValue?.gender && formValue?.gender.length !== 0) {
      // console.log("send file");
      await SetEditClient(formValue, userDoc, user);
      router.push("/clients");

      // console.log("final Data:", formValue);
    }
    // await SetEditClient(formValue, userDoc);
    // router.push("/clients");

    // console.log("final Data:", formValue);
  };

  return (
    <div>
      <div className="personal_details">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
            {/* <!-- text - start --> */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Edit Client Details
              </h2>

              <p className="max-w-screen-lg text-gray-500 md:text-lg text-center mx-auto">
                Change any field that you want to the right detail or add new
                measurement as necessary
              </p>
            </div>
            {/* <!-- text - end --> */}

            {/* <!-- form - start --> */}
            <form className="max-w-screen-lg grid sm:grid-cols-2 gap-4 mx-auto">
              <div className="sm:col-span-2">
                <label
                  htmlFor="fullName"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  // required="required"
                  value={
                    !formValue ? "" : !formValue ? "" : formValue?.fullName
                  }
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
                  htmlFor="gender"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  // required
                  required="required"
                  value={!formValue ? "" : formValue?.gender}
                  onChange={(e) => handleChange(e)}
                  // autoComplete="gender-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
                >
                  <option value="">Choose Gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
                  value={!formValue ? "" : formValue?.birthDay}
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

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={!formValue ? "" : formValue?.address}
                  onChange={(e) => handleChange(e)}
                  className="w-full h-24 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                ></textarea>
              </div>
            </form>
            {/* <!-- form - end --> */}
            {/* Second form starts */}
            <div className="measure">
              {clientDoc[0]?.gender === "male" ? (
                <MenEditMeasuementForm
                  handleChange={handleChange}
                  handleFileUpload={handleFileUpload}
                  formValue={formValue}
                />
              ) : (
                <WomenEditMeasuementForm
                  handleChange={handleChange}
                  handleFileUpload={handleFileUpload}
                  formValue={formValue}
                />
              )}

              <div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Save
                </button>
              </div>
            </div>
            {/* Second form end */}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ClientEditDetails;
