import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="mt-[100px] rounded-[20px] flex sm:flex-row flex-col justify-between items-center px-8 sm:px-[100px] py-6 sm:py-[70px] bg-black-gradient-2 box-shadow mb-[150px]">
      <div className="">
        <h2 className="text-white font-semibold text-[28px] sm:text-[48px] leading-[50px] sm:leading-[67px] mb-4 sm:mb-6">
          Let’s try our service now!
        </h2>
        <p className="text-dimWhite font-normal text-[16px] sm:text-[18px] leading-[25px] sm:leading-[29px] max-w-[445px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button
        title="Get Started"
        styles="font-medium text-[18px] leading-[27px] sm:my-0 my-10"
      />
    </section>
  );
};

export default CTA;
