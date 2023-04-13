import { useState } from 'react'

export const CartButton = ({ name }) => {
  const [ countItem, setCountItem ] = useState(0)
  const [ cartItems, setCartItems ] = useState([])

  const addCart = () => {
    setCountItem(countItem + 1)
    setCartItems([...cartItems, name])
  }

  return (
    <button onClick={addCart}>
      Add to Cart
    </button>
  )
}
