import items from '../items.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { MoreAndLessButton } from './MoreAndLessButton'
import { CardItem } from './CardItem'
import { CartButton } from './CartButton'

const Shorts = () => {
  const tie = items.products[3]
  
  return (
    <div className='border-gray-200 border-2 rounded-2xl my-6 p-4'>
      <CardItem name={tie.name} description={tie.description} price={tie.price} />
      <FontAwesomeIcon icon={faUserTie} className='h-32 pt-2' />
      <MoreAndLessButton stockProduct={tie.stock} />
      <CartButton name={tie.name} />
    </div>
  )
}

export default Shorts
