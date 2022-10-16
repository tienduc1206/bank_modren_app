import React from "react";
import { logo, line3, copyright } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col w-full items-center justify-between">
      <div className="w-full flex flex-col sm:flex-row">
        <div className="mr-0 sm:mr-[140px] flex flex-col sm:items-start items-center sm:mb-0 mb-10">
          <img className="w-[266px] h-[72x] object-contain" src={logo} alt="" />
          <p className="text-dimWhite font-normal leading-[32px] max-w-[300px] mt-[30px] ml-6">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-12 sm:gap-[150px] sm:items-start items-center">
          {footerLinks.map((footerLink, index) => (
            <div className="flex flex-col" key={footerLink.key}>
              <h4 className="text-white font-medium text-[18px] leading-[27px] mb-6 sm:text-start text-center">
                {footerLink.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLink.links.map((link, index) => (
                  <li
                    className="hover:text-secondary cursor-pointer font-normal text-[16px] leading-[24px] text-dimWhite sm:text-start text-center"
                    key={link.name}
                    href={link.link}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 w-full mb-[30px]">
        <img src={line3} alt="" />
      </div>
      <div className="flex sm:flex-row flex-col justify-between w-full mb-[30px] ">
        <p className="text-dimWhite text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] font-normal flex sm:justify-start justify-center items-center">
          Copyright{" "}
          <img className="w-4 h-4 ml-2 mr-[18px]" src={copyright} alt="" /> 2021
          HooBank. <br className="sm:hidden block" /> All Rights Reserved.
        </p>
        <div className="flex sm:justify-end justify-center gap-[30px] sm:mt-0 mt-5">
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link}>
              <img
                className="h-6 w-6 object-contain"
                src={social.icon}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
