import Link from "next/link";
export default function SupabasePage() {
    return (
        <div>
            <h1>Supabase Page</h1>
            <nav>
                <ul>
                    <li><Link href="/supabase/todos" className="sublink">Todos</Link></li>
                    <li><Link href="/supabase/login" className="sublink">Login</Link></li>
                    <li><Link href="/" className="mainlink">Home</Link></li>
                </ul>
            </nav>
        </div>
    );
}