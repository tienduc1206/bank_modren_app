import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="py-5 sm:py-[60px] px-5 sm:px-[40px] flex flex-1 flex-col justify-between rounded-[20px] feedback-card">
      <img className="w-[43px] h-[28px] object-contain" src={quotes} alt="" />
      <p className="text-[18px] text-white leading-[32px] tracking-[0.02em font-normal] mt-[40px] mb-[30px]">
        {content}
      </p>
      <div className="flex flex-row items-center">
        <img
          className="w-[48px] h-[48px] rounded-full mr-4"
          src={img}
          alt=""
        />
        <div className="">
          <h4 className="font-normal text-white leading-[32px] text-[20px]">
            {name}
          </h4>
          <p className="font-normal opacity-50 text-white leading-[24px] text-[16px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
