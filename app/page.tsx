"use client";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Welcome to the Next.js App</h1>
            <nav>
                <ul>
                    <li><Link href="/supabase" className="mainlink">Supabase Page</Link></li>
                </ul>
            </nav>
        </div>
    );
}
