import React from "react";
import ClientsHeader from "../../components/clients/AllClients/clients.header.components";
import ClientsHero from "../../components/clients/AllClients/clients.hero.component";
import ClientsList from "../../components/clients/AllClients/clients.list.component";
import Layout from "../../components/layout/layout";
// import PaginationComp from "../../components/utils/pagination";

function Clients() {
  return (
    <Layout
      name="Clients"
      desc="This is where you have all the details of your clients stored or collected"
    >
      <ClientsHero />
      {/* <ClientsHeader /> */}
      <ClientsList />
    </Layout>
  );
}

export default Clients;
