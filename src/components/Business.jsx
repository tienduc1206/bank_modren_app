import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "../components";

const FeatureCard = ({ icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card gap-5 justify-center items-center`}
  >
    <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex justify-center items-center">
      <img className="w-[50%] h-[50%]" src={icon} alt="icon" />
    </div>
    <div className="flex flex-1 flex-col gap-2">
      <h4 className="text-white font-semibold text-[18px] leading-[23px] tracking-[0.01em]">
        {title}
      </h4>
      <p className="text-dimWhite font-normal text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div
        className={`${layout.sectionInfo} mr-0 sm:mr-[80px] sm:items-start items-center mb-6 sm:mb-0`}
      >
        <h2 className="text-white font-semibold tracking-[0.01em] leading-[77px] text-[48px] sm:block hidden">
          You do the business, <br />
          we’ll handle the money.
        </h2>
        <p className="text-dimWhite mt-6 font-normal text-[18px] leading-[31px] tracking-[0.01em] max-w-[570px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button
          title="Get Started"
          styles={`mt-12 font-medium text-[18px] leading-[27px] text-primary`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-[40px]">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
