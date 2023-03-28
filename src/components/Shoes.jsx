import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'

const Shoes = () => {
  const shoe = items.products[0]

  return (
    <div>
      <h2>{shoe.name}</h2>
      <h4>{shoe.description}</h4>
      <p>{shoe.price}</p>
      <p>Available: {shoe.stock}</p>
      <FontAwesomeIcon icon={faShoePrints} className='h-32' />
    </div>
  )
}

export default Shoes
