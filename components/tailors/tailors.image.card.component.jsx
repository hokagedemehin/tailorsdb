import React, { useState, useEffect } from "react";
import moment from "moment";

const TailorsImageCard = ({ userDoc }) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (userDoc) {
      setProfile(userDoc);
    }
  }, []);
  // console.log(userDoc);
  const { firstName, lastName, image, createdTimestamp } = !userDoc
    ? {}
    : userDoc;
  const joinedDate = !userDoc
    ? ""
    : // : moment(createdTimestamp.toDate()).calendar();
      moment(createdTimestamp.toDate()).fromNow();

  return (
    <div>
      <div className="bg-white p-3 border-t-4 border-indigo-400 rounded-lg shadow-md">
        <div className="image overflow-hidden">
          <img
            className="h-auto w-full mx-auto"
            src={image}
            alt=""
            loading="lazy"
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {`${firstName} ${lastName}`}
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          Joined {joinedDate}
        </h3>
      </div>
    </div>
  );
};

export default TailorsImageCard;
