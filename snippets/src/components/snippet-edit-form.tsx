"use client";
import { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";
import { useParams } from "next/navigation";

export default function SnippetEditForm({ snippet }: { snippet: Snippet }) {
  const params = useParams();
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, +params.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
      <form action={editSnippetAction}>
        <button className="p-2 border rounded">save</button>
      </form>
    </div>
  );
}
