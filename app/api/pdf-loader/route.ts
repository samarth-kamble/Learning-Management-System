import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function GET(req: Request) {
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const pdfUrl = searchParams.get("pdfUrl");
  if (!pdfUrl) {
    return NextResponse.json({ error: "PDF URL is required" }, { status: 400 });
  }
  const response = await fetch(pdfUrl);
  const data = await response.blob();
  const loader = new WebPDFLoader(data);

  const docs = await loader.load();

  let pdfTextContent = "";
  docs.forEach((doc) => {
    pdfTextContent = pdfTextContent + doc.pageContent;
  });

  // Step 2: Text Spilting
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 20,
  });

  const output = await splitter.createDocuments([pdfTextContent]);

  const spilitterList: string[] = [];
  output.forEach((doc) => {
    spilitterList.push(doc.pageContent);
  });

  //  TODO: Step 3: Embed the text into Vector format

  return NextResponse.json({ result: spilitterList });
}
