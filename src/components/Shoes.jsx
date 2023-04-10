import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'

const Shoes = () => {
  const shoe = items.products[0]

  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <h2 className='text-2xl font-bold pb-2'>{shoe.name}</h2>
      <h4 className='text-xl pb-3'>{shoe.description}</h4>
      <p className='text-xl font-bold pb-2'>${shoe.price}</p>
      <p className='text-xl pb-3'>Available: {shoe.stock}</p>
      <FontAwesomeIcon icon={faShoePrints} className='h-32' />
    </div>
  )
}

export default Shoes
