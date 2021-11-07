import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Layout from "../../../../components/layout/layout";
import { useRouter } from "next/router";
import MenMeasuementForm from "../../../../components/clients/ClientForm/men/men.form.component";
import WomenMeasuementForm from "../../../../components/clients/ClientForm/women/women.form.component";
import { SetNewClient } from "../../../../services/actions/setNewClient";
import { useUser } from "../../../../services/context/userContext";
import { GetSingleClient } from "../../../../services/actions/getSingleClient";
import ClientEditDetails from "../../../../components/clients/AllClients/clients.edit.details.component";

const EditClientDetails = (props) => {
  // const { clientFile } = data;
  // console.log(props);
  const { id } = props?.params;
  const { user, allDocs } = useUser();
  const [clientDoc, setClientDoc] = useState({});
  const router = useRouter();
  // console.log(allDocs);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  useEffect(async () => {
    if (allDocs) {
      const clientDetail = allDocs.filter((val) => {
        if (val.id.includes(id)) {
          return val;
        }
      });
      setClientDoc(clientDetail);
    }
  }, [allDocs, id]);

  // console.log(clientDoc);

  return (
    <Layout
      name="Edit Client Details"
      desc="This will provide a form to edit cleints details and measurements"
    >
      {clientDoc ? (
        <ClientEditDetails clientDoc={clientDoc} />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default EditClientDetails;

export const getServerSideProps = ({ params }) => {
  // const { id, tailorID } = params;
  // console.log(params);
  // const clientFile = await GetSingleClient(id, tailorID);
  // if (!clientFile) {
  //   return { notFound: true };
  // }
  return { props: { params } };
};
