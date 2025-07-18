import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/products.json')
      if (!res.ok) throw new Error('Failed to fetch products')
      return res.json()
    }
  })
}