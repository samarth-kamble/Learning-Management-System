"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useAction, useMutation } from "convex/react";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import uuid4 from "uuid4";

const UploadPDF = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);

  const AddFileEntry = useMutation(api.fileStorage.AddFileEntryToDb);
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const embeddedDocument = useAction(api.myAction.ingest);

  const OnFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    setFile(files[0]);
  };
  const OnUpload = async () => {
    setLoading(true);
    try {
      const postUrl = await generateUploadUrl();
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file!.type },
        body: file!,
      });
      const { storageId } = await result.json();
      console.log(storageId);

      const fileId = uuid4();

      const fileUrl = await getFileUrl({ storageId: storageId });

      const res = await AddFileEntry({
        fileId,
        storageId,
        fileName: fileName ?? "Untitled File",
        createdBy: user?.primaryEmailAddress?.emailAddress ?? "",
        fileUrl: fileUrl ?? "",
      });
      console.log(res);

      const ApiResponse = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);
      console.log(ApiResponse.data.result);

      const splitText = Array.isArray(ApiResponse.data.result)
        ? ApiResponse.data.result
        : [ApiResponse.data.result];

      const embeddedResult = await embeddedDocument({
        splitText: splitText,
        fileId: fileId as string,
      });
      console.log(embeddedResult);
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
    }
  };
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="w-full">
          + Upload PDF File
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a PDF File?</DialogTitle>
          <DialogDescription asChild>
            <div className="">
              <Label className="mt-5">Select a PDF file from your device</Label>
              <div className=" gap-2 p-3 rounded-md border border-slate-200">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => OnFileSelect(event)}
                />
              </div>
              <div className="mt-2">
                <Label>File Name*</Label>
                <Input
                  placeholder="Enter a name for your file"
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={OnUpload} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPDF;
