import React from "react";

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
  console.log(fileUrl);
  return (
    <div>
      <iframe
        src={fileUrl + "#toolbar=0"}
        height={"90vh"}
        width={"100%"}
        className="h-[90vh]"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
