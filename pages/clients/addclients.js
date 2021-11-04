import { useState } from "react";
import { Tab } from "@headlessui/react";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import MenMeasuementForm from "../../components/clients/ClientForm/men/men.form.component";
import WomenMeasuementForm from "../../components/clients/ClientForm/women/women.form.component";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddNewClient() {
  // let [categories] = useState({
  //   Recent: [
  //     {
  //       id: 1,
  //       title: "Does drinking coffee make you smarter?",
  //       date: "5h ago",
  //       commentCount: 5,
  //       shareCount: 2,
  //     },
  //     {
  //       id: 2,
  //       title: "So you've bought coffee... now what?",
  //       date: "2h ago",
  //       commentCount: 3,
  //       shareCount: 2,
  //     },
  //   ],
  //   Popular: [
  //     {
  //       id: 1,
  //       title: "Is tech making coffee better or worse?",
  //       date: "Jan 7",
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //     {
  //       id: 2,
  //       title: "The most innovative things happening in coffee",
  //       date: "Mar 19",
  //       commentCount: 24,
  //       shareCount: 12,
  //     },
  //   ],
  //   Trending: [
  //     {
  //       id: 1,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       date: "2d ago",
  //       commentCount: 9,
  //       shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       date: "4d ago",
  //       commentCount: 1,
  //       shareCount: 2,
  //     },
  //   ],
  // });

  const [formValue, setFormValue] = useState({
    // fullName: "",
    // PhoneNo: "",
    // gender: "",
    // birthDay: "",
    // photo: "",
    // address: "",
    // bodyLength: "",
    // bodyWidth: "",
    // shoulderWidth: "",
    // neckShortSleeve: "",
    // neckLongSleeve: "",
    // sleeveLength: "",
    // neckWidth: "",
    // wristWidth: "",
    // photo: "",
  });

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

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/clients/success");
    // console.log("final Data:", formValue);
  };
  // console.log(formValue);
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
                    required="required"
                    // value={formValue?.fullName}
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="PhoneNo"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="PhoneNo"
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
                    // value={formValue?.gender}
                    onChange={(e) => handleChange(e)}
                    // autoComplete="gender-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
                  >
                    <option>Choose Gender...</option>
                    <option>Male</option>
                    <option>Female</option>
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
      </Layout>
    </div>
  );
}
