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
      <p>{product.shortDesc}</p>
    </div>
  ))

	return (
    <div>
      <Link to='./shoes'>{wareHouse[0]}</Link>
      <Link to='./bags'>{wareHouse[1]}</Link>
      <Link to='./shirts'>{wareHouse[2]}</Link>
      <Link to='./ties'>{wareHouse[3]}</Link>
      <Routes>
        <Route path='/shoes/*' element={ <Shoes /> }></Route>
        <Route path='/bags/*' element={ < Bags /> }></Route>
        <Route path='/shirts/*' element={ < Shirts /> }></Route>
        <Route path='/ties/*' element={ < Ties /> }></Route>
      </Routes>
    </div>
  )
}

export default Products
