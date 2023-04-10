import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt } from '@fortawesome/free-solid-svg-icons'

const Shirts = () => {
  const shirt = items.products[2]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <h2 className='text-2xl font-bold pb-2'>{shirt.name}</h2>
      <h4 className='text-xl pb-3'>{shirt.description}</h4>
      <p className='text-xl font-bold pb-2'>${shirt.price}</p>
      <p className='text-xl pb-3'>Available: {shirt.stock}</p>
      <FontAwesomeIcon icon={faShirt} className='h-32' />
    </div>
  )
}

export default Shirts
