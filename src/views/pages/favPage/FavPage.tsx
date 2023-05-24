import UserContext from '../../../context/UserContext';
import { useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';
import { useAuth0 } from '@auth0/auth0-react';
import './favPage.scss'

function FavPage() {
  const { dbUser } = useContext(UserContext)
  const {isLoading, isAuthenticated} = useAuth0()


  return (
    <>
    {isLoading ? <Spinner/> : (
    <div>
      {isAuthenticated ? (<p className='fav_p'>Dear, {dbUser.name}</p>) : (<p className='fav_p'>Dear, user!</p>) }
      <p className='fav_p'>We are working on this page</p>
      <div id="heart"></div> 
      </div>)}
    </>
  )
}

export default FavPage