'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const [data, setData] = useState<any[]>([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); // ✅ single post
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
