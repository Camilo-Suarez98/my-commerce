import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'
import { MoreAndLessButton } from './MoreAndLessButton'
import { CardItem } from './CardItem'

const Shoes = () => {
  const shoe = items.products[0]

  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <CardItem name={shoe.name} description={shoe.description} price={shoe.price} />
      <FontAwesomeIcon icon={faShoePrints} className='h-32' />
      <MoreAndLessButton stockProduct={shoe.stock} />
    </div>
  )
}

export default Shoes
