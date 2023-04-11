import { useState } from 'react'

export const MoreAndLessButton = ({stockProduct}) => {
  const [ currentStock, setCurrentStock ] = useState(stockProduct - 1)
  const [ unititesToBuy, setUnititesToBuy ] = useState(1)

  const lessItem = () => {
    if (unititesToBuy > 1) {
      setCurrentStock(currentStock + 1)
      setUnititesToBuy(unititesToBuy - 1)
    }
  }

  const moreItem = () => {
    if (unititesToBuy < stockProduct) {
      setCurrentStock(currentStock - 1)
      setUnititesToBuy(unititesToBuy + 1)
    }
  }

  return (
    <>
      <p className='text-xl pb-3'>Available: {currentStock}</p>
      <section>
        <button onClick={lessItem}>-</button>
        <p>{unititesToBuy}</p>
        <button onClick={moreItem}>+</button>
      </section>
    </>
  )
}
