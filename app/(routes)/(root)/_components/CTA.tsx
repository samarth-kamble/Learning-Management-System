"use client";
import React from "react";
import cta from "../../../../public/assets/cta.png";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const CTA = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="w-full bg-white py-24 p-4 items-center">
      <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
        <Image src={cta} alt="hero" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-start gap-4">
          <div>
            <h1 className="md:leading-[42px] py-8 md:text-3xl text-lg font-semibold">
              Join one of the best{" "}
              <span className="text-[#208486]">platforms for online</span>{" "}
              courses from all over the world
            </h1>
            <p className="py-2 text-lg text-gray-900">
              Various versions have evolved over the years
            </p>
            {isSignedIn ? (
              <Link href={"/search"}>
                <button className="max-[780px]:w-full px-8 text-white py-3 bg-[#208446]">
                  Go To Course
                </button>
              </Link>
            ) : (
              <Link href={"/sign-up"}>
                <button className="max-[780px]:w-full px-8 text-white py-3 bg-[#208446]">
                  Sign up for free
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
