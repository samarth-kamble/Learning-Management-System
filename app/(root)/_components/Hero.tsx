import React from "react";
import heroImg from "../../../public/assets/heroImg.png";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className=" sticky w-full bg-white py-24 p-4">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-4xl text-[#208486] font-bold">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[42px] py-2 md:text-3xl text-lg font-semibold">
            Access to over <span className="text-[#208486]">1000</span> courses
            from over <span className="text-[#208486]">200</span> professional
            instructors & institutions
          </h1>
          <p className="py-2 text-lg text-gray-900">
            Various versions have evolved over the years
          </p>
          <form className="input-box-shadow flex justify-content-between items-center bg-transparent">
            <input
              type="text"
              className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
              placeholder="Search for Courses Here"
            />
            <Button
              variant={"ghost"}
              className="h-[51px] w-[51px] ml-2 bg-green-400"
            >
              <AiOutlineSearch
                size={30}
                className="icon"
                style={{ color: "#000" }}
              />
            </Button>
          </form>
        </div>
        <Image src={heroImg} alt="hero" className="md:order-last order-first" />
      </div>
    </section>
  );
};

export default HeroSection;
