"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PDFDashboardPage = () => {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress || "",
  });

  return (
    <div>
      <h2 className="font-bold text-2xl">Workspace</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
        {fileList?.map((file, index) => (
          <Link href={`/ai-pdf/workspace/${file.fileId}`}>
            <div
              key={index}
              className="flex p-5 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all"
            >
              <Image src={"/pdf.png"} alt="PDF Logo" width={50} height={50} />
              <h2 className="mt-3  font-medium text-lg">{file?.fileName}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PDFDashboardPage;
