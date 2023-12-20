import { notFound } from "next/navigation";
import db from "@/db";
import Link from "next/link";
import * as actions from "@/actions";

export default async function SnippetShowPage(props: {
  params: { id: string };
}) {
  await new Promise((r) => setTimeout(r, 1000));
  const snippet = await db.snippet.findUnique({
    where: { id: +props.params.id },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(
    null,
    +props.params.id
  );

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            className="p-2 border rounded"
            href={`/snippets/${snippet.id}/edit`}
          >
            edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

// export async function generateStaticParams() {
//   const snippets = await db.snippet.findMany();
//   return snippets.map((v) => ({ id: v.id.toString() }));
// }
