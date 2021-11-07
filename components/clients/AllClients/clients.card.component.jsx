import React, { useState, useEffect } from "react";
import ClientsDetails from "./clients.details.card.component";
import { useUser } from "../../../services/context/userContext";
import ClientEditDetails from "./clients.edit.details.component";
// import { getAllClients } from "../../../services/actions/getAllClients";

const ClientsCard = ({ allDetails }) => {
  const { image, fullName, phoneNo } = allDetails;
  // console.log(allDetails);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="">
        {/* <!-- person - start --> */}
        <div
          onClick={openModal}
          className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8 shadow-sm cursor-pointer transition duration-200 ease-in hover:scale-105 "
        >
          <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img
              src={image}
              loading="lazy"
              alt={fullName}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div className="text-indigo-500 md:text-lg font-bold text-center">
              {fullName}
            </div>
            <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
              {phoneNo}
            </p>
          </div>
        </div>
        {/* <!-- person - end --> */}
        <ClientsDetails
          isOpen={isOpen}
          closeModal={closeModal}
          allDetails={allDetails}
        />
        {/* <ClientEditDetails allDetails={allDetails} /> */}
      </div>
    </div>
  );
};

export default ClientsCard;
