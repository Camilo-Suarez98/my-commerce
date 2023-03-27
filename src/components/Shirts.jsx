import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt } from '@fortawesome/free-solid-svg-icons'

const Shirts = () => {
  const shirt = items.products[2]
  
  return (
    <div>
      <h3>{shirt.name}</h3>
      <h3>{shirt.description}</h3>
      <p>{shirt.price}</p>
      <p>Available: {shirt.stock}</p>
      <FontAwesomeIcon icon={faShirt} />
    </div>
  )
}

export default Shirts
