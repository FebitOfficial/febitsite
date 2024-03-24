import React from "react";

const Button = ({ children, sz }) => {
  return (
    <button
      className={`flex items-center border-[1px] border-secondary rounded-[10px] ${
        sz === "lg" ? "px-[55px]" : "px-[20px]"
      } py-[10px] font-[500] gap-[7.5px] text-secondary`}
    >
      {children}
    </button>
  );
};

export default Button;
