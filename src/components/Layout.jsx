import Home from './Home';
import Products from './Products';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Layout = ({children}) => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="./components/home">Home</Link>
            </li>
            <li>
              <Link to="./components/products">Products</Link>
            </li>
            {
              isAuthenticated ?
                <div>
                  <li>
                    <Profile />
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </div> :
                <li>
                  <LoginButton />
                </li>
            }
          </ul>
          <Routes>
            <Route path='/components/home/*' element={ <Home /> }></Route>
            <Route path='/components/products/*' element={ <Products /> }></Route>
          </Routes>
        </div>
      </Router>
      {children}
    </>
  )
}

export default Layout
