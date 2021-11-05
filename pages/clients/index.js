import React from "react";
import ClientsHeader from "../../components/clients/AllClients/clients.header.components";
import ClientsHero from "../../components/clients/AllClients/clients.hero.component";
import ClientsList from "../../components/clients/AllClients/clients.list.component";
import NoUserClientInterface from "../../components/clients/AllClients/clients.notLoggedIn.component";
import Layout from "../../components/layout/layout";
import { useUser } from "../../services/context/userContext";
// import PaginationComp from "../../components/utils/pagination";

function Clients() {
  const { user } = useUser();
  return (
    <Layout
      name="Clients"
      desc="This is where you have all the details of your clients stored or collected"
    >
      <ClientsHero />
      {/* <ClientsHeader /> */}
      {false ? <ClientsList /> : <NoUserClientInterface />}
      {/* <ClientsList /> */}
    </Layout>
  );
}

export default Clients;
