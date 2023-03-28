import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Bags = () => {
  const bag = items.products[1]
  
  return (
    <div>
      <h2>{bag.name}</h2>
      <h4>{bag.description}</h4>
      <p>{bag.price}</p>
      <p>Available: {bag.stock}</p>
      <FontAwesomeIcon icon={faShoppingBag} className='h-32' />
    </div>
  )
}

export default Bags
