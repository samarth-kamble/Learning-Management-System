import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";
import UploadPDF from "./UploadPDF";

const Sidebar = () => {
  return (
    <div className="shadow-md h-screen p-7">
      <Image src={"/assets/vit-logo.svg"} alt="logo" width={200} height={130} />
      <div className="mt-10">
        <UploadPDF>
          <Button className="w-full">+ Upload PDF</Button>
        </UploadPDF>
        <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer">
          <Layout />
          <h2>Workspace</h2>
        </div>
        <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer">
          <Shield />
          <h2>Shield</h2>
        </div>
      </div>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={50} />
        <p className="text-sm mt-1">2 out of 5 PDF uploaded </p>
        <p className="text-sm text-gray-500 mt-1">Upgrade to upload more PDF</p>
      </div>
    </div>
  );
};

export default Sidebar;
