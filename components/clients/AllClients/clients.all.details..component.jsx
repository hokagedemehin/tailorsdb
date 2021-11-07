import React from "react";
import { Disclosure } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ClientsMenDetails from "./clients.men.details..component";
import ClientsWomenDetails from "./clients.women.details..component";

const ClientsAllDetails = ({ allDetails }) => {
  // console.log(props);
  const { gender } = allDetails;
  const headWidth = allDetails?.headWidth;
  return (
    <div className="">
      {gender === "male" || headWidth ? (
        <ClientsMenDetails allDetails={allDetails} />
      ) : (
        <ClientsWomenDetails allDetails={allDetails} />
      )}
    </div>
  );
};

export default ClientsAllDetails;
