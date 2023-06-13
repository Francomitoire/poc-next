"use client";
import { useState } from "react";

export function LikeButton({ id }: { id: string }) {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <button
      style={{
        backgroundColor: liked ? "#0d1b30" : "white",
        color: liked ? "white" : "#0d1b30",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "5px",
      }}
      onClick={() => setLiked(!liked)}
    >
      LIKE
    </button>
  );
}
