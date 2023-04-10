import Home from './Home';
import Products from './Products';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Layout = () => {
  const { isAuthenticated } = useAuth0()
  const [ showButton, setShowButton ] = useState('hidden')

  const showLogOut = () => {
    setShowButton(showButton === 'hidden' ? 'block' : 'hidden')
  }

  return (
    <>
      <Router>
        <div className="App w-3/4 m-auto pt-8 pb-4">
          <nav className='relative h-16 leading-10'>
            <ul className="App-header absolute top-0 bottom-0 left-0 right-0 flex justify-around">
              <li className='text-xl'>
                <Link to="./">Home</Link>
              </li>
              <li className='text-xl'>
                <Link to="./products">Products</Link>
              </li>
              {
                isAuthenticated ?
                  <div>
                    <li className='flex items-center text-xl'>
                      <Profile />
                      <button className='flex' onClick={showLogOut}>
                        <span className="material-symbols-outlined">
                          keyboard_arrow_down
                        </span>
                      </button>
                    </li>
                    <p className={showButton}>
                      <LogoutButton />
                    </p>
                  </div> :
                  <li>
                    <LoginButton />
                  </li>
              }
            </ul>
          </nav>
          <Routes>
            <Route path='/*' element={ <Home /> }></Route>
            <Route path='/products/*' element={ <Products /> }></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default Layout
