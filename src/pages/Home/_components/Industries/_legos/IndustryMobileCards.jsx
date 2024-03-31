import React from "react";
import { industryItems } from "../index";

const IndustryMobileCards = () => {
  return (
    <div className="flex flex-col w-full pb-[50px] m-auto">
      <div className="w-full flex justify-center m-auto">
        {industryItems.slice(0, 2).map((item, idx) => (
          <div
            className={`w-[195px] h-[240px] ${
              idx !== 1 && "border-r-[1px] "
            } flex flex-col items-center pb-[10px] justify-center border-b-[1px] border-neutral-300`}
          >
            <div className="py-[30px]">{item.img}</div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="font-[700] text-center satoshi text-[14px]">
                {item.title}
              </h1>
              <p className="w-[80%] text-center m-auto satoshi text-[10px] font-[500] text-[#ADADAD]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {industryItems.slice(2, 4).map((item, idx) => (
          <div
            className={`w-[195px] h-[240px] ${
              idx !== 1 && "border-r-[1px] "
            } flex flex-col items-center pb-[10px] justify-center border-b-[1px] border-neutral-300`}
          >
            <div className="py-[30px]">{item.img}</div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="font-[700] text-center satoshi text-[14px]">
                {item.title}
              </h1>
              <p className="w-[80%] text-center m-auto satoshi text-[10px] font-[500] text-[#ADADAD]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {industryItems.slice(4, 6).map((item, idx) => (
          <div
            className={`w-[195px] h-[240px] ${
              idx !== 1 && "border-r-[1px] "
            } flex flex-col items-center pb-[10px] justify-center border-b-[1px] border-neutral-300`}
          >
            <div className="py-[30px]">{item.img}</div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="font-[700] text-center satoshi text-[14px]">
                {item.title}
              </h1>
              <p className="w-[80%] text-center m-auto satoshi text-[10px] font-[500] text-[#ADADAD]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {industryItems.slice(6, 7).map((item, idx) => (
          <div
            className={`w-[195px] h-[240px]  flex flex-col items-center pb-[10px] justify-center `}
          >
            <div className="py-[30px]">{item.img}</div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="font-[700] text-center satoshi text-[14px]">
                {item.title}
              </h1>
              <p className="w-[80%] text-center m-auto satoshi text-[10px] font-[500] text-[#ADADAD]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryMobileCards;
