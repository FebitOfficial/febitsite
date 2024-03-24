import React from "react";
import LogoName from "../../../../assets/Images/logo-name.png";
const HomeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center gap-[-10px] font-[600]">
      <h1 className="text-[32px]  hidden md:flex text-primary gap-[12px] items-center  md:w-full ">
        Welcome to <img src={LogoName} alt="" />
      </h1>
      <h1 className="block md:hidden text-[26px] md:text-[32px] text-primary md:w-full ">
        Welcome to
      </h1>
      <h1 className="text-[26px] block md:hidden md:text-[32px] text-primary md:w-full ">
        Febit Infra Solutions!
      </h1>

      <h1 className="text-[26px] md:text-[32px] text-primary ">
        One of the <span className="text-secondary">best worldwide</span>
      </h1>

      <h1 className="text-[26px] md:text-[32px] text-primary">
        suppliers <span className="text-secondary"> since 1960</span>
      </h1>
    </div>
  );
};

export default HomeText;
