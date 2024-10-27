import React from "react";
import { eventsCards } from ".";
import { Dot } from "../../../../assets/Icons/Home/Dot";

import { useMediaQuery } from "@react-hook/media-query";
const Events = () => {
  const isMobile = useMediaQuery("only screen and (max-width:620px)");
  return (
    <div className="pt-[40px] pb-[20px] md:pt-[50px] md:pb-[35px]  bg-bgSecondary">
      <h1 className="text-center text-[26px]  md:max-w-full m-auto md:m-0 md:text-[40px] font-[600]">
        Latest Projects
      </h1>

      <div className=" max-w-[358px] md:max-w-[1240px] m-auto flex flex-col gap-[16px] pt-[37px]">
        {eventsCards.map((item) => (
          <div className="bg-white flex-col md:flex-row card-shadow-1 w-full p-[10px] md:p-[20px] rounded-[10px] flex items-center gap-[10px] md:gap-[40px]">
            <div className="">
              <img
                src={item.img}
                className="w-[650px] object-cover rounded-[12px] h-[200px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h1 className="satoshi font-[700] text-[14px] md:text-[30px]">
                  {item.location}
                </h1>
                <p className="text-[10px] md:text-[14px]  font-[400] satoshi text-[#ADADAD]">
                  {item.date}
                </p>
              </div>
              <p className="text-[10px] md:text-[20px] font-[400] satoshi tracking-[-0.6px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
