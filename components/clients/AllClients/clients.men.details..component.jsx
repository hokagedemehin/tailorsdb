import React from "react";
import { Disclosure } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
const ClientsMenDetails = ({ allDetails }) => {
  // console.log(allDetails);
  const {
    bodyLength,
    bodyWidth,
    chest,
    cuffsWidth,
    feetWidth,
    halfBackLength,
    headWidth,
    innerLength,
    knee,
    legLength,
    neckShortSleeve,
    neckLongSleeve,
    neckWidth,
    pointToPoint,
    rise,
    seat,
    shoulderWidth,
    suitLength,
    sleeveLength,
    thighWidth,
    waistStomachWidth,
    waistWidth,
    wristWidth,
  } = !allDetails ? {} : allDetails;
  return (
    <div className="grid grid-cols-2 gap-2 text-sm text-left">
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
                    <span>{bodyLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Body Width: </span>
                    <span>{bodyWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Shoulder Width: </span>
                    <span>{shoulderWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Short Sleeve Length:{" "}
                    </span>
                    <span>{neckShortSleeve}</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Neck/Long Sleeve Length:{" "}
                    </span>
                    <span>{neckLongSleeve}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sleeve Length: </span>
                    <span>{sleeveLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Neck Width: </span>
                    <span>{neckWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Cuffs Width: </span>
                    <span>{cuffsWidth}</span>
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
                    <span className="font-semibold">
                      Leg Length / OutSeam:{" "}
                    </span>
                    <span>{legLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">InSeam: </span>
                    <span>{innerLength}</span>
                  </div>

                  <div>
                    <span className="font-semibold">Waist Width: </span>
                    <span>{waistWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Thigh Width: </span>
                    <span>{thighWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Seat: </span>
                    <span>{seat}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Knee Width: </span>
                    <span>{knee}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Rise: </span>
                    <span>{rise}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Bottom/Feet Width: </span>
                    <span>{feetWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Waist Width: </span>
                    <span>{waistWidth}</span>
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
                    <span className="font-semibold">Head Width: </span>
                    <span>{headWidth}</span>
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
                    <span className="font-semibold">
                      Point to Point (Shoulders):{" "}
                    </span>
                    <span>{pointToPoint}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Chest: </span>
                    <span>{chest}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Half Back Length: </span>
                    <span>{halfBackLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Suit Waist / Stomach:{" "}
                    </span>
                    <span>{waistStomachWidth}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Suit Length: </span>
                    <span>{suitLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Sleeve Length: </span>
                    <span>{sleeveLength}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Cuffs Width: </span>
                    <span>{cuffsWidth}</span>
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
