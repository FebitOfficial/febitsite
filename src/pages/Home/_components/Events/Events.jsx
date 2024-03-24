import React from "react";
import { eventsCards } from ".";
import { Dot } from "../../../../assets/Icons/Home/Dot";

import { useMediaQuery } from "@react-hook/media-query";
const Events = () => {
  const isMobile = useMediaQuery("only screen and (max-width:620px)");
  return (
    <div className="pt-[40px] pb-[20px] md:pt-[50px] md:pb-[35px]  bg-bgSecondary">
      <h1 className="text-center text-[26px] max-w-[203px] md:max-w-full m-auto md:m-0 md:text-[40px] font-[600]">
        Upcoming events & exhibitions
      </h1>
      <div className="flex items-center py-[20px]">
        {" "}
        <p className="bg-[#F5FFFE] p-[10px] text-[12px] md:text-[16px] text-secondary satoshi font-[700] w-[200px] text-center">
          LATEST NEWS
        </p>{" "}
        <marquee direction="left" className="bg-[#EEEEEE] p-[10px]">
          <div className="flex gap-[10px]">
            <p className="satoshi font-[400] text-[16px] flex items-center gap-[5px]">
              <Dot />
              India produces about 75 of the 109 varieties listed by the
              International Organization for Standardization (ISO)
            </p>
            <p className="satoshi font-[400] text-[16px] flex items-center gap-[5px]">
              <Dot />
              India produces about 75 of the 109 varieties listed by the
              International Organization for Standardization (ISO)
            </p>
            <p className="satoshi font-[400] text-[16px] flex items-center gap-[5px]">
              <Dot />
              India produces about 75 of the 109 varieties listed by the
              International Organization for Standardization (ISO)
            </p>
          </div>
        </marquee>
      </div>

      <div className=" max-w-[358px] md:max-w-[1240px] m-auto flex flex-col gap-[16px] pt-[37px]">
        {eventsCards.map((item) => (
          <div className="bg-white card-shadow-1 w-full p-[10px] md:p-[20px] rounded-[10px] flex items-center gap-[10px] md:gap-[40px]">
            <div className="max-w-[144px] max-h-[90px] md:max-w-[295px] md:max-h-[175px]">
              <img src={item.img} className="w-full h-full" alt="" />
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
                {isMobile ? item.desc.substring(0, 120) + "..." : item.desc}
              </p>
            </div>
          </div>
        ))}
        <button
          className={` md:mt-[40px]  flex items-center justify-center border-[1px] w-full md:w-[250px] md:justify-self-center md:self-center border-secondary rounded-[5px]  py-[15px] font-[500] gap-[7.5px] text-secondary`}
        >
          <p>View All Events</p>
        </button>
      </div>
    </div>
  );
};

export default Events;
