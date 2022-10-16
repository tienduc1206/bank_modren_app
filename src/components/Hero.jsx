import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`${styles.flexStart} flex-col xl:px-0 `}
      >
        <div className="flex flex-row items-center py-[7px] px-[18px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className="w-full flex flex-row">
          <h1 className="flex-1 text-white font-semibold ss:text-[72px] text-[35px] ss:leading-[100px] leading-[75px] tracking-[0.01rem]">
            The Next <br />
            <span className="text-gradient">Generation</span>
            <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-semibold ss:text-[72px] text-[35px] ss:leading-[100px] leading-[75px] tracking-[0.01rem]">
          Payment Method.
        </h1>

        <p
          className={`${styles.paragraph} max-w-[483px] font-normal leading-[31px] mt-10`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] top-0 h-[35%] pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] bottom-40 h-[80%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] right-20 bottom-20 h-[50%] blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
