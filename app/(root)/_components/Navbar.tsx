"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/logo.svg";
import lock from "../../../public/assets/lock.svg";
import Hamburger from "../../../public/assets/hamburgerMenu.svg";
import Close from "../../../public/assets/close.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[85px] bg-white shadow-sm">
      <div className="p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <Image src={Logo} alt="logo" className="h-[25px] cursor-pointer" />
        <div className="flex items-center">
          <ul className="hidden md:flex gap-6 cursor-pointer">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/search"}>Course</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden">
          {isSignedIn ? (
            <div className="flex flex-row gap-5">
              <Button>
                <Link href={"/home"}>Go To Course</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href={"/sign-in"}>
                <Button
                  className="flex border border-[#240136] justify-center items-center bg-transparent px-6 gap-2 py-4"
                  variant={"ghost"}
                >
                  <Image src={lock} alt="lock" />
                  Login
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="px-8 py-4">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
        <motion.div
          whileTap={{ scale: 0.6 }}
          className="md:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <Image src={toggle ? Close : Hamburger} alt="hamburger" />
        </motion.div>
      </div>
      <div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={
            toggle
              ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden"
              : "hidden"
          }
        >
          <li className="p-4 hover:bg-gray-50">Home</li>
          <li className="p-4 hover:bg-gray-50">About</li>
          <li className="p-4 hover:bg-gray-50">Support</li>
          <li className="p-4 hover:bg-gray-50">Platform</li>

          <div className="flex flex-col my-4 gap-4">
            {isSignedIn ? (
              <div className="flex flex-col">
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <>
                <Link href={"/sign-in"}>
                  <Button
                    className="flex border border-[240136] justify-center items-center bg-transparent px-6 gap-2 py-4"
                    variant={"ghost"}
                  >
                    <Image src={lock} alt="lock" />
                    Login
                  </Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button className="px-8 py-4">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
