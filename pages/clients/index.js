import React from "react";
import ClientsAllListComponent from "../../components/clients/AllClients/clients.allList.component";
import ClientsHeader from "../../components/clients/AllClients/clients.header.components";
import ClientsHero from "../../components/clients/AllClients/clients.hero.component";
import ClientsList from "../../components/clients/AllClients/clients.list.component";
import NoUserClientInterface from "../../components/clients/AllClients/clients.notLoggedIn.component";
import Layout from "../../components/layout/layout";
import { getAllClients } from "../../services/actions/getAllClients";
import { useUser } from "../../services/context/userContext";
import { auth, db } from "../../services/firebase/firebase";
// import PaginationComp from "../../components/utils/pagination";
import { doc, getDoc } from "firebase/firestore";

function Clients(props) {
  // console.log("props: ", props);
  const { user, userDoc } = useUser();
  console.log(userDoc);
  return (
    <Layout
      name="Clients"
      desc="This is where you have all the details of your clients stored or collected"
    >
      <ClientsHero />
      {/* <ClientsHeader /> */}
      {user ? <ClientsAllListComponent /> : <NoUserClientInterface />}
      {/* <ClientsList /> */}
    </Layout>
  );
}

export default Clients;

export async function getServerSideProps() {
  const result = await getAllClients();
  return {
    props: {
      data: result,
    },
  };
}
