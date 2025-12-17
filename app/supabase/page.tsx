import Link from "next/link";
export default function SupabasePage() {
    return (
        <div>
            <p><Link href="/" className="mainlink">Home</Link></p>
            <h1>Supabase Page</h1>
            <nav>
                <ul>
                    <li><Link href="/supabase/login" className="sublink">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}