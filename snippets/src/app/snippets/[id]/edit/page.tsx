import SnippetEditForm from "@/components/snippet-edit-form";
import db from "@/db";
import { notFound } from "next/navigation";

export default async function SnippetEditPage({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
