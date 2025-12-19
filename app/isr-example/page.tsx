import Link from "next/link";
type User = {
    id: number;
    name: string;
    email: string;
};

export default async function Page() {
    // Fetch with ISR enabled (revalidate every 60 seconds)
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 60 }, // ISR: page regenerates at most once per 60s
    });
    const users: User[] = await res.json();

    return (
        <div>
            <p><Link href="/" className="mainlink">Home</Link></p>
            <h1>Users (ISR Example)</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
