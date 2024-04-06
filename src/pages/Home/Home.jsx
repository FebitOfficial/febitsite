import React from "react";
import HomeCapsule from "./_components/HomeCapsule/HomeCapsule";

import HomeText from "./_components/HomeText/HomeText";
import HeroCertifiedLog from "../../assets/Images/CertifiedLogo.jpg";

import BestKnown from "./_components/BestKnown/BestKnown";
import Industries from "./_components/Industries/Industries";
import Testimonials from "./_components/Testimonials/Testimonials";
import Events from "./_components/Events/Events";
import Awards from "./_components/Awards/Awards";

import Footer from "./_components/Footer/Footer";

import HeroVideo2 from "../../assets/Videos/HeroVideo2.mp4";

import HeroContainer1 from "../../assets/Images/heroContainer1.png";
import ContactUs from "./_components/ContactUs";
const Home = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse   max-w-[1338px] mt-[69px] ml-auto mr-auto md:mr-0 items-center justify-between">
        <div className="flex flex-col gap-[40px] text-center md:text-left w-[90%] md:w-[35%] relative pt-[57px]">
          <div className="flex flex-col gap-4 relative">
            <HomeCapsule />
            <HomeText />
          </div>
          <div className="flex flex-col gap-[15px]  font-[500] text-[12px] text-[#ADADAD] w-full md:w-[90%]">
            <p className="satoshi">
              Explore our comprehensive range of offerings, including TMT, Steel
              Plates, Structural Steel, Bitumen, Cement, Pipes, RMC,
              Electricals, Tiles and Flooring products, Crash Barriers, Liquid
              Bitumen Emulsion, LDO, Oil, Abrasives, and Power Tools, all
              meticulously selected to meet your construction needs with
              precision and quality.
            </p>
            <p className="satoshi">
              From high-grade TMT and durable steel plates to reliable
              structural steel and essential construction materials such as
              bitumen and cement, we offer a diverse portfolio to support your
              projects. Our product lineup extends beyond steel, encompassing
              essential components like pipes, RMC, electricals, tiles, and
              flooring products, ensuring a one-stop destination for all your
              construction needs. Additionally, we provide specialized items
              like crash barriers, liquid bitumen emulsion, LDO, oil, abrasives,
              and power tools. Trust us to be your reliable partner in building
              a solid foundation for success.
            </p>
            <div className="flex justify-between">
              <div>
                {" "}
                <img
                  className="md:ml-[40px] md:max-h-[200px] md:w-[200px] w-[126px]"
                  src={HeroCertifiedLog}
                  alt=""
                />
              </div>
              <div className="md:absolute max-w-[180px] bottom-[-70px] left-[-40%] md:max-w-[219px] max-h-[175px]">
                {" "}
                <img src={HeroContainer1} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <video
          loop
          autoPlay
          // controls
          className="block max-w-full min-h-[361px] rounded-b-[100px] md:rounded-b-[0px]  md:rounded-tl-[300px] object-cover md:max-w-[875px] md:h-[694px]"
          muted
        >
          <source src={HeroVideo2} type="video/mp4" />
        </video>
      </div>
      <BestKnown />
      <Industries />
      <Awards />
      <Testimonials />
      <Events />
      <ContactUs />
      {/* <KnowMoreAbout /> */}
      <Footer />
    </>
  );
};

export default Home;
