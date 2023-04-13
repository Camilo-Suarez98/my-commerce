import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { MoreAndLessButton } from './MoreAndLessButton'
import { CardItem } from './CardItem'
import { CartButton } from './CartButton'

const Shirts = () => {
  const shirt = items.products[2]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <CardItem name={shirt.name} description={shirt.description} price={shirt.price} />
      <FontAwesomeIcon icon={faShirt} className='h-32' />
      <MoreAndLessButton stockProduct={shirt.stock} />
      <CartButton name={shirt.name} />
    </div>
  )
}

export default Shirts
