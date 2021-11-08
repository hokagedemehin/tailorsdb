import React from "react";
import Image from "next/image";

const AboutHeroSectionComponent = () => {
  return (
    <div>
      <div className="relative h-56 w-full">
        <div className="relative h-56 w-full">
          <div className="relative h-full w-full">
            <Image
              src="/home/hero/hero3.jpg"
              layout="fill"
              objectFit="cover"
              alt="Client Hero image"
              priority={true}
            />
            <div className="absolute h-full w-full bg-gray-800 opacity-60"></div>
            <div className="absolute flex justify-center items-center w-full top-1/2">
              <p className="font-bold text-2xl sm:text-4xl font-fam7 text-white">
                Our Competitive Advantage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSectionComponent;
