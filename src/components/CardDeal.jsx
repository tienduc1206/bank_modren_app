import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div
        className={`${layout.sectionInfo} flex-1 mr-0 sm:mr-[80px] sm:items-start items-center sm:m-0 mb-12`}
      >
        <h2 className="text-white  font-semibold sm:text-[48px] text-[28px] sm:leading-[82px] leading-[50px]">
          Find a better card deal in few easy steps.
        </h2>
        <p className="text-dimWhite mt-6 mb-12 font-normal sm:text-[18px] text-[16px] sm:leading-[32px] leading-[25px] tracking-[0.01em] max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button
          title="Get Started"
          styles="font-medium text-[18px] leading-[27px]"
        />
      </div>
      <div className="flex flex-1">
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
