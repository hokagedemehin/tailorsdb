import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import MenMeasuementForm from "../../components/clients/ClientForm/men/men.form.component";
import WomenMeasuementForm from "../../components/clients/ClientForm/women/women.form.component";
import { SetNewClient } from "../../services/actions/setNewClient";
import { useUser } from "../../services/context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetImageClient } from "../../services/actions/setImageClient";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddNewClient() {
  const [formValue, setFormValue] = useState({});
  const [imgValue, setImgValue] = useState({});
  const [newDocID, setNewDocID] = useState(null);
  const { userDoc, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleFileUpload = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    // setFormValue({ ...formValue, [name]: value });
    setImgValue({ ...imgValue, [name]: value });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleNewChange = (e) => {
    const name = e.target.name === "measurementName" ? e.target.value : "";
    const value = e.target.name === "measurementValue" ? e.target.value : "";
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
      await SetNewClient(formValue, userDoc, user, imgValue);
      // if (imgValue?.photo) {
      //   console.log(formValue);
      //   // console.log(imgValue);
      //   await SetImageClient(imgValue, formValue, user);
      //   // EditImageTailorProfile(imgValue, user);
      // }
      router.push("/clients/success");

      // console.log("final Data:", formValue);
    }
  };
  console.log(formValue);
  return (
    <div>
      <Layout
        name="Add New Client"
        desc="This will provide a new form to add new cleints and record their measurements"
      >
        <div className="personal_details">
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
              {/* <!-- text - start --> */}
              <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                  Create New Clients
                </h2>

                <p className="max-w-screen-lg text-gray-500 md:text-lg text-center mx-auto">
                  Please collect as much information as you can from the client
                  so as to have the right information stored in the database.
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
                    // value={formValue?.fullName}
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
                    // value={formValue?.PhoneNo}
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
                    // value={formValue?.gender}
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
                    // value={formValue.birthDay}
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
                    // value={formValue.address}
                    onChange={(e) => handleChange(e)}
                    className="w-full h-24 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  ></textarea>
                </div>
              </form>
              {/* <!-- form - end --> */}
            </div>
          </div>
        </div>

        <div className="tabs_Selcted">
          <div className="w-full max-w-screen-lg mx-auto py-8 px-4 md:px-8">
            <Tab.Group>
              <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Men
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Women
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    "bg-white rounded-xl p-1",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-50 ring-white ring-opacity-60"
                  )}
                >
                  <div className="male-form max-w-screen-lg px-4 md:px-8 mx-auto">
                    <MenMeasuementForm
                      handleChange={handleChange}
                      handleFileUpload={handleFileUpload}
                      handleNewChange={handleNewChange}
                      // formValue={formValue}
                    />
                    <div className="flex">
                      <div className="sm:col-span-2 flex justify-between items-center">
                        <button
                          onClick={(e) => handleSubmit(e)}
                          className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "bg-white rounded-xl p-1",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-50 ring-white ring-opacity-60"
                  )}
                >
                  <div className="women-form max-w-screen-lg px-4 md:px-8 mx-auto">
                    <WomenMeasuementForm
                      handleChange={handleChange}
                      handleFileUpload={handleFileUpload}
                      // formValue={formValue}
                    />
                    <div className="flex">
                      <div className="sm:col-span-2 flex justify-between items-center">
                        <button
                          onClick={(e) => handleSubmit(e)}
                          className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <ToastContainer />
      </Layout>
    </div>
  );
}
