"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PostsList() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}><Link href={`/posts/${post.id}`} className="mainlink">{post.title}</Link></li>
      ))}
    </ul>
  );
}
