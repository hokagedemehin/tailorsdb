import React, { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ClientsWomenDetails from "./clients.women.details..component";
import ClientsMenDetails from "./clients.men.details..component";
import ClientsAllDetails from "./clients.all.details..component";
const ClientsDetails = ({ isOpen, closeModal, props, gender }) => {
  const { name } = props;
  // console.log(gender);
  return (
    <div>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {name}
                </Dialog.Title>
                <Dialog.Description as="div" className="mt-2">
                  <div className="grid gird-cols-2 gap-2 text-sm text-left">
                    <div>
                      <span className="font-semibold">Phone No: </span>
                      <span>08065213654</span>
                    </div>
                    <div>
                      <span className="font-semibold">Birthday: </span>
                      <span>9 May</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold">Address: </span>
                      <span>40 Admiralty way, Lekki Phase 1</span>
                    </div>
                    <div className="col-span-2">
                      <ClientsAllDetails props={props} />
                    </div>
                  </div>
                </Dialog.Description>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ClientsDetails;
