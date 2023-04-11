import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { MoreAndLessButton } from './MoreAndLessButton'
import { CardItem } from './CardItem'

const Bags = () => {
  const bag = items.products[1]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <CardItem name={bag.name} description={bag.description} price={bag.price} />
      <FontAwesomeIcon icon={faShoppingBag} className='h-32' />
      <MoreAndLessButton stockProduct={bag.stock} />
    </div>
  )
}

export default Bags
