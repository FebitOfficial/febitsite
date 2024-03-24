import React, { useState } from "react";
import { navLinks } from ".";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { Download } from "../../assets/Icons/Navbar/Dowload";
import Button from "../atoms/Button/Button";
import { ChevronDown } from "../../assets/Icons/Navbar/Chevron";
import { Hamburger } from "../../assets/Icons/Navbar/Hamburger";
import Logo from "../../assets/Images/logo.jpg";
const Navbar = () => {
  const [navbarLeft, setNavbarLeft] = useState("-999px");

  return (
    <section className="px-[20px] md:px-0 fixed top-0 w-[100%]  z-[100] bg-white py-[12px]">
      <nav className=" md:max-w-[1240px] m-auto flex justify-between items-center h-[40px]">
        <div className="flex items-center gap-[10px]">
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setNavbarLeft("0px")}
          >
            <Hamburger />
          </div>
          <img src={Logo} alt="" className="w-[150px] " />
        </div>
        <div
          style={{ left: navbarLeft }}
          className={`flex  items-start 
          md:w-[max-content]
          md:items-center 
          fixed md:static
          top-0 h-[100vh] md:h-auto 
          w-[50%]
          transition
          bg-white justify-center md:justify-end px-[20px] 
          md:px-0 flex-col md:flex-row  gap-[24px] 
          text-primary leading-[21.6px]`}
        >
          {navLinks.map((item) => (
            <div className="flex gap-[5px] items-center relative">
              <p className="satoshi text-[16px] font-[400]">{item.title}</p>{" "}
              <ChevronDown />
            </div>
          ))}
          {/* <div className="hid md:block">
            <Button>
              <Download /> <p>Download E-Brochure</p>
            </Button>
          </div> */}
          <IoMdClose
            onClick={() => setNavbarLeft("-999px")}
            className="cursor-pointer absolute block md:hidden top-[25px] right-[25px]"
          />
        </div>
        {/* <div className="block md:hidden">
          <button
            className={`flex items-center border-[1px] border-secondary rounded-[10px] text-[10px]  py-[7.5px] px-[10px] font-[500] gap-[7.5px] text-secondary`}
          >
            <Download /> <p>Download E-Brochure</p>
          </button>
        </div> */}
      </nav>
    </section>
  );
};

export default Navbar;
