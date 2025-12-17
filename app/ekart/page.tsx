"use client";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Link from "next/link";


export default function EkartPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const addToCart = useCallback(
    (product: any) => {
      setCart(prevCart => [...prevCart, product]);
    },
    [] // no external dependencies, so stable across renders
  );

  return (
    <div className="flex flex-col min-h-screen">
      <p><Link href="/" className="mainlink">Home</Link></p>
      <Header cartCount={cart.length} />
      <main className="flex-1 grid grid-cols-3 gap-4 p-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
