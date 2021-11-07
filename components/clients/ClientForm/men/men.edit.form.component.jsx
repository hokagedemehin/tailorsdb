import React from "react";
// import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const MenEditMeasuementForm = ({ handleChange, formValue }) => {
  // const router = useRouter();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   router.push("/clients/success");
  //   console.log("final Data:", formValue);
  // };
  // console.log(formValue);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span className="text-lg sm:text-xl font-bold">Shirt</span>
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
                        htmlFor="bodyLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Body Length
                      </label>
                      <input
                        type="number"
                        name="bodyLength"
                        value={!formValue ? "" : formValue.bodyLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bodyWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Body Width
                      </label>
                      <input
                        type="number"
                        name="bodyWidth"
                        value={!formValue ? "" : formValue.bodyWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
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
                        value={!formValue ? "" : formValue.shoulderWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="neckShortSleeve"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Neck/Short Sleeve Length
                      </label>
                      <input
                        type="number"
                        name="neckShortSleeve"
                        value={!formValue ? "" : formValue.neckShortSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="neckLongSleeve"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Neck/Long Sleeve Length
                      </label>
                      <input
                        type="number"
                        name="neckLongSleeve"
                        value={!formValue ? "" : formValue.neckLongSleeve}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="shirtSleeveLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Shirt Sleeve Length
                      </label>
                      <input
                        type="number"
                        name="shirtSleeveLength"
                        value={!formValue ? "" : formValue.shirtSleeveLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="neckWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Neck Width
                      </label>
                      <input
                        type="number"
                        name="neckWidth"
                        value={!formValue ? "" : formValue.neckWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="shirtCuffWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Shirt Cuffs Width
                      </label>
                      <input
                        type="number"
                        name="shirtCuffWidth"
                        value={!formValue ? "" : formValue.shirtCuffWidth}
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
                        htmlFor="legLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Leg Length / OutSeam
                      </label>
                      <input
                        type="number"
                        name="legLength"
                        value={!formValue ? "" : formValue.legLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="innerLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        InSeam
                      </label>
                      <input
                        type="number"
                        name="innerLength"
                        value={!formValue ? "" : formValue.innerLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="waistWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Waist Width
                      </label>
                      <input
                        type="number"
                        name="waistWidth"
                        value={!formValue ? "" : formValue.waistWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
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
                        value={!formValue ? "" : formValue.thighWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seat"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Seat
                      </label>
                      <input
                        type="number"
                        name="seat"
                        value={!formValue ? "" : formValue.seat}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="knee"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Knee Width
                      </label>
                      <input
                        type="number"
                        name="knee"
                        value={!formValue ? "" : formValue.knee}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rise"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Rise
                      </label>
                      <input
                        type="number"
                        name="rise"
                        value={!formValue ? "" : formValue.rise}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="feetWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Bottom/Feet Width
                      </label>
                      <input
                        type="number"
                        name="feetWidth"
                        value={!formValue ? "" : formValue.feetWidth}
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
                  <span className="text-lg sm:text-xl font-bold">Cap</span>
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
                        htmlFor="headWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Head Width
                      </label>
                      <input
                        type="number"
                        name="headWidth"
                        value={!formValue ? "" : formValue.headWidth}
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
                  <span className="text-lg sm:text-xl font-bold">Suits</span>
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
                        htmlFor="pointToPoint"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Point to Point (Shoulders)
                      </label>
                      <input
                        type="number"
                        name="pointToPoint"
                        value={!formValue ? "" : formValue.pointToPoint}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="chest"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Chest
                      </label>
                      <input
                        type="number"
                        name="chest"
                        value={!formValue ? "" : formValue.chest}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="halfBackLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Half Back Length
                      </label>
                      <input
                        type="number"
                        name="halfBackLength"
                        value={!formValue ? "" : formValue.halfBackLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="waistStomachWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Suit Waist / Stomach
                      </label>
                      <input
                        type="number"
                        name="waistStomachWidth"
                        value={!formValue ? "" : formValue.waistStomachWidth}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="suitLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Suit Length
                      </label>
                      <input
                        type="number"
                        name="suitLength"
                        value={!formValue ? "" : formValue.suitLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="suitSleeveLength"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Suit Sleeve Length
                      </label>
                      <input
                        type="number"
                        name="suitSleeveLength"
                        value={!formValue ? "" : formValue.suitSleeveLength}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="suitCuffsWidth"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Suit Cuffs Width
                      </label>
                      <input
                        type="number"
                        name="suitCuffsWidth"
                        value={!formValue ? "" : formValue.suitCuffsWidth}
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

export default MenEditMeasuementForm;
