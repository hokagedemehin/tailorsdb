import React, { useState, useEffect } from "react";
import ClientsCard from "./clients.card.component";
const data = require("../../data/dummy-client.json");
import { useRouter } from "next/router";
import ClientSearch from "./client.search.component";
import PaginationComp from "../../utils/pagination";
import { useUser } from "../../../services/context/userContext";
// import { db } from "../../../services/firebase/firebase";
// import { useUser } from "../../../services/context/userContext";
import { getAllClients } from "../../../services/actions/getAllClients";
const ClientsList = (props) => {
  const { allDocs } = useUser();
  // console.log(allDocs);
  // const [clients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/clients/addclients");
  };

  // const data1 = [...data];
  const data1 = [];
  if (allDocs) {
    data1 = [...allDocs];
  }
  const data2 = data1.filter((val) => {
    if (searchTerm == "" || searchTerm.length === 0) {
      return val;
    } else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });
  // console.log("data length:", data1.length);

  const indexOfLastClient = currentPage * clientPerPage;
  const indexOfFirstClient = indexOfLastClient - clientPerPage;
  const currentClients = data2?.slice(indexOfFirstClient, indexOfLastClient);

  // console.log("currentClients:", currentClients);

  const count = Math.ceil(data2.length / clientPerPage);
  // console.log("count: ", count);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <ClientSearch
            setSearchTerm={setSearchTerm}
            handleClick={handleClick}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {currentClients?.map((allDetails, index) => (
              <ClientsCard key={index} allDetails={allDetails} />
            ))}
          </div>
        </div>
      </div>
      <PaginationComp count={count} handleChange={handleChange} />
    </div>
  );
};

export default ClientsList;

// export const getServerSideProps = async ({ params }) => {
//   console.log("params: ", params);
//   const { user } = useUser;
//   const result = await getAllClients(user);
//   return {
//     props: { data: result },
//   };
// };
