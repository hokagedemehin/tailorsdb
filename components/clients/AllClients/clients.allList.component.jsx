import React from "react";
import { useUser } from "../../../services/context/userContext";
import ClientsList from "./clients.list.component";
import NoClientsList from "./clients.noList.components";

const ClientsAllListComponent = () => {
  const { userDoc } = useUser();
  // console.log(userDoc);
  return (
    <div>
      {userDoc?.clientsCount === 0 ? <NoClientsList /> : <ClientsList />}
    </div>
  );
};

export default ClientsAllListComponent;
