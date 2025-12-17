'use client';

// app/posts/page.tsx
import { Suspense } from "react";
import PostsList from "./PostsList";

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<p>Loading posts list...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
}