import React from "react";
import { Disclosure } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
const ClientsMenDetails = ({ allDetails }) => {
  // console.log(allDetails);
  const { fullName } = allDetails;
  return (
    <div className="grid gird-cols-2 gap-2 text-sm text-left">
      <div className="col-span-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-lg sm:text-xl  font-bold">Shirt</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div>
                    <span className="font-semibold">Body Length: </span>
                    <span>14</span>
                  </div>
                  <div>
                    <span className="font-semibold">Body Width: </span>
                    <span>23</span>
                  </div>
                  <div>
                    <span className="font-semibold">Shoulder Width: </span>
                    <span>56</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Short Sleeve Length:{" "}
                    </span>
                    <span>28</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Long Sleeve Length:{" "}
                    </span>
                    <span>33</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sleeve Length: </span>
                    <span>23</span>
                  </div>
                  <div>
                    <span className="font-semibold">Neck Width: </span>
                    <span>10</span>
                  </div>
                  <div>
                    <span className="font-semibold">Wrist Width: </span>
                    <span>9</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-lg sm:text-xl font-bold">Trousers</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div>
                    <span className="font-semibold">Leg Length: </span>
                    <span>14</span>
                  </div>
                  <div>
                    <span className="font-semibold">Thigh Width: </span>
                    <span>23</span>
                  </div>
                  <div>
                    <span className="font-semibold">Feet Width: </span>
                    <span>56</span>
                  </div>
                  <div>
                    <span className="font-semibold">Waist Width: </span>
                    <span>28</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-lg sm:text-xl font-bold">Cap</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div>
                    <span className="font-semibold">Cap: </span>
                    <span>14</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-lg sm:text-xl font-bold">Suits</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div>
                    <span className="font-semibold">Body Length: </span>
                    <span>14</span>
                  </div>
                  <div>
                    <span className="font-semibold">Body Width: </span>
                    <span>23</span>
                  </div>
                  <div>
                    <span className="font-semibold">Shoulder Width: </span>
                    <span>56</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Short Sleeve Length:{" "}
                    </span>
                    <span>28</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Long Sleeve Length:{" "}
                    </span>
                    <span>33</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sleeve Length: </span>
                    <span>23</span>
                  </div>
                  <div>
                    <span className="font-semibold">Neck Width: </span>
                    <span>10</span>
                  </div>
                  <div>
                    <span className="font-semibold">Wrist Width: </span>
                    <span>9</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default ClientsMenDetails;
