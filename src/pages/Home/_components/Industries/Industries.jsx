import React from "react";
import { industryItems } from ".";
import IndustrySpice1 from "../../../../assets/Images/Home/IndustrySpice1.png";
import IndustrySpice2 from "../../../../assets/Images/Home/IndustrySpice2.png";
import { useMediaQuery } from "@react-hook/media-query";
import IndustryMobileCards from "./_legos/IndustryMobileCards";
import IndustryImg1 from "../../../../assets/Images/IndustryImg1.jpg";
import IndustryImg2 from "../../../../assets/Images/IndustryImg2.png";
const Industries = () => {
  const mobileScreen = useMediaQuery("only screen and (max-width: 620px)");
  return (
    <div className="bg-white border-gray-100 border-t-[1px] md:mt-[75px] py-[40px] md:py-[70px] w-full sc600:pb-[150px] sc1200:pb-[70px]  relative">
      <h1 className="w-[250px] text-primary  m-auto md:w-full text-center text-[26px] md:text-[36px] pb-[30px] md:pb-[70px] font-[600]">
        We serve a set of{" "}
        <span className="text-secondary">diverse industries</span>
      </h1>
      {!mobileScreen && (
        <div className=" max-w-[1280px] flex items-center m-auto   justify-center ">
          {industryItems.slice(0, 4).map((item, idx) => (
            <div
              className={`${
                idx !== 3 && "border-r-[1px] border-neutral-200"
              } flex flex-col text-center items-center gap-[34px]`}
            >
              <div>{item.img}</div>
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-[700] satoshi text-[20px]">{item.title}</h1>
                <p className="w-[80%] m-auto satoshi text-[12px] font-[500] text-[#ADADAD]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!mobileScreen && (
        <div className="max-w-[1280px] text-center m-auto flex  justify-center mt-[80px]">
          {industryItems.slice(4).map((item, idx) => (
            <div
              className={`flex flex-col 
            text-center 
            items-center gap-[34px]
            w-[310px] ${idx !== 2 && "border-r-[1px] border-neutral-200"}`}
            >
              <div>{item.img}</div>
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-[700] satoshi text-[20px]">{item.title}</h1>
                <p className="w-[80%] m-auto satoshi text-[12px] font-[500] text-[#ADADAD]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {mobileScreen && <IndustryMobileCards />}
      <img
        src={IndustryImg2}
        className="absolute hidden md:block right-[40px] top-[-10%] max-w-[250px]"
        alt=""
      />
      <img
        src={IndustryImg1}
        className="absolute left-[0] sc800:max-w-[150px] bottom-0 max-w-[170px] sc1200:max-w-[244px]"
        alt=""
      />
    </div>
  );
};

export default Industries;
