import Input from "components/Input/Input";
import React from "react";

const DesignerFormDesktop = ({ w }) => {
  const c = 12;
  return (
    <section
      style={{ width: w || "auto" }}
      className="hidden md:block mt-[20px] w-full mb-[20px] bg-white p-[15px] pb-[35px] rounded-md"
    >
      <h1 className="pl-[20px] py-[25px] text-[25px]  font-semibold text-neutral-700">
        Contact Us
      </h1>
      <form className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[22px]  w-[90%] m-auto">
          <Input placeholder="Write your name" size="lg" />
          <Input placeholder="Write your email" type="email" size="lg" />
          <Input
            placeholder="Write your phone number"
            type="number"
            size="lg"
          />
          <Input
            placeholder="Write your adress pincode"
            type="number"
            size="lg"
          />
          <div className="w-full flex flex-col gap-[10px]">
            <button
              type="submit"
              className="flex justify-center gap-[10px] bottom-[20px] rounded-[10px] shadow-1 py-[13px] px-4 mt-[12px] bg-primary text-white"
            >
              <p>Submit </p>
              <button className="bg-[#ffdf11] button-new text-neutral-900 text-[12px] px-2 h-[fit-content]">
                New
              </button>
            </button>
            <p className="text-[11.75px] m-auto">
              By submitting this form you agree to the{" "}
              <span className="text-primaryC">privacy policy</span> and{" "}
              <span className="text-primaryC">terms</span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default DesignerFormDesktop;
