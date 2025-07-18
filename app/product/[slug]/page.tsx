'use client'

import { useProducts } from '../../../hooks/useProducts'
import { useCart } from '../../store/cartStore'
import Link from 'next/link'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { data, isLoading, error } = useProducts()
  const addToCart = useCart((state) => state.addToCart)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load product</p>

  const product = data.find((p: any) => p.slug === params.slug)

  if (!product) return <p>Product not found</p>

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
    alert('Product added to cart!')
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold my-2">{product.name}</h1>
      <p className="text-lg mb-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>

      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>

      <div className="mt-4">
        <Link href="/">← Back to Catalogue</Link>
      </div>
    </div>
  )
}

