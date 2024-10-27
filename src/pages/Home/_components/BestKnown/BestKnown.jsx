import React from "react";
import { bestKnownItems, bestKnowsStats } from ".";

import BestKnowStatImg2 from "../../../../assets/Images/Home/BestKnowStatImg2.png";

import AnimatedNumbers from "react-animated-numbers";
import BestKnownImg1 from "../../../../assets/Images/bestknownImg.png";
const BestKnown = () => {
  return (
    <>
      <div className="flex flex-col pt-[40px] bg-white border-b-[1px] border-gray-100">
        <h1 className="text-center text-[26px] text-primary md:text-[40px] font-[600] border-b-[1px] pb-[20px] border-neutral-300">
          We are <span className="text-secondary ">best known</span> for
        </h1>
        {/* <hr /> */}
        <div className="md:flex-row flex-col lg:min-w-[1280px] m-auto flex gap-[20px] md:gap-[156px] items-center pt-[20px]">
          <div className="">
            <h1 className="text-[24px] text-primary md:text-[36px] font-[600] tracking-[-1.1px]">
              Our Value
            </h1>
          </div>
          <div className="md:flex-row flex-col flex md:justify-between justify-between md:gap-[40px]   md:items-center  w-[100%] md:w-[75%]">
            {bestKnownItems.map(({ title, number: Number }, idx) => (
              <div className="flex items-center gap-[24px]">
                <p className="text-[32px] md:text-[64px] text-primary font-bold">
                  0{idx + 1}
                </p>

                <p className="satoshi text-[#323232] leading-[24px] tracking-[-1.1px] font-[600] text-[20px] w-[max-content] md:w-[127px]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex bg-white mt-[40px]">
          <div className="w-full flex-col md:flex-row mr-auto flex items-center  rounded-[10px]">
            <img
              src={BestKnownImg1}
              className="h-full w-[100%] md:w-[60%] md:rounded-br-[300px] object-cover"
              alt=""
            />

            <img src="" alt="" />
            <div className="w-[90%] mx-auto md:w-[40%]">
              <div className="w-full flex flex-col py-[40px] items-center md:items-center px-[30px] md:px-0 gap-[35px] bg-white ">
                <div className="flex flex-col gap-[40px] items-center md:items-center ">
                  {bestKnowsStats.map((item) => (
                    <div className="flex flex-col items-center md:items-center gap-[-50px] justify-center">
                      <h1 className="flex text-primary tracking-[-2px] text-[36px] md:text-[60px] leading-[-21px] font-[600] ">
                        <AnimatedNumbers
                          transitions={() => ({
                            type: "spring",
                            duration: 5,
                          })}
                          style={{
                            lineHeight: "-2px",
                          }}
                          animateToNumber={
                            +item.number.substring(0, item.number.length - 1)
                          }
                        />
                        +
                      </h1>
                      <p className="satoshi font-[700] text-[#ADADAD] text-[16px] md:text-[20px]">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <img
                src={BestKnowOurLegacy}
                className="md:max-w-[100px] h-[558px] md:h-[684px]"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-bgSecondary pb-[30px]">
        <OurExpertise />
      </div> */}
    </>
  );
};

export default BestKnown;
