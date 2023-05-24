import './narbar.scss'
import { useState, useContext, useEffect  } from 'react';
import { Input, Modal } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import UserContext from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { searchContentApi } from '../../../api/content/content.api';

const NavBar = () => {
  const { Search } = Input;
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const { dbUser } = useContext(UserContext)
  const location = useLocation();



  return (
    <header className='navbar-page'>
      <nav className='navbar-page__nav'>
        <ul className='navbar-page__nav__list'>
          <Link to='/'><img src={logo} alt='name' className='navbar-page__nav__list' /></Link>
          <Link to='memes'><li className={`navbar-page__nav__list__item ${location.pathname === '/memes' ? 'active' : ''}`}>Memes</li></Link>
          <Link to='gifs'><li className={`navbar-page__nav__list__item ${location.pathname === '/gifs' ? 'active' : ''}`}>Gifs </li></Link>
          {isAuthenticated ? (
            <>
              <Link to='upload' ><li className={`navbar-page__nav__list__item ${location.pathname === '/upload' ? 'active' : ''}`}>Upload</li></Link>
              <Link to='mycontent'><li className={`navbar-page__nav__list__item ${location.pathname === '/mycontent' ? 'active' : ''}`}>My content</li></Link>
              <Link to='favorite'><li className={`navbar-page__nav__list__item ${location.pathname === '/favorites' ? 'active' : ''}`}>Favorites</li></Link>
            </>
          ) : ''}

          <li className='navbar-page__nav__list__item login' onClick={() => { isAuthenticated ? logout() : loginWithRedirect() }} >{isAuthenticated ? 'Logout' : 'Login'}</li>
        </ul>
        <div className='navbar-page__nav__search'>
          <Search
            placeholder="Search..."
            enterButton="Search"
            size="large"
            className='navbar-page__nav__search--input' />
            
        </div>
        
        <div className='navbar-page__nav__filter'>
          {isAuthenticated ? (
            <>
              <img src='https://media.giphy.com/media/mWYyIy38pOm6zWuBz9/giphy.gif' className='navbar-page__nav__filter--img' /><p>Hi, {dbUser.nickname}!</p>
            </>) : ''}
          <button className='navbar-page__nav__filter--btn'>#All</button>
          <button className='navbar-page__nav__filter--btn'>#Animals</button>
          <button className='navbar-page__nav__filter--btn'>#WoW</button>
          <button className='navbar-page__nav__filter--btn'>#Sport</button>
          <button className='navbar-page__nav__filter--btn'>#Reactions</button>
        </div>
      </nav>

    </header>
  )
}

export default NavBar

