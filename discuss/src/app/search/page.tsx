import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    term?: string;
  };
}) {
  const term = searchParams.term;

  if (!term) redirect("/");

  const posts = await fetchPostsBySearchTerm(term);

  return <PostList fetchData={() => fetchPostsBySearchTerm(term)} />;
}
