import Link from "next/link";

type User = {
    name: string;
    email: string;
};

export default async function Page() {
    // Fetch data directly in the server component
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store", // ensures fresh data on every request
    });
    const users: User[] = await res.json();

    return (
        <div>
            <p><Link href="/" className="mainlink">Home</Link></p>
            <h1>Users (SSR Example)</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.email}> {user.name} - {user.email} </li>
                ))}
            </ul>
        </div>
    );
}
