import UserContext from '../../../context/UserContext';
import { useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';
import { useAuth0 } from '@auth0/auth0-react';
import './favPage.scss'
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';

function FavPage() {
  const { dbUser } = useContext(UserContext)
  const {isLoading, isAuthenticated} = useAuth0()


  return (
    <HelmetSEO
      title={'Favorites GIF Strom'}
      description='Your favorite collection'
    > 
    {isLoading ? <Spinner/> : (
    <div>
      {isAuthenticated ? (<p className='fav_p'>Dear, {dbUser.name}</p>) : (<p className='fav_p'>Dear, user!</p>) }
      <p className='fav_p'>We are working on this page</p>
      <div id="heart"></div> 
      </div>)}
    </HelmetSEO>
  )
}

export default FavPage