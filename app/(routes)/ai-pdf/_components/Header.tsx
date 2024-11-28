import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SquareArrowOutUpLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-end p-5 shadow-sm">
      <Link href={"/home"}>
        <Button
          size={"sm"}
          className="flex flex-row  mr-4 mt-1 gap-x-3"
          variant={"ghost"}
        >
          <SquareArrowOutUpLeft className=" w-5 h-5" />
          <p className="text-sm">Exit</p>
        </Button>
      </Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Header;
