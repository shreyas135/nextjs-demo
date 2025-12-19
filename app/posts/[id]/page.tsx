'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'


type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export default function PostPage() {
  const [data, setData] = useState<Post | null>(null);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Post Data</h1>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
      <Link href={"/posts/"} className="mainlink">Go Back to Posts List</Link>
    </div>
  );
}
