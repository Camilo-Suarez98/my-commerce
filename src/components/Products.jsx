import items from '../items.json'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Shoes from './Shoes';
import Bags from './Bags';
import Shirts from './Shirts';
import Ties from './Ties';

const Products = () => {
  const inventory = items.products
  
  const wareHouse = inventory.map(product => (
    <div key={product.id}>
      <h2>{product.name}</h2>
    </div>
  ))

	return (
    <>
      <div className='grid grid-cols-4 place-items-center text-2xl'>
        <Link className='hover:font-bold hover:text-gray-300' to='./shoes'>{wareHouse[0]}</Link>
        <Link className='hover:font-bold hover:text-gray-300' to='./bags'>{wareHouse[1]}</Link>
        <Link className='hover:font-bold hover:text-gray-300' to='./shirts'>{wareHouse[2]}</Link>
        <Link className='hover:font-bold hover:text-gray-300' to='./ties'>{wareHouse[3]}</Link>
      </div>
      <Routes>
        <Route path='/shoes/*' element={ <Shoes /> }></Route>
        <Route path='/bags/*' element={ < Bags /> }></Route>
        <Route path='/shirts/*' element={ < Shirts /> }></Route>
        <Route path='/ties/*' element={ < Ties /> }></Route>
      </Routes>
    </>
  )
}

export default Products
