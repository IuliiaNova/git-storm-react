import './itemComponent.scss'
import UserContext from '../../../context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContentContext from '../../../context/contentContext/ContentContext'
import { getAllUsers } from '../../../api/user.api'
import { useAuth0 } from '@auth0/auth0-react'

function ItemComponent({_id, url, userId}: any) {
  const { dbUser } = useContext(UserContext)
  const {isAuthenticated, isLoading} = useAuth0()
  const [users, setUsers] = useState()


  useEffect(() => {
    const featchUsers = async () => {
      if (!isLoading && isAuthenticated) {
        try{
          const response = await getAllUsers();
          setUsers(response)
        }catch (error) {
          console.error(error);
        }
      }
    }
    featchUsers()

  }, [isLoading, isAuthenticated])

  const getUserNickname = (userId: string) => {
    const user = users ? users.content.find((user: any) => user._id === userId) : '';
    return user ? user.nickname : '';
  };
  
  return (
    
    <Link to={`/memes/${_id}`} className=''>
    <div className='item' key={_id}>
      <img src={url} alt='name' className='item__img'/>
      {dbUser._id === userId ? (
      <p className='item__p'>{dbUser.nickname}</p>
      ) : (
         <p className='item__p'>{getUserNickname(userId)}</p> 
      )}
    </div>
    </Link>
  )
}

export default ItemComponent