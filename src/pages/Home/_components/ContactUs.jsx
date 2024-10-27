import Support1 from "assets/Icons copy/ContactUs/Support1";
import Support2 from "assets/Icons copy/ContactUs/Support2";
import Support3 from "assets/Icons copy/ContactUs/Support3";
import Support4 from "assets/Icons copy/ContactUs/Support4";
import DesignerForm from "pages/Home/_components/DesignerForm/DesignerForm";
import DesignerFormDesktop from "pages/Home/_components/DesignerFormDesktop/DesignerFormDesktop";
import React from "react";
import { Icon } from "@iconify/react";

const ContactUs = () => (
  <div className="satoshi my-[70px] flex flex-col-reverse gap-[20px]">
    {/* <h1 className="text-center text-[52px] font-semibold py-[20px]">
      Contact Us
    </h1> */}
    <div className="w-[90%] m-auto rounded-[25px] overflow-hidden shadow-2 border-neutral-300">
      <div style={{ width: "100%" }}>
        <div
          style={{ width: "100%", height: "500px" }}
          className="flex justify-between"
        >
          <iframe
            className="gmap_iframe"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            mapType="sattelite"
            src="https://www.google.com/maps/embed/v1/search?q=delhi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="pb-[20px] hidden md:block md:w-[40%] w-full md:mt-[0] shadow-2 bg-white">
            <DesignerFormDesktop />
            <div className="w-[100%]">
              <DesignerForm w="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="md:hidden flex flex-col md:flex-row gap-[180px] bg-white items-start w-full text-neutral-500 md:w-[90%] m-auto py-[10px] px-[20px] md:mt-[100px]">
      <div className="md:w-[40%] w-full  md:mt-[0] shadow-2 bg-white">
        <div className="w-[100%]">
          <DesignerForm w="100%" />
        </div>
      </div>
    </div>
    <div className="flex w-[90%] py-[24px] m-auto flex-col gap-[10px]">
      <h1 className="text-[28px] ">Customer Support</h1>
      <div className="border-[1px]  py-[30px] px-[48px] border-neutral-300 rounded-[24px] flex flex-col md:flex-row gap-[40px] md:gap-[20px]">
        <div className="md:w-[25%] flex items-center flex-col md:border-r-[1px] border-neutral-300 px-[10px] gap-[15px]">
          <Support1 />
          <p className="text-center font-semibold text-[20px] leading-[120%] text-neutral-500">
            Have a problem with a project?
          </p>
          <button className="py-[5px] bg-primaryC px-[15px] rounded-[8px] text-neutral-500 text-[16px]">
            Call Support
          </button>
        </div>
        <div className="md:w-[25%] flex items-center flex-col md:border-r-[1px] border-neutral-300 text-neutral-500 px-[10px] gap-[8px]">
          <Icon
            icon="ph:address-book-thin"
            width="68"
            height="68"
            style={{ color: "#fc7f03" }}
          />
          <h2 className="font-semibold text-[18px] text-center">Visit us</h2>
          <p className="text-center">For service requests or complaints</p>
          <p className="text-center">
            Vist at:{" "}
            <span className="text-primaryC">
              Elit excepteur non et non esse sint ad.
            </span>
          </p>
        </div>
        <div className="md:w-[25%] flex items-center flex-col md:border-r-[1px] border-neutral-300 px-[10px] gap-[10px]">
          <Support3 />
          <div className="text-center flex flex-col gap-[8px]   text-neutral-500">
            <h2 className="font-semibold text-[18px] text-center">Email us</h2>
            <p>For service requests or complaints</p>
            <p>
              write to <span className="text-primaryC">info@blg&sons.com</span>
            </p>
          </div>
        </div>
        <div className="md:w-[25%] flex items-center flex-col border-neutral-300 px-[10px] gap-[10px]">
          <Support4 />
          <div className="text-center flex flex-col gap-[8px]   text-neutral-500">
            <h2 className="font-semibold text-[18px] text-center">Call us</h2>
            <p>For service requests or complaints</p>
            <p>
              write to <span className="text-primaryC">info@blg&sons.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
