"use client";
import Link from "next/link";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <Link href="/" className="mainlink">Home</Link>
      <h1>⚡Oops!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
