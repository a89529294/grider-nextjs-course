import { db } from "@/db";

export type PostWithData = Awaited<
  ReturnType<typeof fetchPostsByTopicSlug>
>[number];

const include = {
  topic: {
    select: {
      slug: true,
    },
  },
  user: {
    select: {
      name: true,
    },
  },
  _count: {
    select: { comments: true },
  },
};

export function fetchPostsByTopicSlug(slug: string) {
  return db.post.findMany({
    where: {
      topic: {
        is: {
          slug,
        },
      },
    },
    include,
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: { _count: "desc" },
      },
    ],
    include,
    take: 5,
  });
}

export function fetchPostsBySearchTerm(term: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
    include,
  });
}
