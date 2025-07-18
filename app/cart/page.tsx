'use client'

import { useCart } from '../store/cartStore'
import Link from 'next/link'

export default function CartPage() {
  const items = useCart((state) => state.items)
  const removeFromCart = useCart((state) => state.removeFromCart)
  const clearCart = useCart((state) => state.clearCart)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Go shopping!</Link></p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>${item.price} each</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 font-bold">
            Subtotal: ${subtotal.toFixed(2)}
          </div>

          <div className="mt-4">
            <Link href="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
