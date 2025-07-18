export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
      <a href="/" className="text-blue-500 underline mt-4 block">
        Go back to Home
      </a>
    </div>
  )
}
