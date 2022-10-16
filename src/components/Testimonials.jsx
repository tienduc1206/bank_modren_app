import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id="clients" className="relative">
      <div className="absolute z-[0] w-[436px] h-[545px] blue__gradient top-[20%] -right-[20%] rounded-full -rotate-[48deg]"></div>
      <div className="flex sm:flex-row flex-col justify-start items-center w-full">
        <h2 className="text-white text-[28px] sm:text-[48px] leading-[50px] sm:leading-[82px] font-semibold mb-6 mr-0 sm:mr-[130px]">
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className="text-dimWhite text-[16px] sm:text-[18px] leading-[29px] font-normal mb-12 max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-start justify-center z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
