import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row mr-1`}>
          <p className="font-medium text-gradient-second text-[18px] leading-[23px] flex justify-center items-center">
            <span className="mr-2">Get</span>
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain"
            />
          </p>
        </div>
        <p className="font-medium text-gradient-second text-[18px] leading-[23px]">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
