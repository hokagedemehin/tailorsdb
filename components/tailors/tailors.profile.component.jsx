import React from "react";
import { useRouter } from "next/router";
import TailorsImageCard from "./tailors.image.card.component";
import moment from "moment";
const TailorsProfileComponent = ({ userDoc }) => {
  const {
    clientsCount,
    email,
    firstName,
    lastName,
    image,
    createdTimestamp,
    phoneNo,
    birthDay,
  } = !userDoc ? {} : userDoc;

  const router = useRouter();
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
    // console.log("router: ", router.pathname);
  };
  // console.log(userDoc);
  // if (userDoc) {
  //   console.log(createdTimestamp.toDate());
  //   console.log(createdTimestamp.toDate().getDate());
  //   const todate = createdTimestamp.toDate();
  //   const aa = moment(todate).format("LL");
  //   const bb = moment(todate).calendar();
  //   const bb = moment(todate).fromNow();
  //   console.log(aa);
  //   console.log(bb);
  // }
  return (
    <div className="">
      <div className="">
        <div className="max-w-screen-xl mx-auto my-5 p-5">
          <div className="m-5 text-center">
            <span className="text-4xl font-black text-gray-400">Your </span>{" "}
            <span className="text-4xl font-black text-indigo-500 ">
              {" "}
              Profile
            </span>
          </div>
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <TailorsImageCard userDoc={userDoc} />
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 md:mx-2 h-full">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="bg-white p-3 border-t-4 border-indigo-400 rounded-lg shadow-md">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-gray-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">{lastName}</div>
                    </div>
                    {/* <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Female</div>
                    </div> */}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">
                        {!phoneNo ? "+11 998001001" : phoneNo}
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Current Address</div>
                      <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div> */}
                    {/* <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">
                        Arlington Heights, IL, Illinois
                      </div>
                    </div> */}
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">
                        {!birthDay ? "Feb 06, 1998" : birthDay}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        No of Clients
                      </div>
                      <div className="px-4 py-2">{clientsCount}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleClick(e, "/profile/edit")}
                  className="block w-full transform transition duration-200 ease-in text-indigo-800 text-base font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                >
                  Edit Profile
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default TailorsProfileComponent;
