import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { line } from "../assets";

const Stats = () => {
  return (
    <section
      className={`flex sm:justify-center justify-start sm:flex-row flex-col sm:mb-20 mb-6 mt-4 w-full gap-[50px]`}
    >
      {stats.map((stat, index) => (
        <div className="flex items-center gap-6" key={stat.id}>
          <h4 className="text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="text-gradient font-normal xs:text-[20px] text-[15px] xs:leading-[27px] leading-[21px] uppercase">
            {stat.title}
          </p>
          {index < stats.length - 1 ? (
            <img className="ml-[26px] sm:flex hidden" src={line} alt="" />
          ) : (
            ""
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
