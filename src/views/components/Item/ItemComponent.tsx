import './itemComponent.scss'
import UserContext from '../../../context/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContentContext from '../../../context/contentContext/ContentContext'

function ItemComponent({_id, url, userId}: any) {
  const { dbUser } = useContext(UserContext)
  

  return (
    
    <Link to={`/memes/${_id}`} className=''>
    <div className='item' key={_id}>
      <img src={url} alt='name' className='item__img'/>
      {dbUser._id == userId ? (<p className='item__p'>{dbUser.nickname}</p>) : ''}
    </div>
    </Link>
  )
}

export default ItemComponent