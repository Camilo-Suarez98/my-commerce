import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Bags = () => {
  const bag = items.products[1]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <h2 className='text-2xl font-bold'>{bag.name}</h2>
      <h4 className='text-xl'>{bag.description}</h4>
      <p className='text-xl'>${bag.price}</p>
      <p className='text-xl'>Available: {bag.stock}</p>
      <FontAwesomeIcon icon={faShoppingBag} className='h-32' />
    </div>
  )
}

export default Bags
