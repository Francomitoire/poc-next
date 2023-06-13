const fetchComments = (id: string) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

export default async function PostComments({ params }: { params: any }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul
      style={{
        padding: "20px",
        marginTop: "20px",
        listStyle: "none",
        backgroundColor: "#EBEBEB",
      }}
    >
      {comments.map((comment: any) => (
        <li
          key={comment.id}
          style={{
            padding: "15px",
            marginBottom: "5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <h2 style={{ fontWeight: 600, color: "#394752" }}>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
