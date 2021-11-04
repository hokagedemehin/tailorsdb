import React, { useState } from "react";
import ClientsDetails from "./clients.details.card.component";

const ClientsCard = (props) => {
  const { image, name, phoneNo, gender } = props;
  // console.log(gender);
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
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div className="text-indigo-500 md:text-lg font-bold text-center">
              {name}
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
          props={props}
          gender={gender}
        />
      </div>
    </div>
  );
};

export default ClientsCard;
