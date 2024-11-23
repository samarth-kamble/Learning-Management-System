"use node";

import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
  args: {
    splitText: v.array(v.string()),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const metadata = args.splitText.map(() => ({ fileId: args.fileId }));

    await ConvexVectorStore.fromTexts(
      args.splitText,
      metadata,
      new GoogleGenerativeAIEmbeddings({
        apiKey: "AIzaSyAvsJjemCnB_wUxS6_hzbuU1CJ9qGn9nmE",
        model: "embedding-001",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );
    console.log(args.fileId);
    return "Success";
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const vectorStore = new ConvexVectorStore(
        new GoogleGenerativeAIEmbeddings({
          apiKey: "AIzaSyAvsJjemCnB_wUxS6_hzbuU1CJ9qGn9nmE",
          model: "embedding-001",
          taskType: TaskType.RETRIEVAL_DOCUMENT,
          title: "Document title",
        }),
        { ctx }
      );

      console.log("Query:", args.query);
      console.log("FileId:", args.fileId);

      const searchResults = await vectorStore.similaritySearch(args.query, 1);
      console.log("Search Results:", searchResults);

      const resultOne = searchResults.filter(
        (q) => q.metadata.fileId === args.fileId
      );

      console.log("Filtered Results:", resultOne);
      return JSON.stringify(searchResults);
    } catch (error: any) {
      console.error("Search Error:", error);
      return JSON.stringify({ error: "Search failed", details: error.message });
    }
  },
});
