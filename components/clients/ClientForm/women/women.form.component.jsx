import React from "react";
// import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const WomenMeasuementForm = ({ handleChange, formValue }) => {
  // const router = useRouter();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   router.push("/clients/success");
  //   console.log("final Data:", formValue);
  // };
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span className="text-lg sm:text-xl font-bold">
                    Gown / Blouse
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <form className="max-w-screen-lg grid sm:grid-cols-2 gap-4 mx-auto">
                    <div>
                      <label
                        htmlFor="shoulderWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Shoulder Width
                      </label>
                      <input
                        type="number"
                        name="shoulderWidth"
                        // value={formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bustAndBustPoint"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Bust / Bust Point
                      </label>
                      <input
                        type="number"
                        name="bustAndPoint"
                        // value={formValue.bodyWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="underBustAndPoint"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Underbust / Underbust Point
                      </label>
                      <input
                        type="number"
                        name="underBustAndPoint"
                        // value={formValue.shoulderWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="naturalWaist"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Natural Waist / True Waist
                      </label>
                      <input
                        type="number"
                        name="naturalWaist"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hipMeasurement"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Hip Measurement
                      </label>
                      <input
                        type="number"
                        name="hipMeasurement"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="highestHipPoint"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Highest Hip Point
                      </label>
                      <input
                        type="number"
                        name="highestHipPoint"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="frontLengthBodice"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Front Length Bodice
                      </label>
                      <input
                        type="number"
                        name="frontLengthBodice"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="backLengthBodice"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Back Length Bodice
                      </label>
                      <input
                        type="number"
                        name="backLengthBodice"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fullLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Full Length
                      </label>
                      <input
                        type="number"
                        name="fullLength"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sleeveLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Sleeve Length
                      </label>
                      <input
                        type="number"
                        name="sleeveLength"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sleeveWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Sleeve Width
                      </label>
                      <input
                        type="number"
                        name="sleeveWidth"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cuffWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Cuff Width
                      </label>
                      <input
                        type="number"
                        name="cuffWidth"
                        // value={formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                  </form>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span className="text-lg sm:text-xl font-bold">Skirt</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <form className="max-w-screen-lg grid sm:grid-cols-2 gap-4 mx-auto">
                    <div>
                      <label
                        htmlFor="topLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Top Length
                      </label>
                      <input
                        type="number"
                        name="topLength"
                        // value={formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="shortLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Short Length
                      </label>
                      <input
                        type="number"
                        name="shortLength"
                        // value={formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="skirtLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Skirt Length
                      </label>
                      <input
                        type="number"
                        name="skirtLength"
                        // value={formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                  </form>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span className="text-lg sm:text-xl font-bold">Trousers</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <form className="max-w-screen-lg grid sm:grid-cols-2 gap-4 mx-auto">
                    <div>
                      <label
                        htmlFor="thighWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Thigh Width
                      </label>
                      <input
                        type="number"
                        name="thighWidth"
                        // value={formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inseamLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        inseam Length
                      </label>
                      <input
                        type="number"
                        name="inseamLength"
                        // value={formValue.bodyWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="outseamLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Outseam Length
                      </label>
                      <input
                        type="number"
                        name="outseamLength"
                        // value={formValue.shoulderWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                  </form>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default WomenMeasuementForm;
