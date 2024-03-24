import React from "react";

const HomeCapsule = () => {
  return (
    <figure className="flex items-center justify-center md:w-[513px]">
      <span className="border-[1px] w-[67px] md:w-[117.5px] border-secondary"></span>
      <div className="py-[10px]  px-[30px] rounded-[80px] bg-secondary/20 flex justify-center items-center">
        <p className="text-[12px] md:text-[20px] text-secondary satoshi">
          Celebrating <span className="font-[700] satoshi">60+</span> Years
        </p>
      </div>
      <span className="border-[1px]  w-[67px] md:w-[117.5px] border-secondary"></span>
    </figure>
  );
};

export default HomeCapsule;
