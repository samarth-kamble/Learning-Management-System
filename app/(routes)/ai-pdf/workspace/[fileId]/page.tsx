"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import PdfViewer from "../_components/PdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import TextEditor from "../_components/TextEditor";

const WorkSpace = () => {
  const { fileId } = useParams();

  const fileInfo = useQuery(api.fileStorage.GetFileRecord, {
    fileId: fileId as string,
  });

  useEffect(() => {
    console.log(fileInfo);
  }, [fileInfo]);

  return (
    <div className="">
      <WorkspaceHeader />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <TextEditor />
        </div>
        <div>
          <PdfViewer fileUrl={fileInfo?.fileUrl ?? ""} />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
