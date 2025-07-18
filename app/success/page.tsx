'use client'

import Link from 'next/link'

export default function SuccessPage() {
  const orderId = Math.floor(Math.random() * 1000000)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You for Your Order!</h1>
      <p className="text-lg mb-2">Your Order ID is: <span className="font-mono">{orderId}</span></p>
      <p className="mb-4 text-center text-gray-700">
        We have received your order and it is being processed.
      </p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Back to Home
        </button>
      </Link>
    </div>
  )
}
