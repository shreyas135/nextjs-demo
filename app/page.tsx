import Link from "next/link";
import "./globals.css";
export default function Page() {
    return (
        <div>
            <h1>Welcome to the Next.js App</h1>
            <nav>
                <ul>
                    <li><Link href="/supabase" className="mainlink">Supabase (Example)</Link></li>
                    <li><Link href="/ekart" className="mainlink">EKart (Redux)</Link></li>
                    <li><Link href="/posts" className="mainlink">Posts (RestAPI)</Link></li>
                    <li><Link href="/ssr-example" className="mainlink">SSR (Example)</Link></li>
                    <li><Link href="/isr-example" className="mainlink">ISR (Example)</Link></li>
                    <li><Link href="/page-not-found" className="mainlink">not-found.tsx (throw new Error)</Link></li>
                    <li><Link href="/notfound-example" className="mainlink">not-found.tsx (notFound() function)</Link></li>
                    <li><Link href="/global-error-example" className="mainlink">global-error.tsx (throw new Error function)</Link></li>
                    <li><Link href="/error-example" className="mainlink">error.tsx (Example)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
