import { notFound } from 'next/navigation';
export default function UserPage() {
    const user = null;
    if (!user) {
        notFound();
    }
    return <div>User Found</div>;
}