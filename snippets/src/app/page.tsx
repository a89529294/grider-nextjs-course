import db from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
        key={snippet.id}
      >
        {snippet.title}
        <div className="ml-auto">view</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold ">Snippets</h1>
        <Link className="border p-2 rounded" href="/snippets/new">
          New
        </Link>
      </div>

      <div className="flex gap-2 flex-col">{renderedSnippets}</div>
    </div>
  );
}
