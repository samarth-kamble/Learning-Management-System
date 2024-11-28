"use client";
import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  Code,
  TextQuote,
  Sparkles,
} from "lucide-react";
import "./Highlight.css";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { chatSession } from "@/lib/gemini";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";

const EditorExtension = ({ editor }: { editor: Editor }) => {
  const { fileId } = useParams();
  const SearchAI = useAction(api.myAction.search);
  const { user } = useUser();
  const addNotes = useMutation(api.notes.Addnotes);
  const { toast } = useToast();

  const onAiClick = async () => {
    toast({
      title: "AI is working on your query",
      variant: "default",
    });
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " "
    );
    console.log(selectedText);

    const result = await SearchAI({
      query: selectedText,
      fileId: fileId as string,
    });

    const UnformattedAns = JSON.parse(result);
    let AllFormattedAns = "";
    UnformattedAns &&
      UnformattedAns.forEach((item: any) => {
        AllFormattedAns = AllFormattedAns + item.pageContent;
      });

    console.log("AllFormattedAns", AllFormattedAns);
    const PROMPT =
      "Question: " +
      selectedText +
      "and with the given content as answer , " +
      "Please give appropriate answer in HTML format. The answer content is:" +
      AllFormattedAns;

    const AiModelResult = await chatSession.sendMessage(PROMPT);
    const FinalAnswer = AiModelResult.response.text();

    const AllText = editor.getHTML();
    editor.commands.setContent(
      AllText + "<p> <strong>Answer:</strong>" + FinalAnswer + "</p>"
    );

    addNotes({
      notes: editor.getHTML(),
      fileId: fileId as string,
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "",
    });
  };
  return (
    editor && (
      <div className="p-5 ">
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""
              }
            >
              <Heading1 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "is-active" : ""
              }
            >
              <Heading2 />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "is-active" : ""
              }
            >
              <Heading3 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "text-blue-500" : ""}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "text-blue-500" : ""}
            >
              <Italic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "text-blue-500" : ""}
            >
              <UnderlineIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive("codeBlock") ? "is-active" : ""}
            >
              <Code />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive("blockquote") ? "is-active" : ""}
            >
              <TextQuote />
            </button>
            <button
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .toggleHighlight({ color: "#ffc078" })
                  .run()
              }
              className={
                editor.isActive("highlight", { color: "#ffc078" })
                  ? "text-blue-500"
                  : ""
              }
            >
              <Highlighter />
            </button>
            <button onClick={() => onAiClick()} className={""}>
              <Sparkles />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditorExtension;
