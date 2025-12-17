"use client";
export default function ProductCard({ product, addToCart }: any) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
