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
import { homeImages, homeImagesTitle } from "lib/constants/home-images";
import HomeSwipers from "components/HomeSwipers/HomeSwipers";
const Home = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse  w-[90%] mt-[69px] ml-auto mr-auto md:mr-0 items-center justify-between">
        <div className="flex flex-col gap-[40px] text-center md:text-left w-[90%] md:w-[35%] relative pt-[57px]">
          <div className="flex flex-col gap-4 relative">
            <HomeCapsule />
            <HomeText />
          </div>
          <div className="flex flex-col gap-[15px]  font-[500] text-[12px] text-[#ADADAD] w-full md:w-[90%]">
            <p className="satoshi">
              Explore our specialized range of road construction materials and
              equipment at BLG and Sons, designed to enhance every aspect of
              your infrastructure projects. Our offerings include high-strength
              TMT bars, durable steel plates, structural steel, premium bitumen,
              and top-grade cement, all carefully chosen to ensure quality and
              longevity in road construction.
            </p>
            <p className="satoshi">
              From foundational materials like TMT and cement to essential
              road-building components such as pipes, ready-mix concrete (RMC),
              and electrical supplies, our diverse product range supports every
              phase of your project. Our selection also includes critical items
              for road safety and durability, such as crash barriers, liquid
              bitumen emulsion, and Low-Density Oil (LDO). For finishing and
              maintenance, we provide high-grade abrasives and power tools,
              along with a variety of tiles and flooring options suitable for
              roadside facilities and infrastructure. With BLG and Sons, you can
              rely on our comprehensive product lineup to meet the highest
              standards in road construction. We are committed to being your
              trusted partner in building robust, efficient, and lasting
              roadways, tailored to support India’s infrastructure and growth.
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
      <div className="mt-12">
        {homeImages.map((item, index) => (
          <HomeSwipers
            minHeight={index === 0 ? "250px" : "200px"}
            swiperContent={item}
            title={homeImagesTitle[index]}
          />
        ))}
      </div>
      {/* <Industries />
      <Awards /> */}
      <Testimonials />
      <Events />
      <ContactUs />
      {/* <KnowMoreAbout /> */}
      <Footer />
    </>
  );
};

export default Home;
