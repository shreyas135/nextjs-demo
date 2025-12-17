// app/ekart/components/Header.tsx
"use client";

export default function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">eKart</h1>
      <div className="flex items-center gap-2">
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
}
