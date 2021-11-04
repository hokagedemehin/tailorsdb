import React from "react";
import { Disclosure } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ClientsMenDetails from "./clients.men.details..component";
import ClientsWomenDetails from "./clients.women.details..component";
const ClientsAllDetails = ({ props }) => {
  // console.log(props);
  const { gender } = props;
  return (
    <div className="">
      {gender === "male" ? (
        <ClientsMenDetails props={props} />
      ) : (
        <ClientsWomenDetails props={props} />
      )}
    </div>
  );
};

export default ClientsAllDetails;
