import React, { useState, useEffect } from "react";

const TailorsLoadingImageCard = () => {
  return (
    <div>
      <div className="bg-white h-44 w-full p-3 border-t-4 border-indigo-400 rounded-lg shadow-md flex flex-col justify-center animate-pulse ">
        <div className="image overflow-hidden rounded-lg">
          <div class=" bg-gray-300 h-20 w-full"></div>
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-2 ">
          <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        </h3>
      </div>
    </div>
  );
};

export default TailorsLoadingImageCard;
