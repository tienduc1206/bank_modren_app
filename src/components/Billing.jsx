import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} w-full`}>
        <img
          src={bill}
          className="w-[100%] h-[100%] relative z-[5] object-contain"
          alt="billing"
        />
        <div className="absolute z-[3] -left-[1/2] top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-[1/2] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start sm:ml-[130px] ml-0">
        <h2 className="text-white sm:block hidden sm:text-[48] text-[30px] leading-[77px] tracking-[0.01em] font-semibold mb-6">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className="text-dimWhite  text-[18px] leading-[29px] font-normal mb-12 max-w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex w-full flex-row gap-8 sm:justify-start justify-center">
          <img
            className="w-[128px] h-[42px] object-contain cursor-pointer"
            src={apple}
            alt="app_store"
          />
          <img
            className="w-[128px] h-[42px] object-contain cursor-pointer"
            src={google}
            alt="google_play"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
