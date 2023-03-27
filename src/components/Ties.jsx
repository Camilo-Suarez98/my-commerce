import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const Shorts = () => {
  const tie = items.products[3]
  
  return (
    <div>
      <h2>{tie.name}</h2>
      <h4>{tie.description}</h4>
      <p>{tie.price}</p>
      <p>Available: {tie.stock}</p>
      <FontAwesomeIcon icon={faUserTie} />
    </div>
  )
}

export default Shorts
