import { LikeButton } from "@/app/components/likeButton/LikeButton";
import Link from "next/link";

const fetchSinglePost = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

export default async function PostLayout({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article
      key={post.id}
      style={{
        padding: "25px",
        marginBottom: "5px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <h2 style={{ fontWeight: 600, color: "#2947a2" }}>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/dashboard/posts/${id}/comments`}>See Comments</Link>
      {children}
    </article>
  );
}
