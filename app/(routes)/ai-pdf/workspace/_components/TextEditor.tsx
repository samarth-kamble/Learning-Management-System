"use client";
import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorExtension from "./EditorExtension";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const TextEditor = ({ fileId }: { fileId: any }) => {
  const notes = useQuery(api.notes.GetNotes, { fileId: fileId });
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Write your notes here..." }),
      Underline,
      Highlight.configure({ multicolor: true }),
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
  });

  useEffect(() => {
    editor && editor.commands.setContent(notes);
  }, [notes]);

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorExtension editor={editor} />
      <div className="overflow-scroll h-[88vh]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
