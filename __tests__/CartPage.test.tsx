import { render, screen } from '@testing-library/react'
import CartPage from '../app/cart/page'
import { useCart } from '../app/store/cartStore'

jest.mock('../app/store/cartStore', () => ({
  useCart: jest.fn(),
}))

describe('CartPage', () => {
  it('renders cart heading when cart is empty', () => {
    ;(useCart as jest.Mock).mockReturnValue({
      items: [],
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
    })
    render(<CartPage />)
    expect(screen.getByText(/Your Cart/i)).toBeInTheDocument()
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
  })
})
