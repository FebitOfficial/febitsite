import React from "react";
import HomeCapsule from "./_components/HomeCapsule/HomeCapsule";
import HeroImg from "../../assets/Images/Home/HeroImg.png";
import HomeText from "./_components/HomeText/HomeText";
import HeroCertifiedLog from "../../assets/Images/CertifiedLogo.jpg";
import HeroSpice1 from "../../assets/Images/Home/HeroSpice1.png";
import BestKnown from "./_components/BestKnown/BestKnown";
import Industries from "./_components/Industries/Industries";
import Testimonials from "./_components/Testimonials/Testimonials";
import Events from "./_components/Events/Events";
import Awards from "./_components/Awards/Awards";
import HeroMobile from "../../assets/Images/Home/HeroMobile.png";
import Footer from "./_components/Footer/Footer";
import KnowMoreAbout from "./_components/KnowMoreAbout/KnowMoreAbout";

import HeroVideo2 from "../../assets/Videos/HeroVideo2.mp4";
import Clearning from "../../assets/Icons/Home/BestKnown/Clearning";
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
              Nostrud commodo excepteur qui irure officia esse est esse est
              velit aliquip consectetur occaecat labore. Minim ullamco pariatur
              anim ullamco laborum id deserunt laboris ut deserunt voluptate
              commodo amet. Veniam aliqua commodo eu quis. Ea irure commodo
              reprehenderit culpa ipsum amet eiusmod.
            </p>
            <p className="satoshi">
              Sint consectetur officia commodo est. Laborum duis ad dolor ea.
              Lorem excepteur aliquip dolor nulla mollit aliquip adipisicing
              qui. Voluptate amet dolore ea pariatur excepteur ullamco nostrud
              duis dolor voluptate. Voluptate tempor eiusmod anim incididunt
              labore amet laborum nostrud ex officia excepteur enim anim. In
              labore deserunt excepteur sit amet exercitation voluptate. Laboris
              ea do deserunt labore do mollit cupidatat ipsum quis elit sunt
              tempor culpa.
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
