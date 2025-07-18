'use client';

import { useProducts } from '../hooks/useProducts';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const { data, isLoading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading)
    return <p className="p-4 text-center text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="p-4 text-center text-red-500">Failed to load products</p>
    );

  const filteredProducts = data.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-slate-900">
      {/* Responsive Navbar */}
      <div className="sticky top-0 bg-slate-900 text-white py-3 px-4 shadow-md z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <h2 className="text-xl font-bold">MINI COMMERCE</h2>
          <Link href="/cart" className="sm:hidden">
            <button className="bg-yellow-800 text-white px-3 py-1 rounded hover:bg-white hover:text-black transition text-sm">
              View Cart
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="px-2 py-1 bg-slate-50 text-black text-sm w-full sm:w-auto "
          />
          <Link href="/cart" className="hidden sm:block">
            <button className="bg-yellow-800 text-white px-3 py-1 rounded hover:bg-white hover:text-black transition text-sm">
              View Cart
            </button>
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {filteredProducts.map((product: any) => (
          <Link href={`/product/${product.slug}`} key={product.id}>
            <div className="border bg-slate-50 p-4 rounded shadow shadow-slate-900 cursor-pointer hover:shadow-lg transition text-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
