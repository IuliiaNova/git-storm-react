import './itemComponent.scss'
import UserContext from '../../../context/UserContext'
import { useContext } from 'react'

function ItemComponent({_id, url, userId}: any) {
  const { dbUser } = useContext(UserContext)

 
  return (
    <div className='item' key={_id}>
      <img src={url} alt='name' className='item__img'/>
      {dbUser._id == userId ? (<p className='item__p'>{dbUser.nickname}</p>) : ''}
    </div>
  )
}

export default ItemComponent