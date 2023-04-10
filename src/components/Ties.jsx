import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const Shorts = () => {
  const tie = items.products[3]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <h2 className='text-2xl font-bold pb-2'>{tie.name}</h2>
      <h4 className='text-xl pb-3'>{tie.description}</h4>
      <p className='text-xl font-bold pb-2'>${tie.price}</p>
      <p className='text-xl pb-2'>Available: {tie.stock}</p>
      <FontAwesomeIcon icon={faUserTie} className='h-32 pt-2' />
    </div>
  )
}

export default Shorts
