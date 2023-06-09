import { LikeButton } from "@/app/components/likeButton/LikeButton";
import Link from "next/link";

const fechtPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function PostPage() {
  const posts = await fechtPosts();
  return (
    <>
      <h1>Aca se muestran los posts</h1>
      <section
        style={{
          padding: "5px",
          marginTop: "30px",
          boxShadow: "4px 4px 0px 0px #CDCDCD ",
          backgroundColor: "#EBEBEB",
        }}
      >
        {posts.slice(0, 5).map((post: any) => (
          <Link key={post.id} href={`/dashboard/posts/${post.id}`}>
            <article
              style={{
                padding: "25px",
                marginBottom: "5px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h2 style={{ fontWeight: 600, color: "#2947a2" }}>
                {post.title}
              </h2>
              <p>{post.body}</p>
              <LikeButton id={post.id} />
            </article>
          </Link>
        ))}
      </section>
    </>
  );
}
