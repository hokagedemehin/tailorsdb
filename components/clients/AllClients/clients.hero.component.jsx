import React from "react";
import Image from "next/image";

const ClientsHero = () => {
  return (
    <div>
      <div className="relative h-60 w-full">
        <div className="relative h-60 w-full">
          <div className="relative h-full w-full">
            <Image
              src="/home/hero/hero2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Client Hero image"
              priority={true}
            />
            <div className="absolute h-full w-full bg-gray-800 opacity-50"></div>
            <div className="absolute flex justify-center items-center w-full top-1/2">
              <p className="font-bold text-4xl sm:text-5xl font-fam7 text-white">
                Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsHero;
