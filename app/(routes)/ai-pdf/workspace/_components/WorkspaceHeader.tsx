import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const WorkspaceHeader = () => {
  return (
    <div className="p-4 flex justify-between shadow-md">
      <Image
        src={"/assets/vit-logo.svg"}
        width={140}
        height={100}
        alt="VIT Logo"
      />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default WorkspaceHeader;
