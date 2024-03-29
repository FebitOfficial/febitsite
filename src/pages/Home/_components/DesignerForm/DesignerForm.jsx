import Input from "components/Input/Input";
import React from "react";

const DesignerForm = ({ w }) => {
  const c = 12;
  return (
    <section
      className="block md:hidden mt-[20px] mb-[20px]"
      style={{ width: w || "auto" }}
    >
      <h1 className="pl-[20px] py-[12px] text-[25px] font-semibold text-neutral-700">
        Contact Us
      </h1>
      <form className="flex flex-col gap-[12px]" style={{ width: w || "auto" }}>
        <div className="flex flex-col gap-[12px]  w-[90%] m-auto">
          <Input placeholder="Write your name" size="md" />
          <Input placeholder="Write your email" type="email" size="md" />
          <Input
            placeholder="Write your phone number"
            type="number"
            size="md"
          />
          <Input
            placeholder="Write your adress pincode"
            type="number"
            size="md"
          />
          <button
            type="submit"
            className="flex bg-primary justify-center gap-[10px] bottom-[20px] rounded-[10px] shadow-1 py-2 px-4 mt-[12px] text-white"
          >
            <p>Submit</p>
            <button className="bg-[#ffdf11] button-new text-neutral-900 text-[12px] px-2 h-[fit-content]">
              New
            </button>
          </button>
        </div>
      </form>
    </section>
  );
};

export default DesignerForm;
