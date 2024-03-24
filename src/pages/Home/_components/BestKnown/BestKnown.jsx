import React from "react";
import { bestKnownItems, bestKnownTags, bestKnowsStats } from ".";
import BestKnownImg from "../../../../assets/Images/Home/BestKnownImg.png";
import BestKnownImgMobile from "../../../../assets/Images/Home/BestKnownImgMobile.png";
import BestKnowOurLegacy from "../../../../assets/Images/Home/BestKnowOurLegacy.png";
import BestKnowStatImg1 from "../../../../assets/Images/Home/BestKnownStatImg1.png";
import BestKnowStatImg2 from "../../../../assets/Images/Home/BestKnowStatImg2.png";
import BestKnowStatMobile1 from "../../../../assets/Images/Home/BestKnownStatMobile1.png";
import BestKnowStatMobile2 from "../../../../assets/Images/Home/BestKnownStatMobile2.png";
import OurExpertise from "./_legos/OurExpertise";
import AnimatedNumbers from "react-animated-numbers";
import FeatureImage1 from "../../../../assets/Images/FeatureImage1.jpg";
import BestKnownImg1 from "../../../../assets/Images/bestknownImg.png";
const BestKnown = () => {
  return (
    <>
      <div className="flex flex-col pt-[40px] bg-white border-b-[1px] border-gray-100">
        <h1 className="text-center text-[26px] text-primary md:text-[40px] font-[600] border-b-[1px] pb-[40px] border-neutral-300">
          We are <span className="text-secondary ">best known</span> for
        </h1>
        {/* <hr /> */}
        <div className="md:flex-row flex-col min-w-[1280px] m-auto flex gap-[40px] md:gap-[156px] items-center pt-[40px]">
          <div className="">
            <h1 className="text-[20px] text-primary md:text-[36px] font-[600] tracking-[-1.1px]">
              Our Value
            </h1>
          </div>
          <div className="md:flex-row flex-col flex md:justify-between justify-between md:gap-[40px]   md:items-center  w-[100%] md:w-[75%]">
            {bestKnownItems.map(({ title, number: Number }, idx) => (
              <div className="flex items-center gap-[24px]">
                <p className="text-[64px] text-primary font-bold">0{idx + 1}</p>

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
            <div className="w-[40%]">
              <div className="w-full flex flex-col py-[40px] items-start md:items-center px-[30px] md:px-0 gap-[35px] bg-white ">
                <div className="flex flex-col gap-[40px] items-start md:items-center ">
                  {bestKnowsStats.map((item) => (
                    <div className="flex flex-col items-start md:items-center gap-[-50px] justify-center">
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
                <h1 className="text-[22px] w-[220px] block md:hidden font-[600]">
                  Our Signature Brand
                </h1>
                <div className="flex md:px-[66px] gap-[20px] md:gap-[60px]">
                  <img
                    src={BestKnowStatImg2}
                    className="hidden md:block object-cover w-[200px]"
                    alt=""
                  />
                  <img
                    src={BestKnowStatImg2}
                    className="hidden md:block w-[200px]"
                    alt=""
                  />
                  <img
                    src={BestKnowStatImg2}
                    className="block md:hidden w-[200px] "
                    alt=""
                  />
                  <img
                    src={BestKnowStatImg2}
                    className="block md:hidden w-[200px] "
                    alt=""
                  />
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
