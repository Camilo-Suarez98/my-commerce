import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'

const Shoes = () => {
  const shoe = items.products[0]

  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <h2 className='text-2xl font-bold'>{shoe.name}</h2>
      <h4 className='text-xl'>{shoe.description}</h4>
      <p className='text-xl'>${shoe.price}</p>
      <p className='text-xl'>Available: {shoe.stock}</p>
      <FontAwesomeIcon icon={faShoePrints} className='h-32' />
    </div>
  )
}

export default Shoes
