'use client'

import { useCart } from '../store/cartStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CheckoutPage() {
  const { items, clearCart } = useCart()
  const router = useRouter()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePlaceOrder = () => {
    clearCart()
    setOrderPlaced(true)
    setTimeout(() => {
      router.push('/success')
    }, 1500) // Redirect after 1.5 seconds
  }

  if (items.length === 0) {
    return <p className="p-4 text-center text-gray-500">Your cart is empty.</p>
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold mt-4">Total: ${total}</p>
      <button
        onClick={handlePlaceOrder}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-green-600 transition"
      >
        Place Order
      </button>

      {orderPlaced && <p className="text-green-600 mt-2">Order Placed! Redirecting...</p>}
    </div>
  )
}
