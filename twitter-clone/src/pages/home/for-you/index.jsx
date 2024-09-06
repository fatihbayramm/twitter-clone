import { useState } from "react";
import Post from "../../../components/post";
import { posts as postData } from "../../../mock/posts";
import { VList } from "virtua";

export default function ForYou() {
  const [posts, setPosts] = useState(postData);
  return (
    <VList
      style={{ height: 1200 }}
      onRangeChange={(start, end) => {
        if (end + 1 === posts.length) {
          setPosts((prev) => [...prev, ...postData]);
        }
      }}
    >
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </VList>
  );
}
