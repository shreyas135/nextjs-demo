'use client';

// app/posts/page.tsx
import { Suspense } from "react";
import PostsList from "./PostsList";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <Link href="/" className="mainlink">Home</Link>
      <h1>Posts</h1>
      <Suspense fallback={<p>Loading posts list...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
}