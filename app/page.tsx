"use client";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Welcome to the Next.js App</h1>
            <nav>
                <ul>
                    <li><Link href="/supabase" className="mainlink">Supabase Example</Link></li>
                    <li><Link href="/ekart" className="mainlink">EKart (Redux)</Link></li>
                    <li><Link href="/posts" className="mainlink">Posts (RestAPI)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
