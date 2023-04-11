import { useState } from 'react'

export const MoreAndLessButton = ({stockProduct}) => {
  const [ currentStock, setCurrentStock ] = useState(stockProduct)
  const [ unititesToBuy, setUnititesToBuy ] = useState(0)

  const lessItem = () => {
    if (unititesToBuy > 0) {
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
      <section className='flex justify-center'>
        {
          unititesToBuy > 0 ?
            <button className='w-6 text-2xl bg-blue-400 rounded' onClick={lessItem}>-</button> :
            <button className='w-6 text-2xl bg-blue-400 opacity-80 rounded' disabled onClick={lessItem}>-</button>
        }
        <p className='w-6 text-xl'>{unititesToBuy}</p>
        {
          currentStock === 0 ?
          <button className='w-6 text-2xl bg-blue-400 opacity-80 rounded' disabled onClick={moreItem}>+</button> : 
          <button className='w-6 text-2xl bg-blue-400 rounded' onClick={moreItem}>+</button>
        }
      </section>
    </>
  )
}
